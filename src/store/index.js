import {createStore, createLogger} from "vuex";
import artists from "./modules/artists";

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
    state(){
        return {
            count: 0
        }
    },
    mutations:{
        increment(state){
            state.count++;
        }
    },
    modules:{
        artists: artists
    },
    strict: debug,
    plugins:debug?[createLogger()]:[]
})

export default store