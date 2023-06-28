<template>
  <section class="sticky">
    <div class="container">
      <div class="sticky-wrap">
        <!-- <Countdown/> -->
        <!-- <div class="sticky-text">Time of next price raise. <b>Ticket price goes up every Friday!</b></div> -->
<!--        <div class="sticky-text">We are all out of tickets 😟 to have a taste of it, grab a Livestream ticket!</div>-->
        <div class="sticky-text">We are all out of tickets 😟</div>
        <!-- <NuxtLink to="/checkout" class="sticky-btn">Buy Now</NuxtLink> -->
<!--        <a href="#" class="sticky-btn">Buy Now</a>-->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('scroll', this.progresScroll)
  },
  methods: {
    progresScroll() {
      const scroll =
          document.body.scrollTop || document.documentElement.scrollTop
      const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      const scrolled = (scroll / height) * 100
      if (this.$el !== null) {
        if (scrolled > 1) {
          this.$el.style.bottom = '0'
          this.$el.style.transition = 'all 0.3s ease'
        } else {
          this.$el.style.bottom = '-100%'
          this.$el.style.transition = 'all 0.3s ease'
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.sticky {
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 20px 0;
  transition: all 0.3s ease-in;
  box-shadow: 0 0 16px rgba(0, 0, 0, .4);
  background: #380F4C;
  overflow: hidden;
  @media (min-width: 768px) {
    padding: 13px 0;
  }

  .container {
    position: relative;
    z-index: 5;
    @media (max-width: 768px) {
      padding: 0 33px;
    }

    &:before {
      content: '';
      width: 100px;
      height: 100px;
      filter: blur(50px);
      background: #003CFF;
      position: absolute;
      left: 50%;
      top: 0;
      z-index: 2;
      transform: translate(-50%, -50%);
      @media (min-width: 768px) {
        left: 0;
        transform: translate(50%, -50%);
      }
      @media (min-width: 1200px) {
        width: 244px;
        height: 224px;
        transform: translate(0, -50%);
        filter: blur(150px);
      }
    }
  }

  &-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    @media (min-width: 768px) {
      // justify-content: space-between;
      flex-direction: row;
    }
  }

  &-text {
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    margin: 10px 0;
    z-index: 5;
    @media (min-width: 768px) {
      margin: 0 15px;
    }

    b {
      color: #FE0098;
    }
  }

  &-btn {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    color: #fff;
    background: #003CFF;
    padding: 20px 0;
    border-radius: 10px;
    border: 1px solid transparent;
    font-family: 'Monument Extended';
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    width: 100%;
    z-index: 5;
    @media (min-width: 768px) {
      width: 175px;
      padding: 8.5px 0;
      font-size: 15px;
      line-height: 18px;
    }
  }
}

.white {
  .sticky {
    background: #DDE2F0;

    &-text {
      color: #FE0098;
    }

    .container {
      &:before {
        background: #FFE600;
      }
    }
  }
}
</style>
