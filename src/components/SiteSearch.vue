
<style lang="less" scoped>
    .search-warap{
        height:80px;
        line-height:80px;
        background:#fff;
        vertical-align: middle;
        display: flex;
        align-items: center;
        span{
            font-size:22px;
        }
        &:last-child{
            
        }
        .label{
            padding-left:20px;
            margin-right:20px;
        }
        .search-input{
            width:600px;
            .van-search .van-cell{
                line-height:50px;
                padding-left:10px;
            }
            .van-search{
                width:100%;
            }    
        }  
    }
    
    .search-content{
        padding:30px 30px 10px 30px;
        background:#FFF;
        border-radius:30px;
        margin:20px 0;
        .title{
            height:50px;
            line-height:50px;
            position: relative;
            span{
                font-size:20px;
                font-weight: bold;
                vertical-align: middle;
            }
            img{
                position: absolute;
                right:0;
            }
        }   
        .search-history{
            
            margin-top:30px;
            line-height:30px;
            display: flex;
            flex-wrap: wrap;
            span{
                flex:1;
                min-width: 25%;
                max-width: 30%;
                width: 25%;
                padding:6px 20px;
                background:#f0f0f0;
                border-radius:28px;
                color:#ccc;
                margin-right:10px;
                font-size:12px;
                margin-bottom:24px;
                
            }
        }
    }

    .search-info{
        padding:30px;
        border-radius:20px;
        background:#fff;
        font-size:20px;
        p{
            margin:0;
            height:46px;
            line-height:46px;
        }
    }
</style>

<template>

    <div class="site-search-main">
        
        <div class="search-warap">
            <span class="label">足球</span>
            <div class="search-input">
                <van-search
                    v-model="value"
                    shape="round"
                    background="#fff"
                    placeholder="请输入搜索关键词"
                />
            </div>
            <!-- <span>搜索</span> -->
        </div>

        <div class="search-content">
            <div class="title">
                <span>足球搜索</span>
                <img src="https://oktools.net/ph/30x30" alt="">
            </div>
            <div class="search-history">
                <span >文字啊文字</span>
                <span >文字啊文字</span>
                <span >文字啊文字</span>
                <span >文字啊文字</span>
                <span >文字啊文字</span>
                <span >文字啊文字</span>
                <span >文字啊文字</span>
                <span >文字啊文字</span>
            </div>
        </div>
        
        <div class="search-info">
            <p>文字啊文字文字啊文字文字啊文字</p>
            <p>文字啊文字文字啊文字文字啊文字</p>
            <p>文字啊文字文字啊文字文字啊文字</p>
        </div>

    </div>

</template>

<script>
import {Search } from "vant"
export default {
    name:'SiteSearch',
    components:{
        [Search.name]:Search
    },
    data(){
        return{
            value:''
        }
    },
    methods:{
        test(){
            this.$router.push('/FilterSearch')
        },
        httpRequest(){
            
            // this.$axios({
            //     method:'POST',
            //     url:"",
            //     data:{}
            // }).then(res=>{

            // }).catch(error=>{

            //}).finally(() => {
            //       
            //    })

        }
    },
    created(){
        let str = "这是一段内容，根据这段内容找到相关足球的两个字及相关信息"
        let arr = str.split('')
        console.log(   arr.splice(17))
        let reg1 = new RegExp('关键字','g');
        //let str = "<span style='color:rgb(43, 177, 70)'>"+ 关键字 +"</span>"
        //data.replace(reg1,str);
    }
}
</script>