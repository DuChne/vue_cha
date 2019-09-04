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
                    <div  :class="['zhan_li',nu==1?'bain xina':'zhan_li']" data-id="1" @click="getqu">展商</div>
                    <div  :class="['zhan_li',nu==2?'bain xina':'zhan_li']" data-id="2" @click="getqu">产品</div>
                    <div  :class="['zhan_li',nu==3?'bain xina':'zhan_li']" data-id="3" @click="getqu">优惠</div>
                    <div  :class="['zhan_li',nu==4?'bain xina':'zhan_li']" data-id="4" @click="getqu">招商</div>

                    <!-- <div class='zhan_li {{nu==2?"bain xina":"zhan_li"}}' data-nu='2' bindtap='tuanD'>产品</div>
                    <div class='zhan_li {{nu==5?"bain xina":"zhan_li"}}' data-nu='5' bindtap='tuanD'>优惠</div>
                    <div class='zhan_li {{nu==4?"bain xina":"zhan_li"}}' data-nu='4' bindtap='tuanD'>招商</div> -->
                    
                </div>
            </div>
            <div v-if="(nu==1)">展商<br/>
                <img :src="http+(arrData.logo)" alt="">
            </div>
            <div v-if="(nu==2)">
                视频
                <video-player  class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
                    @play="onPlayerPlay($event)"                    
                ></video-player>
            </div>
            <div v-show="(nu==3)">图片
                <br/>
                	<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=551180330,2986440005&fm=26&gp=0.jpg" preview="1" preview-text="这是新的">
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1785199001,3375299815&fm=26&gp=0.jpg" preview="1" preview-text="这是新的2">
            </div>
            <div v-if="(nu==4)">招商</div>
            <!-- <img src="https://sz.goodtea.cc/uploads/20190628/3a8316ba9f78f3fc40e8aa688c342f55_1920_1200.jpg" preview="1" preview-text="你好">
      <img src="https://sz.goodtea.cc/uploads/20190628/3a8316ba9f78f3fc40e8aa688c342f55_1920_1200.jpg" preview="1" preview-text="你好2"> -->
        </div>
    </div>
</template>
<script>
import {zhanData,xqArr} from '@/static/js/newp';
// import videoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import Vue from 'vue'

			
export default {

    data(){
        return {
            arrData:[],
            id:'',
            nu:1,
            a:'https://sz.goodtea.cc/uploads/20190628/bcbeb8fe3354933731aec0795665dd22.mp4',
            http:'https://sz.goodtea.cc',
            playerOptions : {},
            youhui:[]

        }
    },
     beforeCreate () {
       
    },
    created () {
        this.id=this.$route.params.id;
        this.getData()
       this.playerOptions={
             playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                src: this.a,  // 路径
                type: 'video/mp4'  // 类型
                }],
                poster: 'https://sz.goodtea.cc/uploads/20190628/3a8316ba9f78f3fc40e8aa688c342f55_1920_1200.jpg', //你的封面地址
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                timeDivider: true,
                durationDisplay: true,
                remainingTimeDisplay: false,
                fullscreenToggle: true  //全屏按钮
                }
       }
    },
    methods: {
        getData(){
            console.log(this.id)
            let par={"id":this.id}
            console.log(par)
            xqArr(par).then(res =>{
                this.arrData=res.data;
                this.youhui=res.data.youhui
                console.log(res.data)
            })
        },
        getqu(e){
            this.nu=e.srcElement.dataset.id;
            console.log(e.srcElement.dataset.id)
        },
            // listen event
        onPlayerPlay(player) {
            console.log('player play!', player)
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
        max-height:0.78rem;
        margin-top:-0.16rem;
    }
    .zhan_li{
        font-size:0.30rem;
        width:37%;
        max-height:0.78rem;
        text-align:status;
        border-radius:0.08rem 1.10rem 0 0;
        padding-top:0.08rem;
        padding-bottom:0.08rem;
        padding-left:0.20rem;
        padding-right:0.44rem;
        color:#ffffff;
        box-shadow: 0.06rem 0 0.05rem rgba(0, 0, 1, 0.2);
        background: #999999;

    }

    .bain{
        font-size:0.32rem;
        width:40%;
        text-align:status;
        border-radius:0.08rem 1.10rem 0 0;
        padding-top:0.2rem;
        padding-bottom:0.14rem;
        padding-left:0.2rem;
        padding-right:0.44rem;
        max-height:0.78rem;
        margin-top:-0.16rem;
        background: #13AE67;
    }
    .video-js .vjs-big-play-button{}
</style>