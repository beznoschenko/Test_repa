import Home from '../pages/Home'
import InfoPage from '../pages/product_info_page'
import Login from '../pages/sign_in_page'
import Registration from '../pages/sign_up_page'
const routes = [
    {
        path: '/',
        name: "home",
        component: Home
    },
    {
        path: '/product/:id',
        name: "product",
        component: InfoPage
    },
    {
        path: '/sign-in',
        name: "login",
        component: Login
    },
    {
        path: '/sign-up',
        name: "Registration",
        component: Registration
    }
]

export default routes
