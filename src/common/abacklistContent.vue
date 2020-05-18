<style lang='less' scoped>
p{
    margin:0;
}
    .card-b{
        width:calc(100vw-5px);
        // height:230px;
        border-radius:20px;
        background:#fff;
        padding:20px;
        .title{
            display: flex;
            align-items: center;
            height:50px;
            position: relative;
            img{
                flex-grow: 0;
                flex-shrink:0;
                width:40px;
                height:40px;
            }
            span:nth-child(2){
                font-size:12px;
                display:block;
                flex-grow: 0;
                flex-shrink:0;
                width:140px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-left:10px;
            }
            .source-list{
                    border:1px solid red;
                    border-radius:4px;
                    padding:2px 6px;
                    font-size:14px;
                    margin-left:10px;
                    box-sizing: border-box;
                }
            
            .point{
                font-size:22px;
                position: absolute;
                right:40px;
                color:#ccc;
                em:nth-child(1){
                    // font-style: normal;
                    margin-left:10px;
                    font-size:50px;
                    font-weight: bold;
                    font-style:oblique;
                    color:red;
                }
                &:after{
                    content:'%';
                    color:red;
                    font-weight: bold;
                    font-size:20px;
                    font-style:oblique;
                    position: absolute;
                    right:-26px;
                    bottom:10px;

                }
            }
            border:1px solid #ccc;

        }
        .content-img{
            background:url('https://oktools.net/ph/80x80')no-repeat top 30px right 10px;
            background-size:contain;
        }
        .content{
            margin-top:20px;
            p{
                width: calc(100vw-30px);
                height:40px;
                line-height:40px;
                font-size:28px;
                margin-bottom:10px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            p:nth-child(2){
                color:#ddd;
            }
        }
    }
</style>
<style lang='less'>

</style>
<template>
  <div class="list-i-main">
      <div class="card-b">
            <div class="title">
                <img src="https://oktools.net/ph/30x30" alt="">
                <span>詹姆斯热火骑士赢詹姆斯热火骑士赢詹姆斯热火骑士赢</span>
                  <span class="source-list">33</span>
                <span class="point">
                    胜率
                    <em>51</em>
                </span>
            </div>
            <div :class=" ['content',{'content-img':flag}]">
                <p>詹姆斯热火骑士赢詹姆斯热火骑士赢詹姆斯热火骑士赢</p>
                <p>2012-2-2</p>
            </div>
        </div>
  </div>
</template>

<script>

export default {
    components:{
       
    },
    props:['flag'],
    data(){
        return {
            activeNames:['1'],
        }
    },
    methods:{
        getInfomation(){
            this.$router.push('/SourceInfo')
        }
    }
}
</script>


