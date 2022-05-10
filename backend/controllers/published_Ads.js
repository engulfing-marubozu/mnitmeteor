const { Product, User } = require("../Models");
const {
  delete_product_email,
} = require("../message_service/sendgrid_email/send_customised_email");

const send_published_Ads = async (req, res) => {
  console.log("deepak ");
  console.log(req.user._id);
  user_id = req.user._id;
  const user = await User.findById(user_id);
  console.log(user);
  const posted_products_id = user.products_posted;
  console.log(posted_products_id);
  const data = await Promise.all(
    posted_products_id.map(async (product_id) => {
      const datee = await Product.findById(product_id);
      return datee;
    })
  );
  console.log(data);
  res.status(200).send(data);
};

// if any user want to delete his Ads/posted products

const delete_published_Ads = async (req, res) => {
  try {
    user_id = req.user._id;
    product_id = req.body.productId;
    const { interested_users, likes } = await Product.findById(
      product_id
    ).populate("interested_users");
    console.log(interested_users);
    const { title } = await Product.findByIdAndDelete(product_id);
    updated_user = await User.findByIdAndUpdate(
      user_id,
      { $pull: { products_posted: product_id } },
      { new: true }
    );
  console.log(likes);
    if (likes.length > 0) {
      await likes.map(async (user) => {
        await User.findByIdAndUpdate(user._id, {
          $pull: { favourites: product_id },
        });
        return null;
      });
    }

    if (interested_users.length > 0) {
      console.log("deleting");
      const interested_users_email = await Promise.all(
        interested_users.map(async (user) => {
          console.log("vbn");
          await User.findByIdAndUpdate(user._id, {
            $pull: { interested: product_id },
          });
          return user.email;
        })
      );
      // delete_product_email(interested_users_email, title);
    }
  } catch (err) {
    console.log(err);
  }

  res.status(200).send(updated_user.products_posted);
};
module.exports = { send_published_Ads, delete_published_Ads };
