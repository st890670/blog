import { HOME_ROUTE_CONFIG } from 'page/home/config'
import { ARTICLE_ROUTE_CONFIG } from 'page/article/config'
import { SEARCH_RESULT_ROUTE_CONFIG } from 'page/search-result/config'
import { ERROR_ROUTE_CONFIG } from 'page/error/config'

import Home from 'page/home'
import Article from 'page/article'
import Search from 'page/search-result'
import Error from 'page/error'

const HOME_ROUTE = { ...HOME_ROUTE_CONFIG, component: Home }
const ARTICLE_ROUTE = { ...ARTICLE_ROUTE_CONFIG, component: Article }
const SEARCH_RESULT_ROUTE = { ...SEARCH_RESULT_ROUTE_CONFIG, component: Search }
const ERROR_ROUTE = { ...ERROR_ROUTE_CONFIG, component: Error }

export const LAYOUT = [HOME_ROUTE, ARTICLE_ROUTE, SEARCH_RESULT_ROUTE, ERROR_ROUTE]
