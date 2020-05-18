<template>
  <div class="banner-main">
      <div style="position:relative;">
          <van-icon name="https://oktools.net/ph/30x30"  class="banner-notify" :badge="notifyCount" @click="getNotic" />
          <div class="banner-type-nav">
            <van-tabs v-model="activeName"  type="card" @click="onClick" 
                title-inactive-color='#ccc' title-active-color="#fff">
                <van-tab title="体育直播" name="a"></van-tab>
                <van-tab title="电竞直播" name="b"></van-tab>
                <van-tab title="娱乐直播" name="c"></van-tab>
            </van-tabs>
          </div>
          <div style="height:230px;" ref="bannerSwipe">
                <van-swipe class="my-swipe" :autoplay="30000" indicator-color="white" @change="swipeChange">
                    <van-swipe-item v-for="(image, index) in images" :key="index"  >
                        <img v-lazy="image" style="max-height:220px;width:100%"/>
                    </van-swipe-item>
                    <template #indicator>
                        <div class="custom-indicator">
                            <span v-for="(item,index) in images" :key="index" :class="{'activeCurrent':index===current}"></span>
                        </div>
                    </template>
                </van-swipe>
            </div>
            <div style="margin-top:-46px;">
                <van-sticky  @scroll="changeScroll">  
                    <div class="tabNav-main">
                        <div v-show="subnav" class="nav-dropdown"  ref="navScroll" >
                                <van-dropdown-menu>
                                    <van-dropdown-item v-model="subNavVal" :options="subnavOptions" />
                                </van-dropdown-menu>
                        </div>  
                        <div class="platform-tabs">
                            <div class="platform-tabs-list" >
                                <div class="main-tabs" ref="tabScroll" >
                                    <van-tabs @click="selectPlatform">
                                        <van-tab v-for="index in 8"  :title="'标'  + index" :key="index">
                                        </van-tab>
                                    </van-tabs>
                                </div>
                            </div>
                        </div>
                        <div class="tabs-classify" v-if="platformIdx">
                            <van-tabs >
                                <van-tab v-for="idx in 8" :title="`标签直`" :key="idx">
                                </van-tab>
                            </van-tabs>
                            <van-icon name="https://oktools.net/ph/20x20"  class="tabs-search" @click="searchJump" />
                        </div>
                        <div  class="notic-sort" v-if="platformIdx">
                            <van-notice-bar color="#1989fa" background="#fff" :scrollable="true">
                                <div slots="default" class="notic-link">
                                    <img src="https://oktools.net/ph/100x10" alt="">
                                </div>
                            </van-notice-bar>
                            <div class="events-sort" @click="itemSort">
                                <span class="line-bord"></span>
                                <img src="https://oktools.net/ph/10x10" alt="" :class="{'sort-active':scaleFlag,'Imgfilter':!scaleFlag}">
                                <img src="https://oktools.net/ph/10x10" alt="">
                                <img src="https://oktools.net/ph/10x10" alt="" :class="{'sort-active':!scaleFlag,'Imgfilter':scaleFlag}">
                            </div>
                        </div>
                    </div>
                </van-sticky>   
            </div>
        </div>
  </div>
</template>

<script>
    import {Swipe,SwipeItem,Tab,Tabs,Icon,Sticky,DropdownMenu, DropdownItem,NoticeBar } from "vant"
export default {
    name:'bannerHeader',
    components:{
        [NoticeBar.name]:NoticeBar,
        [Sticky.name]:Sticky,
        [Icon.name]:Icon,
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        [Tab.name]:Tab,
        [Tabs.name]:Tabs,
        [DropdownMenu.name]:DropdownMenu,
        [DropdownItem.name]:DropdownItem
    },
    props:['platformIdx'],
    data(){
        return {
            images:[
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589639345875&di=7e35dfaf3688eb916998cf3707c7693e&imgtype=0&src=http%3A%2F%2Fpic.qjimage.com%2Fph144%2Fhigh%2Fph1574-p01148.jpg'
            ],
            activeName:'a',
            notifyCount:6,
            current: 1,
            scaleFlag:true,
            subnav:true,
            subNavVal:0,
            subnavOptions:[
                 { text: '体育直播', value: 0 },
                { text: '电竞直播', value: 1 },
                { text: '娱乐直播', value: 2 },
            ]
        }
    },
    methods:{
        getNotic(){
            this.$router.push('/SourceNotic')
        },
        itemSort(){
            this.scaleFlag = !this.scaleFlag;
        },
        searchJump(){
            this.$router.push('/SiteSearch')
        },
        selectPlatform(name,title){
            this.$emit('platform',name)
        },
        onClick(name,title){
            console.log(name)
            console.log(title)
        },
        swipeChange(index){
            this.current = index;
        },
        changeScroll(){
            let step = this.$refs.navScroll.getBoundingClientRect().top
            let _elH = this.$refs.bannerSwipe && this.$refs.bannerSwipe.offsetHeight - 80;
            
            if( step < _elH ){
                if(this.$refs.navScroll.style!=='undefined'){
                    this.$refs.tabScroll.style.left = parseInt(_elH + -1*(step)) + 'px' 
                    this.$refs.navScroll.style.left = parseInt( -1*(step)) + 'px' 
                }
            }else if(step>parseInt( _elH - 10)){
                this.$refs.navScroll.style.left = -136 + 'px'
                this.$refs.tabScroll.style.left = 0 + 'px' 
            }
        }
    }
}
</script>

<style lang='less' scoped>
    .banner-main{
            position: relative;
        .banner-notify{
            position:absolute;
            top:56px;
            left:50px;
            z-index:9;
            font-size:56px;
        }
        .van-info{
            width:26px;
            height:26px;
            line-height:26px;
            font-size:12px;
        }
        .banner-type-nav{
            position:absolute;
            top:60px;
            left:130px;
            z-index:9;
            width: 300px;
            overflow: hidden;
        }
        .custom-indicator{
            position: absolute;
            right: 50%;
            bottom: 110px;
            padding: 2px 5px;
            font-size: 12px;
            transform: translateX(50%);
            span{
                width:10px;
                height:10px;
                display: inline-block;
                background:#fff;
                border-radius:100%;
                margin-right:10px;
                transition: all 0.6s;  
            }
            .activeCurrent{
                width:40px;
                background: #ccc;
                border-radius:10px;
            }
        }


        .tabNav-main{
            width:100%;
            margin:0 auto;
            height:100%;
            overflow: hidden;
            border-radius:20px 20px 0 0;
            box-shadow: 1px 1px 10px rgba(59, 59, 230,.1);
            .platform-tabs{
            width: 100%;   
            overflow: hidden;   
            border-radius:20px 20px 0 0;
            box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset;
            text-shadow: 0 1px 1px hsla(0,0%,100%,.3) ;
                .platform-tabs-list{
                    background: hsla(226, 79%, 33%, 0.9) border-box;
                    filter: blur(1px);
                    box-shadow: 0 0 0 1px hsla(0,0%,100%,.1) inset;
                    text-shadow: 0 1px 1px hsla(0,0%,100%,.2) ;
                    width:100%;
                    height:68px;
                }
            }
            .nav-dropdown{
                width:150px;
                overflow: hidden;
                border-radius:0 50px 50px 0;
                position:absolute;
                left:-124px;
                margin-top:18px;
                z-index:2; justify-content: center;
                
                .van-dropdown-menu{
                    background:hsla(226, 81%, 61%, 0.9);
                    height:40px;
                }
            }
            .main-tabs{
                position: relative;
                left:0;
                z-index: 1;
            }
            .tabs-classify{
                background:#fff;
                padding-right: 78px;
                position:relative;
                .tabs-search{
                    position: absolute;
                    top:6px;
                    right:6px;
                    box-shadow: -2px 0 1px rgba(59, 59, 230,.8) ;
                }
            }
            .notic-sort{
                height:60px;
                line-height:60px;
                margin-right:0px;
                position:relative;
                overflow: hidden;
                border-radius:0 0 20px 20px;
                .notic-sort{
                    padding-right:86px;
                }
                .line-bord{
                    position:absolute;
                    top:20px;
                    z-index:9;
                    right:130px;
                    height:40px;
                    width:2px;
                    background:#f0f0f0;
                }
                .events-sort{
                    position:absolute;
                    right:10px;
                    top:-8px;
                    width:120px;
                    height:60px;
                    padding-left:40px;
                    z-index:9;
                    text-align:center;
                    line-height:50px;
                    img{
                        display: inline-block;
                        transition: all 0.6s;  
                    }
                    .sort-active{  
                        transform: scale(2);  
                    } 
                    .Imgfilter{
                        filter:grayscale(100%);
                    }
                }
            }
        }
         
    }
</style>
<style lang='less'>
    .tabs-classify{
        .van-tabs--line .van-tabs__wrap{
            height:46px;
            padding:16px 10px;
        }
        .van-tab{
            color:rgb(112, 112, 112);
            line-height:46px;
            margin-right:10px;
            border:1px solid #ccc;
            background:#f0f0f0;
            border-radius:20px;
        }
        .van-tab--active{
            background:rgb(45, 78, 167);
            border-color:rgb(85, 85, 175);
            color:#fff;
        }
        .van-tabs__line{
            height:0;
        }

    }
    .platform-tabs{
        .van-tabs--line .van-tabs__wrap{
            height:68px;
        }
        .van-tabs__nav{
            background:none;
        }
        .van-tab{
            color:#fff;
            line-height:28px;
            span{
                width:100%;
                display: inline-block;
                margin:20px 0;
                border-right:1px solid #f0f0f0;
            }
            &:nth-last-child(2){
                span{
                    border:0;
                }
            }
        }
        .van-tab--active{
            background:#fff;
            border-radius:20px 20px 0 0;
            color:blue;
        }
        .van-tabs__line{
            height:0;
        }
    }
    .tabNav-main{
        [class*=van-hairline]::after{
            border:0;
        }
         .van-dropdown-menu__title{
            line-height:24px;
            color:#fff;
        }
        .van-notice-bar{
            height:60px;
        }
    }
    .banner-main .banner-type-nav{
        .van-tabs--card>.van-tabs__wrap{
            height:46px;
        }
        .van-tabs__nav .van-tabs__nav--card{
            height:46px;
        }
        .van-tabs__nav--card{
            margin:0;
            width:100%;
            background: rgba(59, 59, 230,.3);
            height:46px;
            border-radius: 40px;
            border:1px solid rgba(59, 59, 230,1);
            overflow: hidden;
        }
        .van-tab {
            line-height:46px;
        }
        .van-tabs__nav--card .van-tab.van-tab--active{
            background-color:rgba(59, 59, 230,.8);
        }
        .van-tabs__nav--card .van-tab:nth-child(1),
        .van-tabs__nav--card .van-tab:nth-child(2){
            border-right:1px solid rgba(59, 59, 230,1);
        }
    }
</style>
