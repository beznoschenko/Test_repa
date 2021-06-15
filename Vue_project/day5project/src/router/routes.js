import Home from '../pages/Home'
import InfoPage from '../pages/product_info_page'
const routes =[
    {
        path: '/',
        name: "home",
        component:  Home
    },
    {
        path: '/product',
        name: "product",
        component:  InfoPage
    }
]

export default  routes 