




const xyz =((socket) =>{

    socket.on("initialise_user", (user_email)=>{
        console.log("bleha");
        users_scoket_id[user_email] = socket.id;
        console.log(users_scoket_id);
      }) 
    
    
      socket.on("admin approve event", () => {
        socket.broadcast.emit("approve_post_update");
      });
     
     socket.on("admin decline event", async (user_id) => {
       console.log("dbvjsbvknskvn");
       const user = await User.findById(user_id);
       console.log(users_scoket_id[user.email]);
       console.log(users_scoket_id);
       if(users_scoket_id[user.email])
       { console.log("mil gaya");
        io.to(users_scoket_id[user.email]).emit("declined_post_notification");
       }
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
  
  module.exports= {xyz};