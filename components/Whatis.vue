<template>
  <section class="whatis anim">
    <div class="container">
      <div class="column column-left">
        <svg class="corner corner-one" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0H10C4.47715 0 0 4.47715 0 10V23L23 0Z" fill="#FFE600"/></svg>
        <h2>What is <br> Geek Out <br> Miami All <br> About ?</h2>
        <div class="text">A group of people who are intensely passionate (Obsessed) will get together in the Miami Arts District to hangout and learn with the biggest ecommerce brands. We will eat cuban food, go to a Marlins game, airboat ride, hang with gators, all while learning and hanging out with the best and the brightest with the best and brightest. We Will Learn. We Will Chill. We Will Party While We Figure Out How To Make More Sales (& Money)</div>
        <div class="points">
          <svg class="corner corner-four" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0H10C4.47715 0 0 4.47715 0 10V23L23 0Z" fill="#FE0098"/></svg>
          <ul class="points-content">
            <li>Airboat Rides</li>
            <li>Hangout with Gators</li>
            <li>Box at the Marlins Games</li>
            <li>12 Hours of INTENSE Education</li>
            <li>Level Up Networking</li>
          </ul>
          <div class="points-img">
            <img src="@/assets/img/mi/whatis_1.png">
            <img src="@/assets/img/mi/whatis_2.png">
            <img src="@/assets/img/mi/whatis_3.png">
          </div>
        </div>
      </div>
      <div class="column column-right">
        <div class="video" ref="video">
          <svg class="corner corner-two" width="175" height="30" viewBox="0 0 175 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L132.574 0C140.53 0 148.161 3.1607 153.787 8.78679L175 30H0V0Z" fill="#FFE600"/>
          </svg>
          <svg class="corner corner-three" width="175" height="30" viewBox="0 0 175 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M175 30L42.4264 30C34.4699 30 26.8393 26.8393 21.2132 21.2132L0 0H175V30Z" fill="#FE0098"/></svg>
          <svg @click.prevent="play" class="video-btn" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path v-if="vimeoObjParams.play" class="pause" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H50C55.5228 0 60 4.47715 60 10V50C60 55.5228 55.5228 60 50 60H10C4.47715 60 0 55.5228 0 50V10ZM27 21H22V39H27V21ZM38 21H33V39H38V21Z" fill="white"/>
            <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10V50C0 55.5228 4.47715 60 10 60H50C55.5228 60 60 55.5228 60 50V10C60 4.47715 55.5228 0 50 0H10ZM24 21L39.4779 29.931L24 38.8619V21Z" fill="#FFE600"/>
          </svg>
          <div class="video-frame" :id="vimeoObjParams.id"></div>
        </div>
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
    }
  },
  mounted(){
    this.videoInit()
  }
}
</script>
<style lang="scss" scoped>
.whatis{
  position: relative;
  z-index: 1;
  transition: z-index 0.1s ease 2s;
  padding: 40px 0 40px;
  @media(min-width:768px){
    padding: 80px 0 80px;
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
        height: 30px;
        width: 30px;
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

    &-four {
      opacity: 0;
      transition: 0.5s ease 1.5s;
      @media(min-width:768px){
        height: 30px;
        width: 30px;
      }
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
    padding: 23px 0 0 23px;
    position: relative;
    overflow: hidden;
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
    @media(max-width:767px){
      br{
        display: none;
      }
    }
    @media(min-width:768px){
      padding: 30px 0 0 30px;
      font-size: 55px;
      margin-bottom: 60px;
    }
    @media(min-width:1200px){
      font-size: 70px;
    }
  }

  .text{
    background: #2E0C3F;
    border-radius: 10px;
    padding: 20px;
    font-size: 18px;
    line-height: 126.5%;
    color: #FFFFFF;
    position: relative;
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
      margin-bottom: 30px;
      padding: 30px;
    }
  }

  .points{
    position: relative;
    overflow: hidden;
    &:before{
      content: "";
      position: absolute;
      left: -100%; top: 50%;
      transform: translateY(-50%);
      width: 200%;
      height: 100%;
      transition: left 1.5s ease 1.5s;
      background: linear-gradient(90deg, rgba(#380F4C, 0) 0%, rgba(#380F4C, 1) 50%, rgba(#380F4C, 1) 100%,);
    }
    @media(min-width:992px) {
      display: flex;
      justify-content: space-between;
    }
    ul {
      padding: 23px 0 0 50px;
      margin-bottom: 20px;
      @media(min-width:768px) {
        padding: 30px 0 0 50px;
        flex-basis: 62.2%;
        max-width: 62.2%;
      }
      @media(min-width:992px) {
        margin-bottom: 0;
      }
      li {
        font-size: 18px;
        font-weight: 500;
        line-height: 20px;
        color: #FE0098;
      }
    }
    &-img {
      padding: 0 33px;
      display: flex;
      flex-direction: column;
      @media(min-width:992px) {
        padding: 0;
        justify-content: center;
        flex-basis: 31.1%;
        max-width: 31.1%;
      }
      img {
        margin-bottom: 10px;
        &:last-child{
          margin-bottom: 0;
        }
        @media(min-width:992px) {
          margin-bottom: 8px;
        }
      }
    }
  }

  .video{
    display: inline-block;
    position: relative;
    overflow: hidden;
    padding: 30px 0;
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
    &:after {
      content: '';
      height: 1px;
      background: #fff;
      display: block;
      width: calc(100% - 20px);
      position: absolute;
      bottom: 0;
      left: 10px;
      opacity: 0;
      transition: 1s ease 1s;
    }
  }

  .column {
    position: relative;
    @media(min-width:768px){
      flex: 1 50%;
    }
    &-right{
      position: relative;
      text-align: center;
      padding: 70px 0;
      @media(max-width:767px){
        padding-left: 33px;
        padding-right: 33px;
      }
      @media(min-width:768px){
        padding: 30px 0 30px 30px;
        text-align: right;
      }
    }
  }
}

.white{
  .whatis{
    h2{
      color: #000;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
    .points{
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
    .text{
      background: #fff;
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

.anim-active{
  z-index: 3;
  h2, .text{
    &:before{
      left: 100%;
    }
  }

  .points{
    &:before{
      left: 100%;
    }
  }

  .corner{
    &-one{
      transform: translate(0, 0);
      opacity: 1;
    }
    &-three,&-two{
      transform: translateX(0);
    }
    &-four {
      opacity: 1;
    }
  }
  .video{
    opacity: 1;
    transform: translateX(0);
  }
  .container{
    &:after {
      opacity: 1;
    }
  }
}
</style>
