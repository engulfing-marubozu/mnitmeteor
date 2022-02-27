const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { connect } = require("http2");
const http = require("http").createServer(app);

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowHeaders: ["content-type"],
  },
});
require("dotenv").config();

// variables
const port = 5000;

// Database connection

database_url = process.env.MONGODB_ATLAS;
mongoose
  .connect(database_url)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

//auto load routes and middlewares
app.use(cors());
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyparser.json({ limit: "50mb" }));
fs.readdirSync("./Routes").map((f) => app.use("/", require(`./Routes/${f}`)));

// socket io route and connects each time you run the server3

const users_scoket_id = {};
io.on("connect", (socket) => {
    console.log("connected");
    socket.on("initialise user", (user_email)=>{
    console.log("bleha");
    users_scoket_id[user_email] = socket.id;
    console.log(users_scoket_id);
  
  })


  socket.on("admin approve event", (agreement) => {
    socket.broadcast.emit("approved post update", agreement);
   
  });
 
socket.on("disconnect", () => {
    console.log("disconnected");
    Object.keys(users_scoket_id).forEach(key => {
      if((users_scoket_id[key] === socket.id))
           delete users_scoket_id[key];
        });
      console.log(users_scoket_id);
  });
});

// Local port connection
http.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
