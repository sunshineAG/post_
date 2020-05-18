
<style lang="less" scoped>
    .list{
        margin:10px 0;
    }
</style>

<template>

    <div class="source-remixer-main">
        <div class="test" style="margin-left:-10px;width:104%;border-radius: 100% 100% 100% 100% / 0% 0% 24% 24%;overflow:hidden;position:relative;height:200px;background:#fff;">
            <img src="https://oktools.net/ph/400x320" alt="" class="remixer-adImg" >
        </div>

        <van-sticky @scroll="getInfoData($event)">
            <div v-if='hideFlag' style="font-size:20px;background:#fff;">
                我是隐藏的组件吖
            </div>
            <div style="font-size:20px;background:#fff;border-bottom:1px solid #ccc;">button</div>
        </van-sticky>
        
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" >
                    <van-list
                        v-model="isloading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
            <div v-for="(item,index) in sourceLisit" slots="default" :key="index" class="list">
                <abacklist-content></abacklist-content>
            </div>
            </van-list>
        </van-pull-refresh>
    </div>

</template>

<script>
import abacklistContent from "../common/abacklistContent"
import {Sticky,List,PullRefresh} from "vant"
export default {
    name:'sourceInfo',
    components:{
        abacklistContent,
        [List.name]:List,
        [PullRefresh.name]:PullRefresh,
        [Sticky.name]:Sticky
    },
    data(){
        return{
            hideFlag:false,
            isloading: false,
            finished: false,
            refreshing: false,
            sourceLisit:[]
        }
    },
    methods:{
        getInfoData(e){
            this.hideFlag = e.isFixed
        },
          onRefresh(){
                this.finished = false;
                this.isloading = true;
                this.onLoad();
        },
        onLoad(){
            setTimeout(() => {
                if (this.refreshing) {
                    this.sourceLisit = [];
                    this.refreshing = false;
                }

                for (let i = 0; i < 2; i++) {
                    this.sourceLisit.push(this.sourceLisit.length + 1);
                }
                this.isloading = false;

                if (this.sourceLisit.length >= 40) {
                    this.finished = true;
                }
            }, 1000);
        }
    }
}
</script>