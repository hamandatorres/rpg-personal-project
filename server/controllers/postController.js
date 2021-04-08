

module.exports = {
  createPost: async (req, res) => {
    const db = req.app.get('db')
    const { user_id, topic_id } = req.session.user;
    // const { topic_id } = req.params;
    const { body } = req.body;

    await db.posts.create_post(user_id, topic_id, body )

    res.status(200).send('Post has been added')
  },
  findPost: async (req, res) => {
    if (req.query.search) {
      console.log('Found Post')
      const filteredPost = await db.posts.find_post(req.query.search)
      res.status(200).send(filteredPost)
    } else {
      const db = req.app.get('db');
      const posts = await db.posts.get_all_posts();
      res.status(200).send(posts)
    }
  },

}