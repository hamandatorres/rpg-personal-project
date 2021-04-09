

module.exports = {
  createPost: async (req, res) => {
    const db = req.app.get('db')
    const { user_id } = req.session.user;
    const { body } = req.body;

    await db.posts.create_post(user_id, body )

    res.status(200).send('Post has been added')
  },
  deletePost: async (req, res) => {
    const db = req.app.get('db')
    const { post_id } = req.params;
    let post = await db.posts.delete_post(post_id)

    res.status(200).send(`Post on index ${post_id} has been deleted`)
  },
  getSinglePostId: async (req, res) => {
    const db = req.app.get('db')
    const { post_id } = req.params;
    let post = await db.posts.find_post(post_id)
    res.status(200).send(post)
  },
  getAllPosts: async (req, res) => {
    if (req.query.search) {
      console.log('Found Post')
      const filteredPost = await db.posts.find_post(req.query.search)
      res.status(200).send(filteredPost)
    } else {
      const db = req.app.get('db');
      const posts = await db.posts.get_all_posts();
      res.status(200).send(posts)
    }
  }
}