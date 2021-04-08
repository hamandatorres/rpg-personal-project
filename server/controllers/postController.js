

module.exports = {
  createPost: async (req, res) => {
    const db = req.app.get('db')
    const { user_id, topic_id } = req.session.user;
    // const { topic_id } = req.params;
    const { body } = req.body;

    await db.posts.create_post(user_id, topic_id, body )

    res.status(200).send('Post has been added')
  },

}