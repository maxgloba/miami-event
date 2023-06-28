<template>
  <section class="strips">
    <div class="strips-inner">
      <div class="strips-item">
        <p>Buy Livestream Ticket Now!</p>
        <p>Buy Livestream Ticket Now!</p>
        <p>Buy Livestream Ticket Now!</p>
        <p>Buy Livestream Ticket Now!</p>
        <p>Buy Livestream Ticket Now!</p>
        <p>Buy Livestream Ticket Now!</p>
        <p>Buy Livestream Ticket Now!</p>
        <p>Buy Livestream Ticket Now!</p>
        <p>Buy Livestream Ticket Now!</p>
      </div>
    </div>
  </section>
</template>
<script>
import gsap from 'gsap'
export default {
  methods: {
    animatestrips() {
      const strips = document.querySelector('.strips'),
        stripsItem = document.querySelector('.strips-item'),
        stripsInner = document.querySelector('.strips-inner'),
        stripsCount = strips.offsetWidth / stripsItem.offsetWidth

      for (let i = 0; i <= stripsCount; i++) {
        const stripsItemClone = stripsItem.cloneNode(true)
        stripsInner.appendChild(stripsItemClone)
      }

      const stripsInnerClone = stripsInner.cloneNode(true)
      strips.appendChild(stripsInnerClone)

      let progress = 0

      this.step = function (time, delta) {
        if (Math.abs(progress) > stripsInner.offsetWidth) progress = 0
        progress += delta * 0.1

        stripsInner.style.transform = `translate3d(-${progress}px, 0 , 0)`
        stripsInnerClone.style.transform = `translate3d(-${progress}px, 0 , 0)`
      }
      gsap.ticker.add(this.step)
    },
  },
  mounted() {
    this.animatestrips()
  },
  destroyed() {
    gsap.ticker.remove(this.step)
  },
}
</script>
<style lang="scss" scoped>
.strips {
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  white-space: nowrap;
  cursor: default;
  align-items: center;
  user-select: none;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  &-inner {
    display: inline-block;
  }
  &-item {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff;
    display: inline-block;
    p {
      font-family: 'Monument Extended';
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      display: inline-block;
      vertical-align: middle;
      padding: 16px 12px;
      text-transform: uppercase;
      color: #FE0098;
      margin: 0;
      background: rgb(255,255,255);
      background: linear-gradient(90deg, rgba(255,255,255,0) 15%, rgba(255,230,0,1) 50%, rgba(255,255,255,0) 85%);
      @media(min-width:768px){
        font-size: 23px;
        line-height: 28px;
        padding: 16px 76.5px;
      }
    }
  }
}

.banner {
  .strips{
    position: absolute;
    bottom: 20px;
    @media(max-width: 767px){
      bottom: 40px;
    }
  }
}
</style>
