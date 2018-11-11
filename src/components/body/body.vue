<template>
<div class="bbooxx" ref="wrapper">

    <div class="itembox" >
        <div v-if="item.mblog" class="wb-item-wrap" v-for="item in data" :key="item.itemid">
            <!-- {{item}} -->
            <div class="card-wrap">
                <div class="usericon">
                    <img class="usericon-img" :src="item.mblog.user.profile_image_url" alt="">
                    <i class="fa fa-chevron-circle-down"></i>
                </div>
                <div class="usermsg">
                    <p class="username"><span>{{item.mblog.user.screen_name}}</span><i class="vip"></i></p>
                    <p class="time-box"><span class="time">{{item.mblog.created_at}}</span>&nbsp;<span class="from">{{item.mblog.source}}</span></p>
                </div>
                <div class="button">
                    <div class="button-box">
                        <i class="fa fa-meh-o"></i>&nbsp;
                        <span>关注</span>
                    </div>
                </div>
            </div>
            <article class="wb-main">
                <div class="wb-text" v-html="item.mblog.text">
                </div>
                <div class="wb-img">
                    <img v-for="pic in item.mblog.pics" :key="pic.pid" :src="pic.url" >
                    <div></div>
                </div>
            </article>
            <footer class="wb-foot">
                <div class="foot-box">
                    <!-- 转发 -->
                    <div class="tra btn"><i class="fa fa-hand-peace-o"></i><span>{{item.mblog.reposts_count}}</span></div>
                    <div class="comment btn"><i class="fa fa-hand-peace-o"></i><span>{{item.mblog.comments_count}}</span></div>
                    <div class="call btn"><i class="fa fa-hand-peace-o"></i><span>{{item.mblog.attitudes_count}}</span></div>
                    <div class="warn"><span>....</span></div>
                </div>
            </footer>
        </div>
    </div>
</div>

</template>
<script>
import { Indicator } from 'mint-ui';
import { Lazyload } from 'mint-ui';
import store from "@/store";
// import { } from 'mint-ui';
export default {
    data(){
        return {
            data : [],
            page : 1
        }
    },
    async created() {
        // store.dispatch("getbodydata")
        console.log(store.dispatch)
        console.log("alalalsadasd")
        // this.data =await this.getdata();
        await store.dispatch("getbodydata");
        this.data = store.state.homemodule.bodydata.data;
        this.$nextTick(()=>{
            let bs = new this.BScroll(this.$refs.wrapper,{
                pullUpLoad: { //配置上拉加载
                    threshold: 50 // 距离底部多少距离
                }
            })
            bs.on("pullingUp",async ()=>{
                Indicator.open({
                    // text: '加载中...',
                    spinnerType: 'triple-bounce',
                });
                // this.page++;
                // var data = await this.getdata()
                // this.data = this.data.concat(data)
                await store.dispatch("getbodydata");
                this.data = store.state.homemodule.bodydata.data;
                bs.finishPullUp()
                bs.refresh()
                Indicator.close();
            })
        })
    },
    mounted() {

    },
    methods : {
        async getdata(){
            var res =await this.myaxios({
                path :"container/getIndex?containerid=102803&openApp=0&page="+this.page
            })
            return res.data.data.cards;
        }
    }
}
</script>
<style lang="scss">
.bbooxx{
    height: 1.12rem;
    margin-top: 2.2rem;
}
.itembox{
    background: #f7f7f7;
    position: absolute;
    // top: 2.24rem;
    margin: 0 .32rem;
    .wb-item-wrap{
        background: white;
        margin-top: .053333rem;
    }
    .card-wrap{
        padding-top:.433333rem;
        display: flex;
        justify-content: space-between;
        .usericon{
            position: relative;
            width: .883333rem;
            .usericon-img{
                width: .883333rem;
                height: .883333rem;
                border: .013333rem solid rgba(0,0,0,.05);
                border-radius: 50%;
                display: block;
            }
            .fa-chevron-circle-down{
                color: #507DAF;
                position: absolute;
                bottom: .133333rem;
                right: 0px;
                z-index: 100;
                background: white;
                border-radius: 50%;
            }
        }
        .usermsg{
            flex: 1 0;
            height: 1.093333rem;
            padding-left:.16rem; 
            .username{
                font-size:.39667rem;
                line-height: .65rem;
            }
            .timebox{
                font-size:.306667rem;
            }
            .vip{
                margin-left: .133333rem;
                height:.373333rem ;
                width:.373333rem;
                display: inline-block;
                font-size: .426667rem;
                background: url("https://h5.sinaimg.cn/marvel/v1.4.0/img/sprite.svg");
                background-size: 1.19333rem auto;
                background-position: 1.983333rem 0.87333rem;
            }
        }
        .button{
            .button-box{
                width: 1.946667rem;
                text-align: center;
                height: .64rem;
                border: 1px solid #939393;
                color: #87909a;
                .fa-meh-o{
                    color: #87909a;
                }
            }
        }
    }
    .wb-main{
        padding-top: .266667rem;
        .wb-text{
            font-size: .426667rem;
            line-height: .64rem;
            a{
                color: #3c6e9e;
                img{
                    width: .426667rem !important;
                    height: .426667rem !important;
                }
            }
        }
        .wb-img{
            image[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
                background:red;;
            }
            img{
                width: 3.05rem;
                height: 2.986667rem;
                margin-bottom: .133333rem;
            }
            img:nth-child(2),img:nth-child(5),img:nth-child(8){
                margin:0 .1033333rem .133333rem;
            }
        }
        
    }
    .wb-foot{
        height: 1.133333rem;
        display: flex;
        .foot-box{
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-around;
            .btn{
                margin-right: 0.3rem;
                
                // flex: 0 0;
                i{
                    margin-right: .22rem;
                }
            }
            .warn{
                float: right;
                flex-grow: 3;
                text-align: right;
                padding-right: .266667rem;
            }
        }
    }
}

</style>

