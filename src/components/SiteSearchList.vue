<style lang="less" scoped>
.source-wrap{
    height:80px;
    background:#fff;
    border-radius:20px;
    margin-bottom:20px;
    padding:20px;
    div{
        &:first-child{
            display:flex;
            height:30px;
            line-height:30px;
            margin-bottom:10px;
            position: relative;
            span{
                font-size:22px;
                &:first-child{
                    flex-grow: 0;
                    flex-shrink:0;
                    width:360px;
                    display: block;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space:nowrap;
                    color:#ccc;
                }
                &:last-child{
                    position: absolute;
                    right: 10px;
                }
            }
        }
        &:last-child{
            display:flex;
            position: relative;
            span{
                font-size:22px;
                &:first-child{
                    flex-grow: 0;
                    flex-shrink:0;
                    width:360px;
                    display: block;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space:nowrap;
                }
                &:last-child{
                    position: absolute;
                    right: 10px;
                }
            }
        }
        .activeText{
            color:red;
        }
    }
}
</style>
<template>
  <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" >
                    <van-list
                        v-model="isloading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
            <div v-for="(item,index) in sourceLisit" slots="default" :key="index" class="list">
                <div class="source-wrap">
                    <div>
                        <span>电竞足-FIFEA意大利网络明心FIFEA意大利网络明心FIFEA意大利网络明心FIFEA意大利网络明心FIFEA意大利网络明心</span>
                        <span>0-0</span>
                    </div>
                    <div>
                        <span>电竞足-FIFEA意大利网络明FIFEA意大利网络明心FIFEA意大利网络明心FIFEA意大利网络明心心</span>
                        <span class="activeText">上半场 00：13</span>
                    </div>
                </div>
            </div>
            </van-list>
        </van-pull-refresh>
  </div>
</template>

<script>
import {Sticky,List,PullRefresh} from "vant"
export default {
    components:{
        [Sticky.name]:Sticky,
        [List.name]:List,
        [PullRefresh.name]:PullRefresh
    },
    data(){
        return{
            isloading: false,
            finished: false,
            refreshing: false,
            sourceLisit:[]
        }
    },
    methods:{
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

                if (this.sourceLisit.length >= 4) {
                    this.finished = true;
                }
            }, 1000);
        }
    }
}
</script>

<style>

</style>