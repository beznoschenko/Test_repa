import Home from '../pages/Home'
import InfoPage from '../pages/product_info_page'
import Login from '../pages/sign_in_page'
import Registration from '../pages/sign_up_page'
import TabelPage from '../pages/table_page'
import RecursivePage from '../pages/recursive_page'
import store from '../store'
const routes = [
    {
        path: '/',
        name: "home",
        component: Home,
        meta:{
            visible: true

        }
    },
    {
        path: '/product/:id',
        name: "product",
        component: InfoPage,
        meta:{
            visible: false

        }
    },
    {
        path: '/table',
        name: "table",
        component: TabelPage,
        meta:{
            visible: true

        }
    },
    {
        path: '/tree',
        name: "tree",
        component: RecursivePage,
        meta:{
            visible: true

        }
    },
    {
        path: '/sign-in',
        name: "login",
        component: Login,
        meta:{
            visible: false

        }
    },
    {
        path: '/sign-up',
        name: "registration",
        component: Registration,
        meta: {
            visible: false
        }
    },
    
]

export default routes
