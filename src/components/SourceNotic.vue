<style lang="less" scoped>
p{
  margin:0;
}
.content-wrap{
  background:#fff;
  padding:20px 30px;
  border-radius:30px;
}
.notic-msg{
  display: flex;
  // align-items: center;
  margin-bottom:20px;
  .icon{
    margin-top:6px;
    flex-grow: 0;
    flex-shrink:0;
    width:40px;
    height:40px;
    overflow: hidden;
  }
  
  .min-text{
    flex: 1;
    font-size:20px;
    p{
      margin-left:20px;
      &:first-child{
        margin-bottom: 10px;
      }
      &:last-child{
        padding-left:10px;
        line-height:40px;    
        color:#ddd;  
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical; 
      }
      
    }
  }
}
.system-msg-chekcall{
  height:100px;
  width:100%;
  background:#fff;
  border-radius:20px;
  position: fixed;
  bottom:0;
 .system-chekcall{
   margin-left:30px;
   position: relative;
   img{
     position: absolute;
     &:nth-child(2){
       top:10px;
       right:340px;
     }
     &:last-child{
       top:10px;
       right:120px;
     }
   }
 }
}
.system-msg{
  height:80px;
  border-radius:6px;
  background:#fff;
  display: flex;
  align-items: center;
  .system-redio{
    flex-grow: 0;
    flex-shrink:0;
    height:38px;
    margin-right:10px
  }
  .system-text{
    width: 100%;
    padding-right:40px;
    background:url('https://oktools.net/ph/10x10')no-repeat top 6px right;
      p{
        width: 100%;
        &:first-child{
          text-align:right;
          font-size:22px;
          margin-right:10px;
        }
        &:last-child{
          font-size: 22px;
          padding-left:50px;
          margin-top:8px;
          color:#ddd;
        }
      }
      position: relative;
      .active:after{
          content:'普通信件';
          display:block;
          position:absolute;
          top:0;
          left:50px;
          z-index:5;
      }
  }
  
}
</style>
<style lang="less">
.system-msg-chekcall{
 .van-radio{
    height:70px;
    span{
      vertical-align: middle;
    }
  }
  
}
</style>
<template>
  <div class="notic">
    <van-sticky @scroll="getInfoData($event)">
      <div></div>
      
    </van-sticky>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" >
      <van-list
          v-model="isloading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
      <div class="content-wrap">
        <div v-if="tabActive===0">
            <div v-for="(item,index) in sourceLisit" slots="default" :key="index" class="notic-msg">
              <van-icon name="https://oktools.net/ph/40x40"  dot class="icon"/> 
              <div class="min-text">
                  <p>【公告】{{spliceStr('这里只能显示不大于14个字符的长度呼呼呼呼')}}</p>
                  <p class="tet">这里只能显示不大于14个字符的长度0这里只能显示不大于14个字符的长度这里只能显示不大于14个字符的长度符的长度这里只能显示不大于14个字符的长度</p>
                </div>    
            </div>
          </div>
          <div v-if="tabActive===1">
              <van-empty
                class="custom-image"
                image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                description="暂无数据"
              />
          </div>
          <div v-if="tabActive===2">
               <van-checkbox-group v-model="result" ref="checkboxGroup">               
                <div class="system-msg">
                    <van-checkbox name="a" class="system-redio"></van-checkbox>
                    <van-icon name="https://oktools.net/ph/40x40"  dot class="system-icon"/> 
                    <div class="system-text" @click="getNoticInfo">
                      <p class="active">
                        2010-14-25
                      </p>
                      <p>这里只能显示不大于14个字符的长度0这</p>
                    </div>
                </div>
              </van-checkbox-group>
          </div>
      </div>
      
      </van-list>
    </van-pull-refresh>
    <div class="system-msg-chekcall">
      <div class="system-chekcall">
        <van-radio-group v-model="radio" @change="checkAll" >
          <van-radio name="1"><span style="font-size:12px;flex:1;">全选</span></van-radio>
        </van-radio-group>
        <img src="https://oktools.net/ph/40x40" alt="">
        <img src="https://oktools.net/ph/40x40" alt="">
      </div>
    </div>
  </div>
</template>

<script>

import {Sticky,List,PullRefresh,Icon,Empty , RadioGroup, Radio,CheckboxGroup ,Checkbox } from "vant"
export default {
  name:'',
  components:{
      [List.name]:List,
      [PullRefresh.name]:PullRefresh,
      [Sticky.name]:Sticky,
      [Icon.name]:Icon,
      [Empty.name]:Empty ,
      [RadioGroup.name]:RadioGroup,
      [Radio.name]:Radio,
      [CheckboxGroup.name]:CheckboxGroup,
      [Checkbox.name]:Checkbox
  },
  data(){
    return{
          isloading: false,
          finished: false,
          refreshing: false,
          result:[],
          radio:1,
          sourceLisit:[{},{},{},],
          tabActive:2,
          notifyCount:6
    }
  },
  computed:{
    spliceStr(){
      return function(v){
        let strArr = Array.from(v);
        if(strArr.length>14){
          let newStr = strArr.splice(0,14).join('');
          return newStr
        }
        return v
      }
    }
  },
  methods:{
        getNoticInfo(){
          this.$router.push('/NoticInfo')
        },
        checkAll() {
          this.$refs.checkboxGroup.toggleAll(true);
           //this.$refs.checkboxGroup.toggleAll();
        },
        change(){
          this.tabActive = 0
        },
        getInfoData(){},
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