import myaxios from "@util/axios";
import api from "@/api"
 const actions = {
    async getheaddata({commit,state}){
        var res =await myaxios({
            path : "config/list",
        })
        let data = res.data.data;
        commit({
            type : "GET_HEAD_DATA_MUTATION",
            payload : {
                title : data.hot.hotWord,
                href : data.hot.scheme,
                navlist : data.channel
            }
        })
    },
    async getbodydata({commit,state}){
        let page = state.bodydata.page;
        let id = state.bodydata.id;
        if(id==102803){
            var res =await myaxios({
                path : `container/getIndex?containerid=${id}&openApp=0&page=`+page,
            })
        }else{
            var res =await myaxios({
                path : `container/getIndex?containerid=${id}&openApp=0&since_id=`+page,
            })
        }
        commit({
            type : "GET_BODY_DATA_MUTATION",
            payload : res
        })
    },
    async changebodydata({commit,state},payload){
        state.bodydata.page = 1;
        state.bodydata.data = [];
        state.bodydata.id = payload.payload.id;
        let page = state.bodydata.page;
        let id = state.bodydata.id;
        if(id==102803){
            var res =await myaxios({
                path : `container/getIndex?containerid=${id}&openApp=0&page=`+page,
            })
        }else{
            var res =await myaxios({
                path : `container/getIndex?containerid=${id}&openApp=0&since_id=`+page,
            })
        }
        commit({
            type : "GET_BODY_DATA_MUTATION",
            payload : res
        })
    },
    getgirl({state,commit}){
        commit({
            type : "GET_GIRL_DATA_MUTATION",
            payload : api
        })
    },
    getmygirl({state,commit}){
        var data = localStorage.getItem("girl")
        commit({
            type :"GET_MYGIRL_DATA_MUTATION",
            payload : data
        })
    }

}
export default actions