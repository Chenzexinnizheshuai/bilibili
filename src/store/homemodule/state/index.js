export const state = {
    navlist : [],
    hotnew : {
        title : "陈泽鑫最帅",
        href : ""
    },
    bodydata : {
        data : [],
        page : 1,
        id : "102803"
    },
    girldata : {
        data : [],
        num : 0
    } ,
    mygirldata : []
}
export const getters = {
    getnavlist : statelalala => {
        return statelalala.navlist
    },
    girlgetter : statepapa =>{
        console.log("ggtter",statepapa.girldata.data.filter(item=>item.num>0))
        return statepapa.girldata.data.filter(item=>item.num>0)
    },
    mygirlgetter : stategaga => {
        let money = 0;
        stategaga.mygirldata.forEach(element => {
            money+=element.num*element.price
        });
        console.log(money)
        return money
    }
}