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

    res.status(200).send(`Topic on index ${topic_id} has been deleted`)
  },
  getSingleTopicId: async (req, res) => {
    const db = req.app.get('db')
    const { topic_id } = req.params;
    let topic = await db.topics.find_topics(topic_id)
    res.status(200).send(topic)
  },
  getAllTopics: async (req, res) => {
    if (req.query.search) {
      console.log('Found Topics')
      const filteredTopics = await db.topics.find_topics(req.query.search)
      res.status(200).send(filteredTopics)
    } else {
      const db = req.app.get('db')
      const topics = await db.topics.get_all_topics();
      res.status(200).send(topics)
    }
  }
}