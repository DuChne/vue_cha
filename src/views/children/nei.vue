<template>
    <div id='home'>
        <mt-header fixed class="music-header-3 playing-header xin" title="详情">
            <span slot="left" @click="$router.go(-1)">
            <!-- <img src="" width="26"> -->
        返回
            </span>
            <span slot="right" style="font-size: 30px;font-weight: bold;display: inline-block;margin-top: -10px;">...</span>
        </mt-header>
        <div class="xin_x">
  <!-- <zu></zu> -->
            <div class='zhan_ming' >
                    <div class='zhan_ul'>
                    <div  :class="['zhan_li',nu==1?'bain xina':'zhan_li']">展商</div>
                    <!-- <div class='zhan_li {{nu==2?"bain xina":"zhan_li"}}' data-nu='2' bindtap='tuanD'>产品</div>
                    <div class='zhan_li {{nu==5?"bain xina":"zhan_li"}}' data-nu='5' bindtap='tuanD'>优惠</div>
                    <div class='zhan_li {{nu==4?"bain xina":"zhan_li"}}' data-nu='4' bindtap='tuanD'>招商</div> -->
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {zhanData,xqArr} from '@/static/js/newp';
export default {
    data(){
        return {
            arrData:[],
            id:'',
            nu:1
        }
    },
    created () {
        this.id=this.$route.params.id;
        this.getData()          
    },
    methods: {
        getData(){
            console.log(this.id)
            let par={"id":this.id}
            console.log(par)
            xqArr(par).then(res =>{
                console.log(res)
            })
        }
    }
}
</script>
<style scoped>
    .xin_x{
        width: 95%;
        padding: 0.16rem;
        overflow: hidden;
    }
    .zhan_ming{
        width: 100%;
    }
     .zhan_ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: auto;
        font-size: 0.30rem;
        margin-top: 0.46rem;
        max-height: 0.78rem;
    }
    .xina{
        background: #13AE67;
    }
    .bain{
        font-size:0.32rem;
        width:40%;
        text-align:status;
        border-radius:0.08rem 1.10rem 0 0;
        padding-top:0.20rem;
        padding-bottom:0.15rem;
        padding-left:0.20rem;
        padding-right:0.44rem;
        max-height:0.38rem;
        margin-top:-0.16rem;
    }
    .zhan_li{
        font-size:0.30rem;
        width:37%;
        max-height:0.40rem;
        text-align:status;
        border-radius:0.08rem 1.10rem 0 0;
        padding-top:0.08rem;
        padding-bottom:0.08rem;
        padding-left:0.20rem;
        padding-right:0.44rem;
        color:#ffffff;
        box-shadow: 0.06rem 0 0.05rem rgba(0, 0, 1, 0.2)

    }

    .bain{
        font-size:0.32rem;
        width:40%;
        text-align:status;
        border-radius:0.8rem 1.10rem 0 0;
        padding-top:0.2rem;
        padding-bottom:0.14rem;
        padding-left:0.2rem;
        padding-right:0.44rem;
        max-height:0.32rem;
        margin-top:-0.16rem;
        background: #13AE67;
    }
</style>