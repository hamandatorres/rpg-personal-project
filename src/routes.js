import React from 'react';
import Auth from './components/Auth'
import User from './components/User'
import Topic from './components/Topic'
import Post from './components/Post'
import Register from './components/Register'
import { VerifyAuthenticated } from './redux/VerifyAuthenticated'

import { Switch, Route } from 'react-router-dom';


export default (
  <Switch>
    <Route exact path='/' component={Auth} />
    <Route path='/register' component={Register} />
    <VerifyAuthenticated>
    <Route path='/user' component={User} />
    <Route exact path='/topic' component={Topic} />
    <Route path='/topic/post' component={Post} />
    </VerifyAuthenticated>
  </Switch>
)