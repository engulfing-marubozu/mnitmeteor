const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const { User, Prodcut } = require("./Models")
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { connect } = require("http2");
const { Console } = require("console");
const http = require("http").createServer(app);


const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowHeaders: ["content-type"],
  },
});


// variables
const port = 5000;

// Database connection

database_url = process.env.MONGODB_ATLAS;

// console.log(database_url);
// console.log(database_url);
mongoose
  .connect(database_url)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. Here \n${err}`);
  });

//auto load routes and middlewares
app.use(cors());
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyparser.json({ limit: "50mb" }));
fs.readdirSync("./routes").map((f) => app.use("/api", require(`./routes/${f}`)));

// socket io route and connects each time you run the server

const users_scoket_id = {};
io.on("connect", (socket) => {
  console.log("connected");

  socket.on("initialise_user", (user_email) => {
    console.log("bleha");
    users_scoket_id[user_email] = socket.id;
    console.log(users_scoket_id);
  })


  socket.on("admin approve event", () => {
    console.log("dprrhgrk ");
    socket.broadcast.emit("approve_post_update");
  });

  socket.on("admin decline/approve/interested event", async (user_id) => {
    console.log("dbvjsbvknskvn");
    const user = await User.findById(user_id);
    // console.log(user);
    console.log(users_scoket_id[user.email]);
    console.log(users_scoket_id);
    if (users_scoket_id[user.email]) {
      console.log("mil gaya");
      io.to(users_scoket_id[user.email]).emit("decline/approve/interesred_post_notification");
    }
  });
  socket.on("log_out_socket", async (user_id) => {
    console.log("disconnected");
    delete users_scoket_id[user_id];
    console.log(users_scoket_id);
  });
  socket.on("disconnect", () => {
    console.log("disconnected");
    Object.keys(users_scoket_id).forEach(key => {
      if ((users_scoket_id[key] === socket.id))
        delete users_scoket_id[key];
    });
    console.log(users_scoket_id);
  });
});

// Local port connection
http.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

module.exports = { users_scoket_id, io }