const { Thread } = require("../../Models");
const like_thread = async (user_id, thread_id) => {
  console.log("came to like thread");
  try {
    await Thread.findOneAndUpdate(
      { id: thread_id },
      { $pull: { dislikes: user_id } }
    );
    const updated_thread = await Thread.findOneAndUpdate(
      { id: thread_id },
      { $addToSet: { likes: user_id } },
      { new: true }
    );
    console.log(updated_thread);
    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};
const not_like_thread = async (user_id, thread_id) => {
  console.log("came to like thread");
  try {
    const updated_thread = await Thread.findOneAndUpdate(
      { id: thread_id },
      { $pull: { likes: user_id } },
      { new: true }
    );
    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};
const unlike_thread = async (user_id, thread_id) => {
  console.log("came to unlike  thread");
  try {
    await Thread.findOneAndUpdate(
      { id: thread_id },
      { $pull: { likes: user_id } }
    );
    const updated_thread = await Thread.findOneAndUpdate(
      { id: thread_id },
      { $addToSet: { dislikes: user_id } },
      { new: true }
    );
    console.log(updated_thread);
    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};

const not_unlike_thread = async (user_id, thread_id) => {
  console.log("came to unlike  thread");
  try {
    const updated_thread = await Thread.findOneAndUpdate(
      { id: thread_id },
      { $pull: { dislikes: user_id } },
      { new: true }
    );

    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};

const like_comment = async (user_id, comment_id, thread_id) => {
  console.log("came to like comment");
  try {
    await Thread.updateOne(
      { "discussions._id": comment_id },
      { $pull: { "discussions.$.dislikes": user_id } },
      { new: true }
    );

    const updated_thread = await Thread.findOneAndUpdate(
      { "discussions._id": comment_id },
      { $addToSet: { "discussions.$.likes": user_id } },
      { new: true }
    );
    console.log(updated_thread);
    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};

const not_like_comment = async (user_id, comment_id, thread_id) => {
  console.log("came to not like comment");
  try {
    const updated_thread = await Thread.findOneAndUpdate(
      { "discussions._id": comment_id },
      { $pull: { "discussions.$.likes": user_id } },
      { new: true }
    );

    console.log(updated_thread);
    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};
const unlike_comment = async (user_id, comment_id, thread_id) => {
  console.log("came to unlike  comment");
  try {
    await Thread.findOneAndUpdate(
      { "discussions._id": comment_id },
      { $pull: { "discussions.$.likes": user_id } }
    );
    const updated_thread = await Thread.findOneAndUpdate(
      { "discussions._id": comment_id },
      { $addToSet: { "discussions.$.dislikes": user_id } },
      { new: true }
    );
    console.log(updated_thread);
    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};
const not_unlike_comment = async (user_id, comment_id, thread_id) => {
  console.log("came to not unlike  comment");
  try {
    const updated_thread = await Thread.findOneAndUpdate(
      { "discussions._id": comment_id },
      { $pull: { "discussions.$.dislikes": user_id } },
      { new: true }
    );

    console.log(updated_thread);
    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};

const like_reply = async (user_id, reply_id, thread_id, comment_id) => {
  console.log("came to like reply");
  try {
    await Thread.updateOne(
      {},
      { $pull: { "discussions.$[i].replies.$[j].dislikes": user_id } },
      { arrayFilters: [{ "i._id": comment_id }, { "j._id": reply_id }] }
    );
    const updated_thread = await Thread.findOneAndUpdate(
      {},
      { $addToSet: { "discussions.$[i].replies.$[j].likes": user_id } },
      {
        arrayFilters: [{ "i._id": comment_id }, { "j._id": reply_id }],
        new: true,
      }
    );
    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};

const not_like_reply = async (user_id, reply_id, thread_id, comment_id) => {
  console.log("came to not like reply");
  try {
    const updated_thread = await Thread.findOneAndUpdate(
      {},
      { $pull: { "discussions.$[i].replies.$[j].likes": user_id } },
      {
        arrayFilters: [{ "i._id": comment_id }, { "j._id": reply_id }],
        new: true,
      }
    );

    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};

const unlike_reply = async (user_id, reply_id, thread_id, comment_id) => {
  console.log("came to unlike reply ");
  try {
    await Thread.updateOne(
      {},
      { $pull: { "discussions.$[i].replies.$[j].likes": user_id } },
      { arrayFilters: [{ "i._id": comment_id }, { "j._id": reply_id }] }
    );
    const updated_thread = await Thread.findOneAndUpdate(
      {},
      { $addToSet: { "discussions.$[i].replies.$[j].dislikes": user_id } },
      {
        arrayFilters: [{ "i._id": comment_id }, { "j._id": reply_id }],
        new: true,
      }
    );
    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};

const not_unlike_reply = async (user_id, reply_id, thread_id, comment_id) => {
  console.log("came to not unlike reply ");
  try {
    const updated_thread = await Thread.findOneAndUpdate(
      {},
      { $pull: { "discussions.$[i].replies.$[j].dislikes": user_id } },
      {
        arrayFilters: [{ "i._id": comment_id }, { "j._id": reply_id }],
        new: true,
      }
    );

    return updated_thread;
  } catch (err) {
    console.log(err);
  }
};
const like_and_dislike_threads = async (req, res) => {
  console.log("came to save threads");
  try {
    const user_id = req.user._id;
    const thread_id = req.body.thread_id;
    const comment_id = req.body.comment_id;
    const reply_id = req.body.reply_id;
    const status = req.body.status;
    if (
      comment_id === null &&
      reply_id === null &&
      status === "true1" &&
      thread_id != null
    ) {
      const updated_thread = await like_thread(user_id, thread_id);
      res.status(200).send(updated_thread);
    } else if (
      comment_id === null &&
      reply_id === null &&
      status === "false2" &&
      thread_id != null
    ) {
      const updated_thread = await not_like_thread(user_id, thread_id);
      res.status(200).send(updated_thread);
    } else if (
      comment_id === null &&
      reply_id === null &&
      status === "false1" &&
      thread_id != null
    ) {
      const updated_thread = await unlike_thread(user_id, thread_id);
      res.status(200).send(updated_thread);
    } else if (
      comment_id === null &&
      reply_id === null &&
      status === "true2" &&
      thread_id != null
    ) {
      const updated_thread = await not_unlike_thread(user_id, thread_id);
      res.status(200).send(updated_thread);
    } else if (
      comment_id != null &&
      reply_id === null &&
      status === "true1" &&
      thread_id != null
    ) {
      const updated_thread = await like_comment(user_id, comment_id, thread_id);
      res.status(200).send(updated_thread);
    } else if (
      comment_id != null &&
      reply_id === null &&
      status === "false2" &&
      thread_id != null
    ) {
      const updated_thread = await not_like_comment(
        user_id,
        comment_id,
        thread_id
      );
      res.status(200).send(updated_thread);
    } else if (
      comment_id != null &&
      reply_id === null &&
      status === "false1" &&
      thread_id != null
    ) {
      const updated_thread = await unlike_comment(
        user_id,
        comment_id,
        thread_id
      );
      res.status(200).send(updated_thread);
    } else if (
      comment_id != null &&
      reply_id === null &&
      status === "true2" &&
      thread_id != null
    ) {
      const updated_thread = await not_unlike_comment(
        user_id,
        comment_id,
        thread_id
      );
      res.status(200).send(updated_thread);
    } else if (
      comment_id != null &&
      reply_id != null &&
      status === "true1" &&
      thread_id != null
    ) {
      const updated_thread = await like_reply(
        user_id,
        reply_id,
        thread_id,
        comment_id
      );
      res.status(200).send(updated_thread);
    } else if (
      comment_id != null &&
      reply_id != null &&
      status === "false2" &&
      thread_id != null
    ) {
      const updated_thread = await not_like_reply(
        user_id,
        reply_id,
        thread_id,
        comment_id
      );
      res.status(200).send(updated_thread);
    } else if (
      comment_id != null &&
      reply_id != null &&
      status === "false1" &&
      thread_id != null
    ) {
      const updated_thread = await unlike_reply(
        user_id,
        reply_id,
        thread_id,
        comment_id
      );
      res.status(200).send(updated_thread);
    } else if (
      comment_id != null &&
      reply_id != null &&
      status === "true2" &&
      thread_id != null
    ) {
      const updated_thread = await not_unlike_reply(
        user_id,
        reply_id,
        thread_id,
        comment_id
      );
      res.status(200).send(updated_thread);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { like_and_dislike_threads };






// =================================================================================================
// conventions

//  true and false  --> false and false  = false2
//  false and true  --> false and false  = true2
//  true and false   --> false and true  = false1
//  false and true   --> true and false  = true1