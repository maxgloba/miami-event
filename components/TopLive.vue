<template>
  <section class="top">
    <div class="container">

      <div class="column column-left" ref="left">
        <svg class="corner corner-one" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0H10C4.47715 0 0 4.47715 0 10V23L23 0Z" fill="#FFE600"/></svg>
        <h3>Can’t Make It To <br> GeekOut Miami?</h3>
        <h2>The Most <br> Anticipated <br> Event In <br> Ecom Is Now <br> Virtual </h2>
        <div class="text">Now You Can Get All The Same Strategies From Ecom’s Sharpest Media Buyers, Marketers, And Brand Founders Without Ever Leaving Your Home.</div>
        <button class="top-btn" @click.prevent="openCheckout">Buy Livestream <br> Ticket Now!</button>
      </div>

      <div class="column column-right" ref="right">
        <div class="video" ref="video">
          <svg ref="corner" class="corner corner-two" width="175" height="30" viewBox="0 0 175 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L132.574 0C140.53 0 148.161 3.1607 153.787 8.78679L175 30H0V0Z" fill="#FFE600"/></svg>
          <svg ref="corner" class="corner corner-three" width="175" height="30" viewBox="0 0 175 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M175 30L42.4264 30C34.4699 30 26.8393 26.8393 21.2132 21.2132L0 0H175V30Z" fill="#FE0098"/></svg>
          <svg @click.prevent="play" class="video-btn" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path v-if="vimeoObjParams.play" class="pause" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H50C55.5228 0 60 4.47715 60 10V50C60 55.5228 55.5228 60 50 60H10C4.47715 60 0 55.5228 0 50V10ZM27 21H22V39H27V21ZM38 21H33V39H38V21Z" fill="white"/>
            <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10V50C0 55.5228 4.47715 60 10 60H50C55.5228 60 60 55.5228 60 50V10C60 4.47715 55.5228 0 50 0H10ZM24 21L39.4779 29.931L24 38.8619V21Z" fill="#FFE600"/>
          </svg>
          <div class="video-frame" :id="vimeoObjParams.id"></div>
        </div>
      </div>
    </div>
    <Sponsors/>
  </section>
</template>
<script>
import Player from '@vimeo/player'
export default {
  data(){
    return {
      player: null,
      vimeoObjParams: {
        id: 'vslVideo',
        option: {
          id: 691761982,
          autoplay: false,
          responsive: true,
          muted: false,
          controls: false,
          loop: true,
        },
        play: false,
      }
    }
  },
  methods: {
    videoInit() {
      this.player = new Player(
          this.vimeoObjParams.id,
          this.vimeoObjParams.option
      ).on('ended', function () {})
    },
    play() {
      if(this.vimeoObjParams.play){
        this.player.pause()
        this.vimeoObjParams.play = false
        this.$refs.video.classList.remove('video-active')
      } else {
        this.player = new Player(this.$el.querySelector('iframe'))
        this.player.play()
        this.vimeoObjParams.play = true
        this.$refs.video.classList.add('video-active')
      }
    },
    openCheckout(e){
      const dinnerCheckout = document.querySelector('.product-checkout')
      dinnerCheckout.classList.add('product-active')
      setTimeout(()=>{
        dinnerCheckout.scrollIntoView({block: "start", behavior: "smooth"})
      }, 500);
    }
  },
  mounted(){
    this.videoInit()

    setTimeout(()=> {
      this.$refs.left.classList.add('active')
      this.$refs.right.classList.add('active')
    },0)
  }
}
</script>
<style lang="scss" scoped>
.top{
  position: relative;
  z-index: 1;
  transition: z-index 0.1s ease 2s;
  padding: 20px 0 40px;
  @media(min-width:768px){
    padding: 30px 0 80px;
  }
  .corner{
    display: block;
    position: absolute;
    &-one{
      left: 0;
      top: 0;
      transform: translate(30px, 30px);
      opacity: 0;
      transition: 0.5s ease 1.5s;
      @media(min-width:768px){
        display: none;
      }
    }
    &-two{
      height: 30px;
      left: 0;
      top: 0;
      transform: translateX(-200px);
      transition: transform 2s ease 1.5s;
    }
    &-three{
      right: 0;
      bottom: 0;
      transform: translateX(200px);
      transition: transform 2s ease 1.5s;
    }
  }

  h3 {
    font-family: 'Monument Extended';
    font-size: 25px;
    font-weight: 400;
    line-height: 23px;
    color: #FE0098;
    margin-bottom: 40px;
    padding: 23px 0 0 23px;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 27px;
      padding: 0;
      margin-bottom: 60px;
    }
    &:before{
      content: "";
      position: absolute;
      left: -100%; top: 50%;
      transform: translateY(-50%);
      width: 200%;
      height: 100%;
      transition: left 1.5s ease 0.5s;
      background: linear-gradient(90deg, rgba(#380F4C, 0) 0%, rgba(#380F4C, 1) 50%, rgba(#380F4C, 1) 100%,);
    }
  }

  h2{
    font-family: 'Monument Extended';
    font-size: 40px;
    line-height: 80%;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 40px;
    padding-left: 23px;
    position: relative;
    overflow: hidden;
    @media(max-width:767px){
      br {display: none;}
    }
    @media(min-width:768px){
      padding: 0;
      font-size: 55px;
      margin-bottom: 60px;
    }
    @media(min-width:1200px){
      font-size: 70px;
    }

    &:before{
      content: "";
      position: absolute;
      left: -100%; top: 50%;
      transform: translateY(-50%);
      width: 200%;
      height: 100%;
      transition: left 1.5s ease 0.5s;
      background: linear-gradient(90deg, rgba(#380F4C, 0) 0%, rgba(#380F4C, 1) 50%, rgba(#380F4C, 1) 100%,);
    }
  }

  .text{
    padding-left: 23px;
    text-transform: uppercase;
    font-size: 23px;
    font-weight: 500;
    line-height: 26px;
    position: relative;
    color: #003CFF;
    overflow: hidden;
    margin-bottom: 40px;
    &:before{
      content: "";
      position: absolute;
      left: -100%; top: 50%;
      transform: translateY(-50%);
      width: 200%;
      height: 100%;
      transition: left 1.5s ease 1s;
      background: linear-gradient(90deg, rgba(#380F4C, 0) 0%, rgba(#380F4C, 1) 50%, rgba(#380F4C, 1) 100%,);
    }
    @media(min-width:768px){
      padding: 0;
      font-size: 30px;
      line-height: 34px;
    }
  }

  &-btn {
    text-decoration: none;
    display: block;
    width: 100%;
    padding: 15px 0;
    background: #003CFF;
    border: 1px solid transparent;
    border-radius: 10px;
    font-family: 'Monument Extended';
    font-size: 23px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
    transition: hover 0.3s ease, opacity 0.3s ease 0.75s;
    opacity: 0;
    @media(min-width: 768px) {
      padding: 20px 0;
      border-radius: 20px;
      margin-bottom: 0;
    }
    &:hover {
      box-shadow: 0px 5px 50px rgba(0, 60, 255, 0.3);
    }
  }

  .video{
    display: inline-block;
    position: relative;
    overflow: hidden;
    padding: 30px 0;
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
    transform: translateX(50px);
    width: 315px;
    @media(min-width:992px){
      width: 482px;
    }

    img{
      display: block;
    }

    &-btn{
      position: absolute;
      cursor: pointer;
      z-index: 4;
      bottom: 35px;
      right: 5px;
      width: 40px;
      height: auto;
      opacity: 0;
      transition: hover 0.3s ease, opacity 1s ease 0.75s;
      @media(min-width:768px){
        bottom: 45px;
        right: 15px;
        width: 60px;
      }
      &:hover{
        opacity: .9;
      }
    }
    &-frame{
      overflow: hidden;
      border-radius: 0 20px;
      width: 100%;
    }
  }

  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      padding-bottom: 80px;
    }
  }

  .column {
    position: relative;
    &-left {
      @media(min-width:768px){
        flex-basis: 50%;
        max-width: 50%;
      }
      @media (min-width: 1200px ) {
        padding-top: 30px;
      }

      &.active{
        h2, .text, h3{
          &:before{
            left: 100%;
          }
        }
        .top-btn {
          opacity: 1;
        }
        .corner-one{
          transform: translate(0, 0);
          opacity: 1;
        }
      }
    }
    &-right{
      position: relative;
      text-align: center;
      padding: 40px 0 80px;
      @media(min-width:768px){
        padding: 0;
        padding-left: 30px;
        text-align: right;
      }

      &.active{
        .video{
          opacity: 1;
          transform: translateX(0);
          &-btn{
            opacity: 1;
          }
        }
        .corner{
          &-three,&-two{
            transform: translateX(0);
          }
        }
      }
    }
  }
}

.white{
  .top{
    h2{
      color: #000;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
    h3 {
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
    .text{
      color: #003CFF;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
    .container{
      &:after {
        background: #003CFF;
      }
    }
  }
}
</style>
