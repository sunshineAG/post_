
<style lang='less' scoped>
    p{
        margin:0;
    }
    .card-3{
        margin-top:20px;
        width:100%;
        
        background:url('https://oktools.net/ph/20x40') no-repeat top -30px left -10px;
        background-size: 70px;
        background-color:#fff;
        border-radius:20px;
        .card-title{
            background:url('https://oktools.net/ph/40x40') no-repeat top 18px right 50px;
            padding-top:20px;
            p:nth-child(1){
                height:60px;
                line-height:60px;
                font-size:22px;
                text-align:center;
                span{
                    margin-right:10px;
                    color:#ccc;
                    &:first-child{
                        color:blue;
                    }
                    &:last-child{
                        border:1px solid blue;
                        border-radius:10px;
                        padding:2px 14px;
                    }
                }
            }
            p:nth-child(2){
                font-size:22px;
                text-align:center;
                line-height:60px;
                
                span{
                    margin:0 60px;
                    font-weight: bold;
                }
                img{
                    width: 50px;
                    height:50px;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
<style lang='less'>

</style>
<template>
  <div class="list-i-main">
    <div class="card-3">
        <div class="card-title">
            <p>
                <span>NBA</span>
                <span>05-09</span>
                <span> 00:00 </span>
                <span>让球</span>
            </p>
            <p>
                <span>热火</span>
                <img src="https://oktools.net/ph/50x50" alt="">
                <span>骑士队</span>
            </p>
        </div>
        <abacklist-content :flag="true"></abacklist-content>
    </div>
  </div>
</template>

<script>
import {Collapse, CollapseItem,Icon} from "vant"
import abacklistContent from "./abacklistContent"
export default {
    components:{
        abacklistContent,
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
            this.$router.push('/SourceInfo')
        }
    }
}
</script>

