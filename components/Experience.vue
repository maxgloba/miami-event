<template>
  <section class="expirience anim">
    <div class="container">
      <div class="expirience-content">
        <div class="expirience-title">
          <svg class="corner corner-one" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0H10C4.47715 0 0 4.47715 0 10V23L23 0Z" fill="#FE0098"/></svg>
          <h2>What Is<br> the GeekOut <br>Experience <br>Like?</h2>
        </div>
        <ul class="anim">
          <li>Insane</li>
          <li>Unique</li>
          <li>Connecting</li>
          <li>Wild</li>
          <li>Fun</li>
        </ul>
      </div>
      <div class="expirience-video" ref="video">
        <svg class="corner corner-two" width="153" height="20" viewBox="0 0 153 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L120.218 0C128.015 0 135.505 3.03535 141.102 8.46299L153 20H0V0Z" fill="#FFE500"/></svg>
        <svg class="corner corner-three" width="152" height="20" viewBox="0 0 152 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M152 20H32.7819C24.9852 20 17.4948 16.9646 11.8975 11.537L0 0H152V20Z" fill="#FE0098"/></svg>
        <svg class="corner corner-four" width="30" height="240" viewBox="0 0 30 240" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L8.63622e-06 197.574C8.98401e-06 205.53 3.16071 213.161 8.7868 218.787L30 240L30 -1.31134e-06L0 0Z" fill="#FFE600"/></svg>
        <svg class="corner corner-five" width="30" height="240" viewBox="0 0 30 240" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 240L30 42.4264C30 34.4699 26.8393 26.8393 21.2132 21.2132L-1.04907e-05 1.31134e-06L0 240L30 240Z" fill="#FE0098"/></svg>

        <svg @click.prevent="play" class="video-btn" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path v-if="vimeoObjParams.play" class="pause" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H50C55.5228 0 60 4.47715 60 10V50C60 55.5228 55.5228 60 50 60H10C4.47715 60 0 55.5228 0 50V10ZM27 21H22V39H27V21ZM38 21H33V39H38V21Z" fill="white"/>
          <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10V50C0 55.5228 4.47715 60 10 60H50C55.5228 60 60 55.5228 60 50V10C60 4.47715 55.5228 0 50 0H10ZM24 21L39.4779 29.931L24 38.8619V21Z" fill="#FFE600"/>
        </svg>

        <div class="video-frame" :id="vimeoObjParams.id"></div>
      </div>
    </div>
  </section>
</template>
<script>
import Player from '@vimeo/player'
export default {
  data(){
    return {
      player: null,
      vimeoObjParams: {
        id: 'flashbackVideo',
        option: {
          id: 691351894,
          autoplay: true,
          responsive: true,
          muted: true,
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
        this.player.setMuted(true)
        this.vimeoObjParams.play = false
        this.$refs.video.classList.remove('video-active')
      } else {
        this.player = new Player(this.$el.querySelector('iframe'))
        this.player.play()
        this.player.setMuted(false)
        this.vimeoObjParams.play = true
        this.$refs.video.classList.add('video-active')
      }
    }
  },
  mounted(){
    this.videoInit()
  }
}
</script>
<style lang="scss" scoped>
.expirience{
  padding: 40px 0;
  position: relative;
  z-index: 1;
  transition: z-index 0.1s ease 2s;
  @media(min-width: 768px) {
    padding: 80px 0;
  }
  &-content {
    @media(min-width: 1200px) {
      width: 50%;
      margin: 0 0 0 auto;
    }
  }
  &-title {
    padding: 23px 0 0 23px;
    position: relative;
    @media(min-width: 768px) {
      padding: 30px 0 0 30px;
    }
  }
  .corner {
    display: block;
    position: absolute;

    &-one {
      left: 0;
      top: 0;
      height: 23px;
      width: 23px;
      transform: translate(30px, 30px);
      opacity: 0;
      transition: .5s ease 1.5s;
      @media(min-width: 768px) {
        height: 30px;
        width: 30px;
      }
    }
    &-two{
      height: 20px;
      left: 0;
      top: 0;
      transform: translateX(-200px);
      transition: transform 2s ease 1.5s;
      @media(min-width: 768px) {
        display: none;
      }
    }
    &-three{
      right: 0;
      bottom: 1px;
      transform: translateX(200px);
      transition: transform 2s ease 1.5s;
      @media(min-width: 768px) {
        display: none;
      }
    }
    &-four {
      display: none;
      @media(min-width: 768px) {
        display: block;
        top: 0;
        left: 0;
        width: 30px;
        transform: translateY(-200px);
        transition: transform 2s ease 1.5s;
      }
    }
    &-five {
      display: none;
      @media(min-width: 768px) {
        display: block;
        right: 1px;
        bottom: 0;
        width: 30px;
        transform: translateY(200px);
        transition: transform 2s ease 1.5s;
      }
    }
  }

  h2 {
    font-family: 'Monument Extended';
    font-size: 40px;
    font-weight: 400;
    line-height: 85%;
    letter-spacing: -0.02em;
    margin-bottom: 40px;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    opacity: 0;
    &:before{
      opacity: 0;
      content: "";
      position: absolute;
      left: -100%; top: 50%;
      transform: translateY(-50%);
      width: 200%;
      height: 100%;
      transition: left 1.5s ease 0.5s;
      background: linear-gradient(90deg, rgba(#380F4C, 0) 0%, rgba(#380F4C, 1) 50%, rgba(#380F4C, 1) 100%,);
    }
    @media(min-width: 768px) {
      font-size: 55px;
      margin-bottom: 60px;
    }
    @media(min-width: 1200px) {
      font-size: 70px;
    }
  }

  ul {
    list-style: none;
    padding-left: 23px;
    margin-bottom: 60px;
    @media(min-width: 768px) {
      margin-bottom: 60px;
      padding-left: 30px;
      display: flex;
    }
    li {
      font-size: 18px;
      font-weight: 500;
      line-height: 29px;
      text-transform: uppercase;
      position: relative;
      overflow: hidden;
      opacity: 0;
      &:before{
        opacity: 0;
        content: "";
        position: absolute;
        left: -100%; top: 50%;
        transform: translateY(-50%);
        width: 200%;
        height: 100%;
        transition: left 1.5s ease 1s;
        background: linear-gradient(90deg, rgba(#380F4C, 0) 0%, rgba(#380F4C, 1) 50%, rgba(#380F4C, 1) 100%,);
      }
      @media(min-width: 768px) {
        line-height: 20px;
        margin-right: 20px;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }

  &-video{
    position: relative;
    overflow: hidden;
    padding: 20px 0;
    opacity: 0;
    transform: translateX(50px);
    transition: 1s ease 1.5s;
    max-width: 994px;
    display: flex;
    justify-content: center;
    img{
      display: block;
    }
    @media(min-width: 768px) {
      padding: 0 30px;
    }
  }
}

.video{
  &-btn{
    position: absolute;
    z-index: 4;
    cursor: pointer;
    bottom: 25px;
    right: 5px;
    width: 40px;
    height: auto;
    @media(min-width:768px){
      bottom: 30px;
      right: 60px;
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

.white{
  .expirience{
    h2{
      color: #000;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
    li {
      color: #003CFF;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
  }
}

.anim-active{
  z-index: 3;
  h2 {
    opacity: 1;
    &:before{
      opacity: 1;
      left: 100%;
    }
  }
  ul {
    li {
      opacity: 1;
      &:before {
        opacity: 1;
        left: 100%;
      }
    }
  }
  .corner{
    &-one{
      transform: translate(0, 0);
      opacity: 1;
    }
     &-three, &-two{
      transform: translateX(0);
    }
    &-four,&-five {
      transform: translateY(0);
    }
  }
  .expirience-video{
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
