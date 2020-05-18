<template>
  <div class="list-i-main">
      <div class="main-content">
            <van-collapse v-model="activeNames">
                <van-collapse-item name="1">
                    <template #title>
                        <div style="height:30px;line-height:30px;"><van-icon name="question-o" style="margin-right:6px;"/>标题1 </div>
                    </template>
                    <div class="" @click="getInfomation">
                        <p>
                            <span>第三节</span>
                            <span>14-16 15-17</span>
                        </p>
                        <div>
                            <div></div>
                            <div></div>
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
            this.$router.push('/SourceInfo')
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
