module.exports = {

  createTopic: async (req, res) => {
    const db = req.app.get('db')
    const { user_id } = req.session.user;
    const { title, body } = req.body;

    await db.topics.create_topic(user_id, title, body);

    res.status(200).send('Topic Added')
  },
  deleteTopic: async (req, res) => {
    const db = req.app.get('db')
    const { topic_id } = req.params;
    await db.topics.delete_topic(topic_id)

    res.status(200).send('Topic Deleted')
  }
}