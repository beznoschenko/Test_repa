export default{
    namespaced: true,
    state:() => ({ 
        users: [],
        logined: { status: false }
    }),
    getters: {
        getLoginStatus: state => state.logined,
        getUsers: state => state.users,
        getUsersData: state => state.logined.user
    },
    mutations: {
        registerUser(state, userData) {
            state.users.push(userData)
            this.commit('moduleUsers/login', userData)
        },
        login(state, user) {
            state.logined.status = true
            state.logined.user = user
            this.commit('moduleSession/createToken')
            setTimeout(() => {
                this.commit('moduleUsers/logout')}, 
            5*60*1000)
            

        },
        logout(state) {
            this.commit('moduleSession/removeToken')
            state.logined.status = false;
            delete state.logined.name;
        },
        updateData(state, userData){
            console.log(userData)
            let index = state.users.findIndex(a => a.email ===userData.email)
            console.log(index)

            Object.keys(state.users[index]).forEach(a =>state.users[a] = userData[a] )
            console.log(state.users[index])
        }
    },
    actions:{}
}