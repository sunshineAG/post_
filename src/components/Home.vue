<template>
    <div class="aLive-Home">
        <banner-header @platform="getPlatformData" :platformIdx="platformIndex"></banner-header>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" style="height:100%;">
                <van-list
                    v-model="isloading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                >
                <div v-for="(item,index) in sourceLisit" slots="default" :key="index" >
                    <list-content :sourceData="item" v-if="platformIndex"></list-content>
                    <list-context v-else></list-context>
                </div>
        </van-list>
    </van-pull-refresh>
    </div>
</template>

<script>
 import bannerHeader from "../common/bannerHeader"
 import listContent from "../common/listContent"
 import listContext from "../common/listContext"
 import {Sticky,List,PullRefresh} from "vant"
export default {
    name:'Home',
    components:{
        bannerHeader,
        listContent,
        listContext,
        [List.name]:List,
        [PullRefresh.name]:PullRefresh,
        [Sticky.name]:Sticky
    },
    data(){
        return {
            platformIndex:true,
            isloading: false,
            finished: false,
            refreshing: false,
            sourceLisit:[
                // {
                //     id:'1',
                //     name:'场次',
                //     icon:'',
                //     sourceArray:[
                //         {
                //           excerpt:"第四节",
                //           score:'12-74',
                //           bill:6,
                //           remixer:6,
                //           infoA:{
                //               avatar:'',
                //               text:'xxxxx',
                //               scorePoint:'33',
                //               imgs:[]
                //           },
                //           infoB:{
                //               avatar:'',
                //               text:'xxxxx',
                //               scorePoint:'33',
                //               imgs:[]
                //           }
                //         },
                //         {
                //             excerpt:"第五节",
                //             score:'12-74',
                //             bill:6,
                //             remixer:6,
                //             infoA:{
                //                 avatar:'',
                //                 text:'xxxxx',
                //                 scorePoint:'33',
                //                 imgs:[]
                //             },
                //             infoB:{
                //                 avatar:'',
                //                 text:'xxxxx',
                //                 scorePoint:'33',
                //                 imgs:[]
                //             }
                //         }
                //     ]
                // },
                // {
                //     id:'1',
                //     name:'场次',
                //     icon:'',
                //     sourceArray:[
                //         {
                //           excerpt:"第四节",
                //           score:'12-74',
                //           bill:6,
                //           remixer:6,
                //           infoA:{
                //               avatar:'',
                //               text:'xxxxx',
                //               scorePoint:'33',
                //               imgs:[]
                //           },
                //           infoB:{
                //               avatar:'',
                //               text:'xxxxx',
                //               scorePoint:'33',
                //               imgs:[]
                //           }
                //         },
                //         {
                //             excerpt:"第五节",
                //             score:'12-74',
                //             bill:6,
                //             remixer:6,
                //             infoA:{
                //                 avatar:'',
                //                 text:'xxxxx',
                //                 scorePoint:'33',
                //                 imgs:[]
                //             },
                //             infoB:{
                //                 avatar:'',
                //                 text:'xxxxx',
                //                 scorePoint:'33',
                //                 imgs:[]
                //             }
                //         }
                //     ]
                // }
            ]
        }
    },
    methods:{
        getPlatformData(v){
            this.platformIndex = v!==2;
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

                if (this.sourceLisit.length >= 3) {
                    this.finished = true;
                }
            }, 1000);
        },
    }
}
</script>

<style lang="less" scoped>
    // .aLive-Home{
    //     height:2000px;
    // }
</style>
<style lang="less">

</style>