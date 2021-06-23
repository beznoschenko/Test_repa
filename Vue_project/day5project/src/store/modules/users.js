export default{
    namespaced: true,
    state:() => ({ 
        users: [],
        logined: { status: false }
    }),
    getters: {
        getLoginStatus: state => state.logined,
        getUser: state => state.users
    },
    mutations: {
        registerUser(state, userData) {
            state.users.push(userData)
            console.log(state.users)
        },
        login(state, name) {
            state.logined.status = true
            state.logined.name = name
        },
        logout(state) {
            state.logined.status = false;
            delete state.logined.name;

        },

    },
    actions:{}
}