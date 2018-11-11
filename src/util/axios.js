import axios from "axios";
function myaxios({path,params,method,data}){
    return axios({
            url:`/wb${path}`,
            data:data,
            params : params,
            method : method?method:"get"
        })
        .then(function(response) {
            return response
        })
        .catch(function(error) {
            console.log(error);
        });
}
export default myaxios