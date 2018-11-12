<template>
    <div>
        <el-container>
        <el-header
            height = "1.173333rem"
            class="weibohead">
            
            <el-button class="leftbtn" type="text"><i style="color:#282f3c" class="el-icon-iconName el-icon-arrow-left"></i></el-button>
            <h1 style="fontSize :0.5rem ">微博正文</h1>
            <i class="el-icon-more" style="color:#282f3c"></i>
        </el-header>
        <el-main>
            <div class="love"><a>每日GIF趣图精选</a><img src="https://h5.sinaimg.cn/upload/1080/674/2017/12/25/timeline_title_novelty3x_default.png"></div>
            <div class="theuserinfo" style="display:flex;alignItems:center">
                <img src="https://h5.sinaimg.cn/upload/1080/674/2017/12/25/timeline_title_novelty3x_default.png" alt="">
                <div>
                    <div>陈泽鑫</div>
                    <div>陈泽鑫</div>
                </div>
            </div>
            <div class="maincontent">
                <div class="text">

                </div>
                <div class="imgbox">
                    <div class="oneofbox" style="width:30%">
                        <img  
                        style="background:url('https://wx3.sinaimg.cn/orj360/005IkEqRly1fx53le8v0rg30el084twb.gif')"
                        class="oneofimg"  src="https://wx3.sinaimg.cn/orj360/005IkEqRly1fx53le8v0rg30el084twb.gif">
                    </div>
                </div>
            </div>
        </el-main>
        <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<script>
import { Button, Select ,Container ,Header ,Main , Footer} from 'element-ui';
Header.height = "200px"
export default {
    components : {
        [Button.name] : Button,
        [Container.name] : Container,
        [Main.name] : Main,
        [Footer.name] : Footer,
        [Header.name] : Header,

    }
}
</script>
<style lang ="scss">


.el-header, .el-footer {
    background-color: #fafafa;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 555px;
    
  }
  .el-header{
      border-bottom: .026667rem solid #e6e6e6;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: white;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }


.weibohead{
    height: 5.173333rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .leftbtn{
        i{
            font-size: .666667rem;
        }
    }
}
.love{
    display: flex;
    align-items: center;
    height: .533333rem;
    img{
        width: .373333rem;
        height: .373333rem;
    }
.theuserinfo{
    display: flex;
    display: flex;
}
.oneofbox{
    
    .oneofimg{
        
    }
}

}
</style>

