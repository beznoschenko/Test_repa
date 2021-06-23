export default{
    namespaced: true,
    state:{
        is_authorized:{
            type: 'Bearer', 
        }
    },
    getters:{

    },
    mutations:{
        createToken(state){
            let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let randomLetter = ''
            for (let i=0; i<256;i++){
                let randomIndex = Math.floor(Math.random() * alphabet.length);
                randomLetter+=alphabet[randomIndex];
            }
            state.is_authorized.token = randomLetter
            //console.log(state.is_authorized.token)
            let times = new Date()
            times.setMinutes(times.getMinutes()+5)
            state.is_authorized.expires = times.toLocaleString()
        },
        removeToken(state){
            delete state.is_authorized.token;
            delete state.is_authorized.expires;
        }

    }
}