import myaxios from "@util/axios";
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
        console.log(state,"-------------------")
        let page = state.bodydata.page;
        let id = state.bodydata.id;
        var res =await myaxios({
            path : `container/getIndex?containerid=${id}&openApp=0&page=`+page,
        })
        commit({
            type : "GET_BODY_DATA_MUTATION",
            payload : res
        })
        console.log(res,5555)
    }

}
export default actions