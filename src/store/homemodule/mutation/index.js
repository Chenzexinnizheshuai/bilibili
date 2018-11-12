import {GET_HEAD_DATA_MUTATION,GET_BODY_DATA_MUTATION,GET_GIRL_DATA_MUTATION,GET_MYGIRL_DATA_MUTATION} from "./mutation"
const mutations = {
    [GET_HEAD_DATA_MUTATION](state,payload){
        let {title,href,navlist} = payload.payload
        state.hotnew.title = title;
        state.hotnew.href =  href;
        state.navlist = navlist;
    },
    [GET_BODY_DATA_MUTATION](state,{payload}){
        let data = payload.data.data.cards
        state.bodydata.page++;
        // state.bodydata.data = []
        state.bodydata.data = state.bodydata.data.concat(data)
    },
    [GET_GIRL_DATA_MUTATION](state,{payload}){
        state.girldata.data = payload;
    },
    [GET_MYGIRL_DATA_MUTATION](state,{payload}){
        state.mygirldata = JSON.parse(payload)
    }
}
export default mutations