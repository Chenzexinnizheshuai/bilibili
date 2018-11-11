import {GET_HEAD_DATA_MUTATION,GET_BODY_DATA_MUTATION} from "./mutation"
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
        state.bodydata.data = state.bodydata.data.concat(data)
        console.log(payload.data.data.cards,5577)
    }
}
export default mutations