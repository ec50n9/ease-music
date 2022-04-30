import {createStore, createLogger} from "vuex";

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
    state:{

    },
    strict: debug,
    plugins:debug?[createLogger()]:[]
})

export default store