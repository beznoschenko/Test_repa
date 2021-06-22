export default{
    namespaced: true,
    state:() => ({ 
        users: [],
        logined: { status: false }
    }),
    getters: {
        getLoginStatus: state => state.logined,
    },
    mutations: {
        registerUser(state, userData) {
            state.users.push(userData)
            console.log(state.users)
        },
        login_out(state) {
            state.logined.status = !state.logined.status
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