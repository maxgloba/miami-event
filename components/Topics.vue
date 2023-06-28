<template>
  <section class="topics anim">
    <div class="container">
      <div class="topics-title">
        <svg class="corner corner-one" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0H10C4.47715 0 0 4.47715 0 10V23L23 0Z" fill="#FFE600"/></svg>
        <h2>Topics</h2>
      </div>
      <div class="slider-wrap anim" @mousewheel="scroll">
        <vue-tiny-slider v-bind="tinySliderOptions" ref="topicsSlider" >
          <div class="item" v-for="(item, index) in topicItems">
            <h3 v-html="item.text"></h3>
            <div class="item-wrap">
              <img :src="require(`@/assets/img/mi/topics/topic-${index + 1}.png`)">
              <svg class="corner-two" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 0H10C4.47715 0 0 4.47715 0 10V30L30 0Z" fill="#FE0098"/></svg>
              <svg class="corner-three" width="278" height="30" viewBox="0 0 278 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M278 30H42.4264C34.4699 30 26.8393 26.8393 21.2132 21.2132L0 0H278V30Z" fill="#FFE600"/></svg>
            </div>
          </div>
        </vue-tiny-slider>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      goToSchedule: false,
      tinySliderOptions: {
        mouseDrag: true,
        items: 1,
        swipeAngle: 45,
        nav: false,
        speed: 1000,
        controls: true,
        loop: false
      },
      wheel: false,
      wheelDisabled: false,
      topicItems:[
        {
          text:'<b>Cody Iverson (VISCAP)</b> - <br> Script Writing For UGC and Creators that Convert'
        },
        {
          text:'<b>Danil Saliukov (Insense)</b> - <br>Short Product Intro + Panel <br> - Topic: Influencers - The  Good The Bad The Ugly\n'
        },
        {
          text:'<b>Greg Woodfield <br> (Via Customer) </b> - The Best <br> and Worst SMS campaigns <br> of 2022'
        },
        {
          text:'<b>Carmela Cugini (UnyBrands Sponsor) </b> - A Deep Dive Into Selling A Brand'
        },
        {
          text:'<b>Zach Johnson (Dashfi)</b> - <br> True Life: Points Are A <br> Terrible Inflation Hedge'
        },
        {
          text:'<b>Devyn Green</b> - Shopify <br> Pages Are Dead - Top of <br> Funnel Expansion'
        },
        {
          text:'<b>Ronak Shah</b> - Scaling Your Brand - Here are The Numbers that Matter'
        },
        {
          text:'<b>Marin Ištvanić</b> - Facebook <br> Media Buying Tips and Tricks'
        },
        {
          text:'<b>Katharine McKee</b> - <br> Understanding <br> Google\'s Algorithm <br> and How To Beat It'
        },
        {
          text:'<b>Jem Bourough</b> - What Scale <br> and Creative Looks Like on <br> TikTok'
        },
        {
          text:'<b>Rabah Rahil</b> - Ecommerce <br> Micro Data Drop + Panel'
        },
        {
          text:'<b>Liz Wilkinson</b> - Macro <br>Trends We All Need To <br> Consider'
        },
        {
          text:'<b>Jordan Rolbrand</b> - Ecom + <br> Affiliates = Scale When You <br> Need It'
        },
        {
          text:'<b>Sara Du</b> - The 2022 and <br> beyond Ecommerce Tech <br> Stack'
        },
        {
          text:'<b>Anoop Grover</b> - Scaling An <br> Enterprise - 0 to 1 and 1 to 5'
        },
        {
          text:'<b>Nick Shackelford</b> - How To <br> Network Like A Pro'
        }
      ]
    }
  },
  methods: {
    scroll(e) {
      e.preventDefault()
      if(!this.wheel) this.sliderAnimate(e.deltaY)
    },
    sliderAnimate(delta){
      this.wheel = true
      if(delta > 0){
        document.querySelector('[data-controls="next"]').click()
        const lastItem = document.getElementById('tns1-item15')
        if(this.goToSchedule){
          document.querySelector('.schedule').scrollIntoView({block: "start", behavior: "smooth"})
        }
        if(lastItem.classList.contains('tns-slide-active')){
          this.goToSchedule = true
        }
      } else if(delta < 0) {
        document.querySelector('[data-controls="prev"]').click()
        this.goToSchedule = false
      } else {
        if (delta > 0){
          document.querySelector('.schedule').scrollIntoView({block: "start", behavior: "smooth"});
        } else {
          document.querySelector('.expirience').scrollIntoView({block: "start", behavior: "smooth"});
        }
      }
      setTimeout(()=>{
        this.wheel = false
      }, 1000);
    }
  },
  mounted(){
    // console.dir(this.$refs.topicsSlider)
  }
}
</script>

<style lang="scss" scoped>
.topics{
  position: relative;
  z-index: 1;
  transition: z-index 0.1s ease 2s;
  @import '@/assets/styles/tiny-slider';
  overflow: hidden;
  padding: 40px 0 40px;
  @media(min-width:768px) {
    padding: 80px 0 80px;
  }
  .corner{
    display: block;
    position: absolute;
    &-one{
      transform: translate(30px, 30px);
      opacity: 0;
      transition: .5s ease 1.5s;
      width: 23px;
      height: 23px;
      top: 0;left: 0;
      @media(min-width:768px){
        width: 30px;
        height: 30px;
      }
    }
  }
  &-title {
    position: relative;
    padding: 23px 0 0 23px;
    @media(min-width: 768px) {
      padding: 30px 0 0 30px;
    }
  }
  h2{
    font-family: 'Monument Extended';
    font-size: 40px;
    line-height: 85%;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 115px;
    position: relative;
    opacity: 0;
    overflow: hidden;
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
    @media(min-width:768px){
      font-size: 55px;
      margin-bottom: 225px;
    }
    @media(min-width:1200px) {
      margin-bottom: 150px;
    }
    @media(min-width:1920px) {
      margin-bottom: 225px;
    }
  }
}
.slider{
  &-wrap{
    opacity: 0;
    transition: 1.5s ease 1.5s;
    position: relative;
    width: 100%;
    user-select: none;
    margin: 0 auto;
    @media(min-width:768px){
      max-width: 585px;
    }
  }
}
.item{
  display: flex;
  justify-content: center;
  height: 300px;
  transition: 1s ease;
  position: relative;
  @media(min-width:768px){
    height: 585px;
  }
  h3 {
    opacity: 0; transition: 0.3s ease;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
    text-transform: uppercase;
    color: #FFFFFF;
    position: absolute;
    top: 0;left: 23px;
    transform: translate(0, -150%);
    @media(min-width:768px){
      transform: translate(0, -150%);
      width: 555px;
      left: 0;
      height: 140px;
      font-size: 30px;
    }
    @media (min-width: 992px) {
      transform: translate(calc(-50% + 115px), -150%);
    }
    @media(min-width:1200px) {
      transform: translate(-50%, -100%);
    }
    @media(min-width:1920px) {
      transform: translate(-50%, -150%);
    }
  }

  &-wrap{
    width: 300px;
    opacity: 0;
    z-index: 1;
    transition: 1s ease, opacity .3s ease;
    border-radius: 0px 40px;
    position: relative;
    margin: 0 auto;
    top: 50%;
    transform: translate(0, -50%);
    &:before{
      content:"";
      background: linear-gradient(90deg, #FE0098 0%, rgba(254, 0, 152, 0) 100%);
      position: absolute;
      left: 0; top: 0;
      width: 100%;
      height: 100%;
      border-radius: 0px 40px;
      z-index: 3;
      transition: opacity 1s ease .5s;
    }
    img{
      display: block;
      width: 100%;
      height: auto;
      position: relative;
      z-index: 2;
      border-radius: 0px 40px;
    }
  }
  .corner{
    &-two, &-three{
      position: absolute;
    }
    &-two{
      z-index: 3;
      left: 20px;
      top: 20px;
      transition: .5s ease .5s;
      height: auto;
      width: 20px;
      @media(min-width:768px){
        width: 30px;
        left: 30px;
        top: 30px;
      }
      path{
        transition: fill .5s ease;
        fill: #fff;
      }
    }
    &-three{
      right: 0;
      opacity: 0;
      top: calc(100% - 30px);
      transition: .5s ease .5s;
      height: 15px;
      width: auto;
      @media(min-width:768px){
        height: 30px;
      }
    }
  }

  &.tns-slide-active{
    .item-wrap{
      width: 250px;
      opacity: 1;
      z-index: 4;
      @media(min-width:768px){
        width: 585px;
      }
      @media(min-width:1200px){
        width: 455px;
      }
      @media(min-width:1920px){
        width: 585px;
      }
      &:before{
        opacity: 0;
      }
    }
    h3 {
      opacity: 1;
    }
    .corner{
      &-two{
        left: -20px;
        top: -20px;
        @media(min-width:768px){
          left: -30px;
          top: -30px;
        }
        path{
          fill: #FE0098;
        }
      }
      &-three{
        opacity: 1;
        top: 100%;
      }
    }
    & + div{
      margin-left: -120px;
      @media(min-width: 768px){
        margin-left: -60px;
      }
      .item-wrap{
        width: 200px;
        opacity: 1;
        z-index: 3;
        @media(min-width: 768px) {
          width: 400px;
        }
      }
      & + div{
        @media(min-width: 768px) {
          margin-left: -205px;
        }
        .item-wrap{
          opacity: 1;
          width: 150px;
          @media(min-width: 768px) {
            width: 300px;
          }
        }
        & + div{
          z-index: 1;
        }
      }
    }
  }
}


.white {
  .topics{
    h2 {
      color: #000;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
    h3 {
      color: #FE0098;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
  }
}
.anim-active{
  z-index: 3;
  h2{
    opacity: 1;
    &:before{
      opacity: 1;
      left: 100%;
    }
  }
  .corner{
    &-one{
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  .slider {
    &-wrap {
      opacity: 1;
    }
  }
}
</style>
<style lang="scss">
.topics{
  .tns{
    &-controls, &-liveregion {
      visibility: hidden;
    }
  }
}
</style>
