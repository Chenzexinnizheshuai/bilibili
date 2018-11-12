<template>
<div>
   <el-row v-if="data.length>0">
  <el-col v-if="o.num>0" :span="8" v-for="(o, index) in data" :key="o.id" >
    <el-card :body-style="{ padding: '0px' }" >
      <img  :src="o.url" class="image">
      <div style="padding: 14px;">
        <p  style="margin:auto;textAlign:center" >{{o.name}}</p>
        <div class="bottom clearfix">
           <el-input-number v-model="o.num" @change="handleChange" :min="0"  label="描述文字"></el-input-number>
           <el-button type="danger" style="float:right" @click="giveup(o)" >抛弃他</el-button>
        </div>
      </div>
    </el-card>
    <p>{{o.name}}共:{{o.num}}个，每个{{o.price}}$</p>
  </el-col>
</el-row>
<el-button type="danger" style="float:right" >迎娶新娘</el-button>

<p>总价{{mygirlgetter}}$</p>
</div>
</template>
<script>
import {Card,Col,Row,Button,InputNumber} from "element-ui";
import { mapState , mapGetters } from 'vuex';
import store from "@/store";
import router from "@/router";
export default {
    data(){
        return {
            num1 : 1
        }
    },
    created() {
      this.getmygirl()
        
    },
    methods : {
        handleChange(){
          console.log(this.num)
        },  
        //获取localstrory里的数据
        getmygirl(){
            store.dispatch("getmygirl")
        },
        giveup(val){
            
            val.num = 0
        }
    },
    components : {        
        [Card.name] : Card ,
        [Col.name] : Col ,
        [Row.name] : Row ,
        [Button.name] : Button, 
        [InputNumber.name] : InputNumber
    },
    computed : {
      ...mapState({
        data : state => state.homemodule.mygirldata
      }),
      ...mapGetters(["mygirlgetter"])
    }
    
}
</script>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    /* width: 100%; */
    display: block;
    margin: auto;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>





