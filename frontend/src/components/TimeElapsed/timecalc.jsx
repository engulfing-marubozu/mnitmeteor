export function TimeSince(date){

      let seconds = Math.floor((new Date() - date) / 1000);
      
      //  let  interval = seconds / 31536000;
      
        // if (interval > 1) {
        //   return `${date.toLocaleString("default", {
        //     month: "short",
        //   })} ${date.getDate()}, ${date.getFullYear()}`;
        // }
        let  interval = seconds / 2592000;
        if (interval > 1) {
        //   return Math.floor(interval) + " months ago";
         return `${date.toLocaleString("default", {
                month: "short",
              })} ${date.getDate()}, ${date.getFullYear()}`
        }


        interval = seconds / 86400;
        if (interval > 1) {
          const day=Math.floor(interval);
          return day>1?day +" days ago": day + " day ago";
        }
        // interval = seconds / 3600;
        // if (interval > 1) {
        //   return Math.floor(interval) + "hours ago";
        // }
        // interval = seconds / 60;
        // if (interval > 1) {
        //   return Math.floor(interval) + " minutes ago";
        // }
        return "Today";
      }
