<template>
    <div class="search-box-container">
        <div class="search-box">
            <div class="logo">
            </div>
            
            <a :href="homemodule.hotnew.href" class="search-text">
                <div class="hot-news-box">
                    <i class="fa fa-search"></i>
                    <div class="hot-news">{{homemodule.hotnew.title}}</div>
                </div>
            </a>
            <div class="write">
                <i class="fa fa-pencil-square-o"></i> 
            </div>
        </div>
        <div class="nav-main">
            <div class="details">
               <i class="fa fa-angle-down"></i>
            </div>
            <div class="swiper-container swiper-container-horizontal swiper-container-free-mode">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" @click="changebody(item.gid)" v-for="item in navlist" :key="item.gid" :route="item.gid">
                        <span>{{item.name}}</span>
                        <div v-if="id==item.gid" class="em"></div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    
</template>
<script>
import myaxios from "@util/axios";
import store from "@/store";
import { mapState } from 'vuex';
export default {
    data(){
        return {
            navlist : [],
            hotnew : {
                title : "",
                href : ""
            },
            id : ''
        }
    },
    components : {
    },
    computed :{ 
        ...mapState([
            "homemodule"
            // title : state=>state.homemodule.hotnew.title
        ])
    },
    async created() {
        await this.getnav()
        this.$nextTick(()=>{
            var mySwiper = new Swiper('.swiper-container', {
                freeMode : true,
                freeModeMomentum : false,
                freeModeMomentumBounce : false,
                resistanceRatio : 0,
                slidesPerView : 6,
            })
        })
    },
    methods : {
        async getnav(){
            await store.dispatch("getheaddata")
            var homemodule =  store.state.homemodule;
            this.navlist = homemodule.navlist;
            this.id = homemodule.bodydata.id;
        },
        changebody(id){
            store.dispatch({
                type : "changebodydata",
                payload : {
                    id : id,
                }
            }); 
            var homemodule =  store.state.homemodule;
            this.id = homemodule.bodydata.id;
        }
    }
};
</script>
<style lang="scss">
.search-box-container {
  width: 100vw;
  height: 2.24rem;
  display: flex;
  position: fixed;
  flex-direction: column;
  background: #fafafa;
  box-sizing: border-box;
  z-index: 1000;
  top:0;
  > div {
    height: 50%;
  }
  .search-box {
    display: flex;
    justify-content: space-between;
        padding: 0 .346667rem;

    .fa-search{
        padding: 0 .4rem;
    }
    .logo {
      height: 100%;
      width: 0.693333rem;
      background: no-repeat
        url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTAwIDgxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgODE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDojRDYyQjJBO30KCS5zdDJ7ZmlsbDojRTg5MjE0O30KCS5zdDN7ZmlsbDojMDQwMDAwO30KPC9zdHlsZT4KPHRpdGxlPm5hdmlnYXRpb25iYXJfcmVsZWFzZTwvdGl0bGU+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8ZyBpZD0iUGFnZS0xIj4KCTxnIGlkPSLmnKrnmbvlvZVf6aaW6aG1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAuMDAwMDAwLCAtMjcuMDAwMDAwKSI+CgkJPGcgaWQ9InRhYiI+CgkJCTxnIGlkPSJuYXZpZ2F0aW9uYmFyX3JlbGVhc2UtY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMDAwLCAyNy4wMDAwMDApIj4KCQkJCTxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi41MDAwMDAsIDQuNTAwMDAwKSI+CgkJCQkJPHBhdGggaWQ9IlNoYXBlIiBjbGFzcz0ic3QwIiBkPSJNOS4xLDQ5LjhjMCwxMC40LDEzLjcsMTksMzAuNCwxOWMxNi45LDAsMzAuNC04LjUsMzAuNC0xOVM1Ni4yLDMwLjcsMzkuNSwzMC43CgkJCQkJCVM5LjEsMzkuMyw5LjEsNDkuOCIvPgoJCQkJCTxwYXRoIGlkPSJTaGFwZV8xXyIgY2xhc3M9InN0MSIgZD0iTTcwLDM0LjdjLTEuMy0wLjQtMi4yLTAuNi0xLjQtMi4yYzEuNC0zLjYsMS41LTYuNywwLTguOWMtMy00LjEtMTEtNC0yMC4xLTAuMQoJCQkJCQljMCwwLTIuOSwxLjMtMi4yLTEuMWMxLjQtNC41LDEuMi04LjMtMS0xMC42QzQwLjQsNi44LDI3LjMsMTIsMTUuOSwyMy4yQzcuNSwzMS43LDIuNSw0MC43LDIuNSw0OC42CgkJCQkJCWMwLDE0LjgsMTkuMiwyMy45LDM3LjgsMjMuOWMyNC41LDAsNDAuOC0xNC4zLDQwLjgtMjUuNUM4MSw0MC4xLDc1LjEsMzYuMyw3MCwzNC43eiBNNDAuMiw2Ny4xQzI1LjQsNjguNiwxMi40LDYxLjksMTEuNCw1MgoJCQkJCQljLTEtOS43LDEwLjMtMTguOSwyNS4yLTIwLjNzMjcuOCw1LjIsMjguOCwxNS4xQzY2LjUsNTYuNSw1NS4xLDY1LjcsNDAuMiw2Ny4xeiIvPgoJCQkJCTxwYXRoIGlkPSJTaGFwZV8yXyIgY2xhc3M9InN0MiIgZD0iTTg2LjMsNy40Yy01LjktNi41LTE0LjYtOS0yMi43LTcuM2wwLDBjLTEuOSwwLjQtMy4xLDIuMi0yLjYsNGMwLjQsMS45LDIuMiwzLjEsNCwyLjYKCQkJCQkJYzUuNy0xLjIsMTEuOSwwLjYsMTYuMiw1LjJjNC4xLDQuNyw1LjMsMTEuMSwzLjYsMTYuNmwwLDBjLTAuNiwxLjgsMC40LDMuOCwyLjIsNC40YzEuOCwwLjYsMy44LTAuNCw0LjQtMi4ybDAsMAoJCQkJCQlDOTMuOCwyMi45LDkyLjIsMTQsODYuMyw3LjQiLz4KCQkJCQk8cGF0aCBpZD0iU2hhcGVfM18iIGNsYXNzPSJzdDIiIGQ9Ik03Ny4yLDE1LjdjLTIuOS0zLjItNy4xLTQuNC0xMS4xLTMuNmMtMS41LDAuNC0yLjYsMS45LTIuMiwzLjZjMC40LDEuNSwxLjksMi42LDMuNiwyLjIKCQkJCQkJbDAsMGMxLjktMC40LDQsMC4zLDUuMywxLjhjMS40LDEuNSwxLjgsMy43LDEuMiw1LjZsMCwwYy0wLjQsMS41LDAuNCwzLjIsMS45LDMuN2MxLjUsMC40LDMuMi0wLjQsMy43LTEuOQoJCQkJCQlDODAuOSwyMy4xLDgwLjIsMTguOCw3Ny4yLDE1LjciLz4KCQkJCQk8cGF0aCBpZD0iU2hhcGVfNF8iIGNsYXNzPSJzdDMiIGQ9Ik00MS43LDM5LjNjLTcuMS0xLjktMTUuMSwxLjYtMTguMiw4cy0wLjEsMTMuNCw3LDE1LjhjNy40LDIuMywxNi4yLTEuMywxOS4zLTguMgoJCQkJCQlDNTIuOCw0OC4xLDQ5LjEsNDEuMiw0MS43LDM5LjN6IE0zNi4zLDU1LjVjLTEuNCwyLjItNC41LDMuMy02LjksMi4yYy0yLjItMS4xLTMtMy43LTEuNS01LjljMS40LTIuMiw0LjQtMy4yLDYuNy0yLjIKCQkJCQkJQzM3LDUwLjYsMzcuNyw1My4yLDM2LjMsNTUuNXogTTQxLDQ5LjRjLTAuNCwxLTEuNiwxLjMtMi42LDFjLTAuOC0wLjQtMS4yLTEuMy0wLjctMi4yYzAuNC0wLjgsMS42LTEuMywyLjUtMQoJCQkJCQlDNDEuMyw0Ny41LDQxLjUsNDguNiw0MSw0OS40eiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=");
      background-size: 100%;
      background-position-y: 0.266667rem;
    }
    .search-text {
      width: 75%;
      height: 100%;
      display: flex;
      align-items: center;
      >li{
        font-size: .426667rem;
        padding: 0 .533333rem;
      }
      .hot-news-box {
        width: 100%;
        height: 0.746667rem;
        display: flex;
        align-items: center;
        background: #ebebec !important;
        color: #bdbdbd;
      }
    }
    .write {
      display: flex;
      align-items: center;
      font-size: 0.593333rem;
    }
  }
  .nav-main {
    position: relative;
    .details {
      &::before{
        content: "";
        position: absolute;
        top: 0;
        bottom: .1875rem;
        left: 1px;
        z-index: 9;
        width: .75rem;
        transform: translateX(-100%);
        background: linear-gradient(270deg,#fafafa,#fafafa 20%,hsla(0,0%,98%,0));
      }  
      position: absolute;
      right: 0px;
      height: 100%;
      width: 1.173333rem;
      background: #fafafa;
      display: flex;
      justify-content:center;
      align-items: center;
      z-index: 555;
      i{
          font-size: 0.593333rem;
          color: #a5adb5;
      }
    }
    ul {
      display: flex;
      align-items: stretch;
      // justify-content: space-around;
      li {
        // flex: 1 0;
        white-space: nowrap;
        padding: 0.32rem;

        span {
          font-size: 0.426667rem;
        }
        .em {
          width: 0.526667rem;
          height: 0.053333rem;
          background: black;
          margin: auto;
          margin-top: 0.133333rem;
        }
      }
    }
  }
}
</style>

