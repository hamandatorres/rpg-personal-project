const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



let refreshTokens = []
module.exports = {
  deleteToken: (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)

  },
  refreshToken: async (req, res) => {
    const db = req.app.get('db')
    const { email } = req.body
    const [ existingUser ] = await db.auth.get_user_by_email(email)
    let refreshToken = req.body.token
    if (refreshToken = null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, existingUser) => {
      if (err) return res.sendStatus(403)
      let accessToken = generateAccessToken({ email: existingUser.email})
      res.json({ accessToken: accessToken })
    })
  },
  register: async (req, res) => {
    const db = req.app.get('db')
    const { email, password } = req.body
    const [ existingUser ] = await db.auth.get_user_by_email(email)

  if (existingUser) {
    return res.status(409).send('User already exists')
  }
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  const [ newUser ] = await db.auth.register_user(email,hash)
  delete newUser.hash

  req.session.user = newUser
  const accessToken = jwt.sign(newUser, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: accessToken })

  res.status(200).send(req.session.user)
  },
  login: async (req, res) => {
    const db = req.app.get('db')
    const { email, password } = req.body

    const [ existingUser ] = await db.auth.get_user_by_email(email)
    
    if(!existingUser) {
      return res.status(404).send('Username/Password does not exist')
    }
    const isAuthenticated = bcrypt.compareSync(password, existingUser.hash)
    
    if(!isAuthenticated) {
      return res.status(403).send('Username/Password is incorrect')
    }
    delete existingUser.hash
    req.session.user = existingUser
    const accessToken = generateAccessToken(existingUser)
    const refreshToken = jwt.sign(existingUser, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({ accessToken: accessToken, refreshToken: refreshToken })
    function generateAccessToken(existingUser) {
      return jwt.sign(existingUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
    }

    res.status(200).send(req.session.user)
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200)
  },
  getSession: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user)
    } else {
      res.sendStatus(403);
    }
  }
}