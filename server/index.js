const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./controllers/authController')
const characterCtrl = require('./controllers/userCharacterController');
const topicCtrl = require('./controllers/topicController')
const postCtrl = require('./controllers/postController')
const skillsCtrl = require('./controllers/skillsController')
const { SERVER_PORT, DB_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 52
    }
  })
)
// auth
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.delete('/auth/logout', authCtrl.logout);
app.get('/auth/session', authCtrl.getSession);

//characters
app.post('/api/characters', characterCtrl.createCharacter);
app.delete('/api/characters/:character_id', characterCtrl.deleteCharacter);

//Skills
app.post('/api/skills', skillsCtrl.createSkills)
app.delete('/api/skills/:skill_id', skillsCtrl.deleteSkills)

//topic
app.post('/api/topics', topicCtrl.createTopic)
app.delete('/api/topics/:topic_id', topicCtrl.deleteTopic)
app.get('/api/topics', topicCtrl.getAllTopics)
app.get('/api/topics/:topic_id', topicCtrl.getSingleTopicId)

//post
app.post('/api/post', postCtrl.createPost)
app.get('/api/posts', postCtrl.getAllPosts)
app.get('/api/posts/:post_id', postCtrl.getSinglePostId)
app.delete('/api/posts/:post_id', postCtrl.deletePost)


massive({
  connectionString:DB_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set('db', dbInstance)

  console.log('massive win')
  app.listen(SERVER_PORT, () => {
    console.log(`We live on ${SERVER_PORT} a year`)
  })
}).catch(err => {
  console.log(err)
});