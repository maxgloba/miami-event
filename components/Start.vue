<template>
  <section class="start anim">
    <div class="container">
      <div class="start-row">
        <div class="start-left">
          <svg class="corner corner-two"  width="175" height="30" viewBox="0 0 175 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L132.574 0C140.53 0 148.161 3.1607 153.787 8.78679L175 30H0V0Z" fill="#FFE600"/>
          </svg>
          <img src="@/assets/img/mi/JamesNick.png">
          <svg class="corner corner-three"  width="175" height="30" viewBox="0 0 175 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M175 30L42.4264 30C34.4699 30 26.8393 26.8393 21.2132 21.2132L0 0H175V30Z" fill="#FE0098"/></svg>
        </div>
        <div class="start-right">
          <svg class="corner corner-one"  width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0H10C4.47715 0 0 4.47715 0 10V23L23 0Z" fill="#FE0098"/></svg>
          <h2>How <br> Did the <br> Geekouts <br> Start?</h2>
          <h5><span>It Was Built For</span> Learners
            By Learners Leaders
            By Leaders Marketers By Marketers Nice People
            By Nice People</h5>
          <p>Geekout Events is a community of high-level marketers and brand owners created by James Van Elswyk and Nick Shackelford in 2017 with the goal of creating a gathering of people that wanted to “Geek Out” with like-minded individuals. People who are obsessed with the intricate parts of auction- based media and whose loved ones and friends just didn’t “get it” so they were lacking a place to talk shop. We created a community for the people to gather and be passionate nerds over strategies, stats, clicks, and conversions.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.start {
  position: relative;
  z-index: 1;
  transition: z-index 0.1s ease 2s;
  padding: 40px 0;
  @media(min-width: 768px){
    padding: 80px 0;
  }
  &-row {
    display: flex;
    flex-direction: column;
    @media(min-width: 992px){
      flex-direction: row;
      justify-content: space-between;
    }
  }
  &-right {
    position: relative;
    padding-top: 23px;
    margin-bottom: 40px;
    @media(min-width: 768px){
      padding-top: 30px;
    }
    @media(min-width: 992px) {
      flex-basis: 48.75%;
      max-width: 48.75%;
      margin-bottom: 0;
      order: 2;
    }
  }
  &-left {
    position: relative;
    overflow: hidden;
    padding: 30px 0;
    opacity: 0;
    transform: translateX(-50px);
    transition: 1s ease 1s;
    order: 2;
    @media(min-width: 576px) {
      width: 483px;
    }
    @media(min-width: 992px) {
      order: 1;
      flex-basis: 40.25%;
      max-width: 40.25%;
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
      height: 30px;
      left: 0;
      top: 0;
      transform: translateX(-200px);
      transition: transform 2s ease 1.5s;
    }
    &-three{
      right: 0;
      transform: translateY(calc(-50% + 10px));
      transform: translateX(200px);
      transition: transform 2s ease 1.5s;
    }
  }

  h2 {
    text-transform: uppercase;
    font-family: 'Monument Extended';
    font-size: 40px;
    font-weight: 400;
    line-height: 85%;
    letter-spacing: -0.02em;
    text-align: left;
    margin-bottom: 40px;
    padding-left: 23px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    @media(min-width: 768px){
      padding-left: 30px;
      margin-bottom: 60px;
      font-size: 55px;
    }
    @media(min-width: 1200px){
      font-size: 70px;
    }
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
  }
  h5 {
    font-size: 23px;
    font-weight: 700;
    line-height: 26px;
    text-align: left;
    margin-bottom: 20px;
    padding-left: 23px;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    opacity: 0;
    @media(min-width: 768px){
      padding-left: 30px;
      font-size: 30px;
      line-height: 34px;
      margin-bottom: 30px;
    }
    span {
      font-size: 23px;
      font-weight: 500;
      line-height: 26px;
      text-align: left;
      @media(min-width: 768px){
        font-size: 30px;
        line-height: 34px;
      }
    }
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
  }
  p{
    background: #2E0C3F;
    padding: 20px;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    margin: 0;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    @media(min-width: 768px){
      padding: 30px;
    }
    &:before{
      opacity: 0;
      content: "";
      position: absolute;
      left: -100%; top: 50%;
      transform: translateY(-50%);
      width: 200%;
      height: 100%;
      transition: left 1.5s ease 1.5s;
      background: linear-gradient(90deg, rgba(#380F4C, 0) 0%, rgba(#380F4C, 1) 50%, rgba(#380F4C, 1) 100%,);
    }
  }
}

.white{
  .start{
    h2,h5,p{
      color: #000;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
    h5{
      color: #FE0098;
    }
    p {
      background: #fff;
      color: #003CFF;
    }
  }
}

.anim-active{
  z-index: 3;
  h2, h5, p{
    opacity: 1;
    &:before{
      left: 100%;
      opacity: 1;
    }
  }
  .start-left{
    opacity: 1;
    transform: translateX(0);
  }
  .corner{
    &-one{
      transform: translate(0, 0);
      opacity: 1;
    }

    &-two{
      transform: translateX(0);
    }
    &-three {
      transform: translate(0, calc(-50% + 10px));
    }
  }
}
</style>
