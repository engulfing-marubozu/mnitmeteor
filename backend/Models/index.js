const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;
const counter_schema = new mongoose.Schema({
  
    current_counter: {
      type: Number
    }
  
})
const lost_item_schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    imgs: [{}],
    posted_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    email: {
      type: String,
    },
    is_verified: {
      type: Boolean,
    },
    profile_pic: {
      type: String,
    },
    
  },
  {timestamps : true}
)
const user_schema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    profile_pic: {
      type: String, //it will never be null 
    },
    products_posted: {
      type: [{ type: Schema.Types.ObjectId, ref: "Product" }],
      default: [],
    },
    lf_items_posted: {
      type: [{type: Schema.Types.ObjectId, ref: "LostItem"}],
      default: [],
    },
    threads_posted: {
      type: [{ type: Schema.Types.ObjectId, ref: "Thread" }],
      default: [],
    },
    read_notif_count : {
         type : Number,
         default : 0
    },
    threads_saved: {
      type: [{}],
      default: [],
    },
    threads_liked: {
      type: [{ type: Schema.Types.ObjectId, ref: "Thread" }],
      default: [],
    },
    favourites: {
      type: [{ type: Schema.Types.ObjectId, ref: "Product" }],
      default: [],
    },
    interested: {
      type: [{ type: Schema.Types.ObjectId, ref: "Product" }],
      default: [],
    },
    Mobile_no: {
      type: String,
      default: null,
    },
    notification: {
      type: [{ }],
      default: [],
    },
  },
  { timestamps: true }
);

const products_schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    posted_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    images: {
      type: [{}],
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    interested_users: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    blue_heart: {
      type: Boolean,
      default: false,
    },
    show_interested: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const thread_schema = new mongoose.Schema(
  {
    posted_by: {
      type: Object,
      default: null,
    },
    profile_pic: {
      type: String,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    dislikes: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    users_mnit_id: {
      type: String,
    },
    is_saved: {
      type: Boolean,
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    document : {
           type :String,
           default : null,
    },
    discussions: {
      type: [
        {
          commented_by: {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
          mnit_id: {
            type: String,
          },
          content: {
            type: String,
            default: "",
          },
          profile_pic: {
            type: String,
          },
          likes: {
            type: [{type :Schema.Types.ObjectId, ref : "User" }],
            default: [],
          },
          dislikes: {
            type: [{type :Schema.Types.ObjectId, ref : "User" }],
            default: [],
          },
          replied_to: {
            type : String,
            default: null,
          },
          replies: {
            type: [
              {
                replied_by: {
                  type: Schema.Types.ObjectId,
                  ref: "User",
                },
                mnit_id: {
                  type: String,
                },
                content: {
                  type: String,
                  default: "",
                },
                likes: {
                  type: [{type :Schema.Types.ObjectId, ref : "User" }],
                  default: [],
                },
                dislikes: {
                  type: [{type :Schema.Types.ObjectId, ref : "User" }],
                  default: [],
                },
                replied_to: {
                  type: String,
                  default: null,
                },
                createdAt: {
                  type: Date,
                },
                profile_pic: {
                  type: String,
                },
              },
            ],
            default: [],
          },
          createdAt: {
            type: Date,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", products_schema);
const User = mongoose.model("User", user_schema);
const Thread = mongoose.model("Thread", thread_schema);
const LostItem = mongoose.model("LostItem", lost_item_schema);
const Avatar = mongoose.model("Avatar", counter_schema);
module.exports = { User, Product, Thread,LostItem ,Avatar};
