<style lang="less" scoped>
p{
    margin:0;
}
.card-a{
    .title{
        height:40px;
        line-height:40px;
        span:nth-child(1){
            padding:4px 15px;
            background:pink;
            font-size:22px;
            border-radius:0 14px 14px 0;
        }
        span{
            margin-right:10px;
        }
    }
    .content{
        width:100%;
        height:120px;
        display: flex;
        align-items: center;
        .left{
            flex:1;
            flex-basis: 300px;
            p{
                // justify-content: center; 左右
                display: flex;
                vertical-align: middle;
                align-items: center;
                height:40px;
                img{
                    flex-grow: 0;
                    flex-shrink:0;
                    width:30px;
                    height:30px;
                }
                span:nth-child(2){
                    flex-grow: 0;
                    flex-shrink:0;
                    width:230px;
                    padding-left:20px;
                    color:red;
                    vertical-align: middle;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                span:nth-child(3){
                    flex:1;
                    text-align:center;
                }
            }
        }
        .right{
            flex:1;
            flex-basis: 300px;
            .right-main{
                //inline-flex
                display:flex ;
                // justify-content: center;
                align-items: center;
                position:relative;
                // height:120px;
                img{
                    //flex:auto;
                    // flex:1;
                    // flex-basis:40px;
                    flex-grow: 0;
                    flex-shrink:0;
                    width:60px;
                    height:60px;
                    margin-right:16px;
                } 
                .name,.name2{
                    position: absolute;
                    bottom:0;
                    color:#fff;
                    z-index:3;
                    font-style: normal;
                    text-align: center;
                    width:60px;
                }
                .name2{
                    left:74px;
                }
                &::after{
                        content:'';
                        display:block;
                        position: absolute;;
                        bottom:4px;
                        left:0;
                        width:60px;
                        height:20px;
                        background:#000;
                    }
                &::before{
                    content:'';
                    display:block;
                    position: absolute;;
                    z-index: 1;
                    bottom:4px;
                    left:74px;
                    width:60px;
                    height:20px;
                    background:#000;
                }
                div{
                    flex:1;
                    flex-basis:50px;
                    padding-left:10px;
                    p{
                        text-align:right;
                        padding-right:50px;
                        background:url('https://oktools.net/ph/14x14') no-repeat center right;
                    }
                }  
            }
        }
    }
}
</style>
<template>
  <div class="list-i-main">
      <div class="main-content">
            <van-collapse v-model="activeNames">
                <van-collapse-item name="1">
                    <template #title>
                        <div style="height:30px;line-height:30px;"><van-icon name="question-o" style="margin-right:6px;"/>标题1 </div>
                    </template>
                    <div class="card-a" @click="getInfomation">
                        
                        <div class="title">
                            <span>第四节 04-22</span>
                            <span>14-16</span>
                            <span>10-22</span>
                            <span>7-21</span>
                            <span>2-2</span>
                        </div>

                        <div class="content">
                            <div class="left">
                                <p>
                                    <img src="https://oktools.net/ph/30x30" alt="">
                                    <span>詹姆斯热火骑士赢詹姆斯热火骑士赢詹姆斯热火骑士赢</span>
                                    <span>33</span>
                                </p>
                                <p>
                                    <img src="https://oktools.net/ph/30x30" alt="">
                                    <span>詹姆斯热火骑士赢</span>
                                    <span>33</span>
                                </p>
                            </div>
                            <div class="right" >
                                <div class="right-main">
                                    <em class="name">文字</em>
                                    <em class="name2">文字</em>
                                    <img src="https://oktools.net/ph/40x40" alt="" >
                                    <img src="https://oktools.net/ph/40x40" alt="" >
                                    <div class="active">
                                        <p>共6位主播</p>
                                        <p>共14个推单</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-collapse-item>
            </van-collapse>
        </div>
  </div>
</template>

<script>
import {Collapse, CollapseItem,Icon} from "vant"
export default {
    components:{
        [Icon.name]:Icon,
        [Collapse.name]:Collapse,
        [CollapseItem.name]:CollapseItem
    },
    data(){
        return {
            activeNames:['1']
        }
    },
    methods:{
        getInfomation(){
            this.$router.push('/SourceRemixer')
        }
    }
}
</script>

<style lang='less' scoped>
    .list-i-main{
        .main-content{
            margin:20px 0;
            border-radius:20px;
            overflow: hidden;
        }
    }
</style>
<style lang='less'>

</style>
