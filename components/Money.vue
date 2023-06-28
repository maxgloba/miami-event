<template>
  <section class="money anim">
    <div class="container">
      <div class="money-row">
        <div class="money-left">
          <Anim/>
        </div>
        <div class="money-right">
          <svg class="corner corner-one" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0H10C4.47715 0 0 4.47715 0 10V23L23 0Z" fill="#FE0098" /></svg>
          <h2>No BS, No <br> Hesitation <br> Money <br> back <br> Guarantee</h2>
          <div class="money-text">If you cant make it because of Covid based reasons or just don’t feel you got the value you paid for just ask for a refund and its yours <br><br><br><b>NO</b><br><b>Questions</b><br><b>Asked</b> </div>
          <a  class="money-btn" href="#">BUY NOW</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.money {
  position: relative;
  z-index: 1;
  transition: z-index 0.1s ease 2s;
  padding: 40px 0;
  @media(min-width: 768px) {
    padding: 80px 0;
  }

  &-row {
    @media(min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
    @media(min-width: 1200px) {
      & > .money-left, .money-right {
        flex-basis: 48.75%;
        max-width: 48.75%;
      }
    }
  }

  &-left {
    display: none;
    @media(min-width: 992px) {
      display: flex;
      opacity: 0;
      transition: 1.5s ease 1s;
      transform: translateX(-50px);
    }
  }

  &-right {
    position: relative;
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
      transition: .5s ease 1s;
      @media(min-width: 768px) {
        height: 30px;
        width: 30px;
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
    padding: 23px 0 0 23px;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    opacity: 0;
    &:before {
      opacity: 0;
      content: "";
      position: absolute;
      left: -100%;
      top: 50%;
      transform: translateY(-50%);
      width: 200%;
      height: 100%;
      transition: left 1.5s ease 0.5s;
      background: linear-gradient(90deg, rgba(#380F4C, 0) 0%, rgba(#380F4C, 1) 50%, rgba(#380F4C, 1) 100%,);
    }

    @media(min-width: 768px) {
      padding: 30px 0 0 30px;
      font-size: 55px;
      font-weight: 400;
      letter-spacing: -0.04em;
      margin-bottom: 60px;
    }
    @media(min-width: 1200px) {
      font-size: 70px;
    }
  }

  &-text {
    padding-left: 23px;
    text-transform: uppercase;
    font-size: 23px;
    font-weight: 500;
    line-height: 26px;
    margin-bottom: 40px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    &:before {
      opacity: 0;
      content: "";
      position: absolute;
      left: -100%;
      top: 50%;
      transform: translateY(-50%);
      width: 200%;
      height: 100%;
      transition: left 1.5s ease 1s;
      background: linear-gradient(90deg, rgba(#380F4C, 0) 0%, rgba(#380F4C, 1) 50%, rgba(#380F4C, 1) 100%,);
    }

    @media(min-width: 768px) {
      padding-left: 30px;
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 60px;
    }
  }

  &-btn {
    text-decoration: none;
    display: block;
    width: 100%;
    padding: 23.5px 0;
    background: #003CFF;
    border: 1px solid transparent;
    border-radius: 10px;
    text-transform: uppercase;
    font-family: 'Monument Extended';
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    transition: 0.3s ease;
    @media(min-width: 768px) {
      font-size: 40px;
      line-height: 48px;
      padding: 35.5px 0;
      border-radius: 20px;
    }

    &:hover {
      box-shadow: 0px 5px 50px rgba(0, 60, 255, 0.3);
    }
  }
}

.white {
  .money {
    h2 {
      color: #000;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }

    &-text {
      color: #003CFF;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
  }
}

.anim-active {
  z-index: 3;

  .money-left{
    opacity: 1;
    transform: translateX(0);
  }

  h2, .money-text {
    opacity: 1;
    &:before {
      opacity: 1;
      left: 100%;
    }
  }

  .corner {
    &-one {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
}
</style>
