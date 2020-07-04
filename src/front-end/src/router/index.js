import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LAYOUT } from 'config/route'
import { HOME_ROUTE_CONFIG } from 'page/home/config'
import { ERROR_ROUTE_CONFIG } from 'page/error/config'

export default () => (
  <Switch>
    {LAYOUT.map((page, i) => <Route key={i} {...page} />)}
    <Redirect from='/' exact to={HOME_ROUTE_CONFIG.path} />
    <Redirect from='*' to={ERROR_ROUTE_CONFIG.path} />
  </Switch>
)
