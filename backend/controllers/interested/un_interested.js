const { Product, User } = require("../../Models");
const { send_un_interested_email, } = require("../../message_service/sendgrid_email/send_customised_email");



// this function will take jwt token and product _id and will update the user in product and product in user  after he/she has clicked un_interested any post
const un_interested_update = async (req, res) => {
  console.log(req.user._id);
  console.log(req.body.productId);
  const id = req.user._id;
  const product_id = req.body.productId;
  //  const is_interested = req.body.isInterested;
  let buyer;
  let seller;
  let product;
  // console.log(is_interested);

  console.log("heya .. came to delete");
  try {
    product = await Product.findOneAndUpdate({ _id: product_id, is_verified: true }, { $pull: { interested_users: id } });
    buyer = await User.findByIdAndUpdate(id, { $pull: { interested: product_id } }, { new: true });
    seller = await User.findById(product.posted_by);
    await send_un_interested_email(seller.email, buyer.Mobile_no, product.title);
  }
  catch (err) {
    console.log(err);
  }
  // const attempts_left =  req.allowed_hits - req.number_of_req
 // console.log(buyer);
  const to_send = {
    interested_buyers: buyer.interested,
  }
  res.status(200).send(to_send);

}



module.exports = { un_interested_update };
