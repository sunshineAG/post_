<template>
    <div class="PageIndex" ref="PageIndex">
        <div ref="swipe" style="position:relative">
            <van-swipe class="my-swipe" :autoplay="30000" indicator-color="white" id="my">
                <van-swipe-item v-for="(image, index) in images" :key="index"  >
                    <img v-lazy="image" style="max-height:220px;width:100%"/>
                </van-swipe-item>
                <template #indicator>
                    <div class="custom-indicator">
                    <!-- {{ current + 1 }}/4 -->
                    </div>
                </template>
            </van-swipe>
        </div>
    <div class="tabNav">
        <van-sticky @scroll="fn(`123`,$event)" container="my-swipe" >
            <div class="filter">
                <div class="file"></div>
            </div>
            <div v-show="yindao" class="test"  ref="scrolla" >
                <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
            </div>  
            <div  class="cls" ref="clsa"> 
                <van-tabs >
                    <van-tab v-for="index in 8" :title="'标' + index" :key="index">
                    </van-tab>
                </van-tabs>
            </div>
            <div class="subTitle">
                <van-tabs >
                    <van-tab v-for="idx in 8" :title="`标签直`" :key="idx">
                    </van-tab>
                </van-tabs>
            </div>
            <div class="suofang">
                <div>
                    <img src="https://oktools.net/ph/100x100" alt=""  style=" border-radius: 100% 100% 100% 100% / 0% 0% 30% 30%;">
                </div>
                <div >
                    <img src="https://oktools.net/ph/22x16" class="bgColor"/>
                </div>
                <div @click="check">
                    <img src="../assets/logo.png"  :class="{'active':lag}"/>
                    <span class="text">文字</span>
                </div>
                
            </div>
        </van-sticky>
    </div>

        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                    <van-list
                        v-model="isloading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
                    <div v-for="(item,index) in listTest" slots="default" :key="index">{{item.name}}</div>
            </van-list>
        </van-pull-refresh>
       


        <!-- <div @click="test">tiao</div>
        <div @click="test2">tiao</div>
        
        <div v-for="(item,index) in list " :key = "index">
            <span :style="{color:item.flag?'blue':'pink'}" @click="getLink(item,index)">{{item.text}}</span>
        </div> -->

    </div>
</template>
<script>
    import { Skeleton ,Loading,Sticky,Button,Swipe,SwipeItem,Tab,Tabs,DropdownMenu, DropdownItem,List,PullRefresh  } from 'vant';
    var storge = require('../libs/store')
    var dataU =  require('../libs/dateUtil')
    import {compareTime} from '../libs/comConfig'
    export default {
        name: 'home',
        components:{
            [PullRefresh .name]:PullRefresh ,
            [List .name]:List ,
            [Skeleton.name]:Skeleton,
            [Loading.name]:Loading,
            [Sticky.name]:Sticky,
            [Button.name]:Button,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [DropdownMenu.name]:DropdownMenu,
            [DropdownItem.name]:DropdownItem,
        },
        data () {
            return {
             loading: true,
             yindao:true,
             visible:false,
             active:0,
             value1: 0,
             lag:false,
            value2: 'a',
            step:0,
            arr:[],
            listTest: [
                {name:'eva'},
                {name:'test'},
                {name:'eva'},
                {name:'test'},
                {name:'eva'},
                {name:'test'},
                {name:'eva'},
                {name:'test'},
                {name:'eva'},
                {name:'test'},
                {name:'eva'},
                {name:'test'},
                {name:'eva'},
                {name:'test'},
                {name:'eva'},
                {name:'test'},
                {name:'eva'},
                {name:'test'},
                {name:'eva'},
                {name:'test'},
                {name:'eva'},
                {name:'test'},
                {name:'eva'},
                {name:'test'}
            ],
            isloading: false,
            finished: false,
            refreshing: false,
            images:[
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589639345875&di=7e35dfaf3688eb916998cf3707c7693e&imgtype=0&src=http%3A%2F%2Fpic.qjimage.com%2Fph144%2Fhigh%2Fph1574-p01148.jpg'
            ],
            list:[
                {
                    id:29,
                    text:'文字1',
                    flag:false
                },
                {
                    id:48,
                    text:'文字3',
                    flag:false
                },
                {
                    id:67,
                    text:'文字5',
                    flag:false
                },
                {
                    id:7,
                    text:'文字7',
                    flag:false
                }
            ],
            option1: [
                { text: '体育直播', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
            }
        },
        mounted : function(){
        },
        methods:{
            onLoad(){
                setTimeout(() => {
                    if (this.refreshing) {
                        this.list = [];
                        this.refreshing = false;
                    }

                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.isloading = false;

                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            },
            check(){
                this.lag = true
            },
            onRefresh(){
                this.finished = false;

                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.isloading = true;
                this.onLoad();
            },
            test2(){this.visible =true },
            test(){
                this.visible = false 
                // this.$router.push('/SiteSearch')
                // this.$axios({
                //     method:'GET',
                //     url:'http://localhost:8001/' + 'user/info'
                // }).then(res=>{
                //     console.log(res)
                // })
                console.log(1533439343934)
            },

            fn(v,e){
                let step = this.$refs.scrolla.getBoundingClientRect().top
                let _elH = this.$refs.swipe && this.$refs.swipe.offsetHeight - 80;
                if( step < _elH ){
                    if(this.$refs.scrolla.style!=='undefined'){
                        this.$refs.clsa.style.left = parseInt(_elH + -1*(step)) + 'px' 
                        this.$refs.scrolla.style.left = parseInt( -1*(step)) + 'px' 
                    }
                }else if(step>parseInt( _elH - 10)){
                    this.$refs.scrolla.style.left = -136 + 'px'
                    this.$refs.clsa.style.left = 0 + 'px' 
                }
            },
            getLink(item,idx){
                if(!item.flag){
                    this.$set(item,'flag',!item.flag)
                    let storgea = storge.store.deserialize(storge.store.get('data'));
                    if(storgea){
                        storgea.id.push(item.id)
                        storge.store.set('data',storge.store.serialize(storgea))
                    }else{
                        let data = {
                            name:'eva',
                            age:18,
                            id:[]
                        }
                        data.id.push(item.id)
                        storge.store.set('data',storge.store.serialize(data))
                    }
                }
            }
        },
        created(){
            let _ = this;
            let creatData = new Date();
            let tody = creatData.Format("yyyy-MM-dd");//当前时间
                creatData.setDate(creatData.getDate() - 1);
            let yesterDay = creatData.format("yyyy-MM-dd");

            let arr = storge.store.deserialize(storge.store.get("data"))
            
            if(compareTime(tody,yesterDay)){ //过期时间清楚，只保留当前日期数据
                storge.store.clear()
            }else{
                _.list.forEach(el=>{
                    if(arr && arr.id.indexOf(el.id)!= -1){
                        el.flag = true
                    }else{
                        el.flag = false
                    }
                })
            }
        }
    }

</script>
<style lang='less'>
    .PageIndex .van-tabs__nav{
        /* margin-left:122px; */
        background:none;
    }
    .tabNav{
        width:100%;
        height:200px;
        border-radius:20px;
        // background:#fff;
        // position: absolute;
        // left: 0;
        // top:300px;
        padding-bottom:30px;
    }
    .filter{
        width: 100%;   
        overflow: hidden;   
        border-radius:20px 20px 0 0;
        box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
                    0 .5em 1em rgba(0, 0, 0, 0.6);   
        // text-shadow: 0 1px 1px hsla(0,0%,100%,.3) ;
        .file{
            background: hsla(226, 79%, 33%, 0.9) border-box;
            filter: blur(1px);
            box-shadow: 0 0 0 1px hsla(0,0%,100%,.1) inset;
            text-shadow: 0 1px 1px hsla(0,0%,100%,.2) ;
            width:100%;
            height:46px;
        }
    }

    .subTitle .van-tabs__nav{
        margin-left:0;
    }
    .van-tabs__wrap{
        background:rgb(68, 158, 231);
    }
    .subTitle .van-tabs__wrap{
        background:rgb(255, 255, 255);
    }
    .van-tab{
        z-index:1;
        color:#fff;
    }
    .subTitle .van-tab{
        z-index:1;
        color:#ccc;
    }
    .subTitle .van-tab--active span{
        color:rgb(235, 235, 235);
    }
    .van-tab--active span{
        color:rgb(127, 118, 250) ;
    }
    
    .van-tabs__nav .van-tabs__line{
        position: absolute;
        bottom: 0.4rem;
        left: 0;
        z-index: 0;
        width: 60px !important;
        height: 48px;
        background-color: #fff;
        border-radius: 16px 16px 0 0;
    }

    .subTitle .van-tabs__nav .van-tabs__line{
        position: absolute;
        bottom: 0.4rem;
        left: 0;
        z-index: 0;
        width: 90px !important;
        height: 40px;
        line-height:40px;
        background-color: rgb(73, 126, 204);
        border-radius: 50px;
        margin-bottom:2px
    }
    [class*=van-hairline]::after{
        border:0;
    }
</style>
<style scoped lang="less">
    
    .PageIndex {
        width: 100%;
        // height:2000px;
        position: relative;
        overflow: hidden;
        background:#D1AF88;
        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 20px;
            line-height: 140px;
            height: 360px;
            text-align: center;
            background-color: #39a9ed;
        }
        .van-swipe{
            height:360px;
        }
        .van-swipe__indicators{
            bottom:20px;
            font-size:20px;
        }
        .van-dropdown-menu{
            height:34px;
            margin-top:5px;
            border-radius:0 20px 20px 0;
        }
        .suofang{
                position: absolute;
                background: #fff;
                z-index: 9;
            div{  
                 width: 300px;  
                 height: 300px;  
                 border: #000 solid 1px;  
                 margin: 50px auto;  
                 overflow: hidden;  
                 font-size:12px;
             }  
             div img{  
                 cursor: pointer;  
                 transition: all 0.6s;  
             }  
             .bgColor{
                 filter:grayscale(100%);
             }
             div .active{  
                 transform: scale(1.4);  
             } 
             div .text{  
                 cursor: pointer;  
                 font-size:20px;
                 color:#000;
                 transition: all 0.6s;  
             }  
             div .text:hover{  

                 transform: scale(1.4);  
             } 
        }
        .test{
            width:120px;
            position:absolute;
            left:-130px;
            z-index:2; justify-content: center;
        }
        .cls{
            position: relative;
            left:0;
            z-index: 1;
        }
        .box{
            width:350px;
            height:200px;
            background:#ccc;
            margin:0 auto;
            font-size:14px;
        }
        .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
            border:0;
        }
        .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
            border:0;
        }
        
    }
    
</style>
