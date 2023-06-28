<template>
  <section class="goes anim">
    <div class="container">
      <div class="goes-title">
        <svg class="corner corner-one" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0H10C4.47715 0 0 4.47715 0 10V23L23 0Z" fill="#FFE600" /></svg>
        <h2>Who<br> Goes To<br> Geekouts?</h2>
      </div>
      <h3 class="anim"><span>#Learners</span> <span>#Ballers </span> <span>#Founders</span></h3>
      <ul class="anim">
        <li class="del-20">
          <svg width="300" height="300" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle r="90" cx="50%" cy="50%" fill="transparent" stroke="#2E0C3F" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
            <circle class="bar" r="90" cx="50%" cy="50%" fill="transparent" stroke="#003CFF" stroke-linecap="round" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
          </svg>
          <span class="num after-percent" data-num="80">0</span>
          <span class="text del-50">Founders or main decision makers of the brands</span>
        </li>
        <li class="del-50">
          <svg width="300" height="300" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle r="90" cx="50%" cy="50%" fill="transparent" stroke="#2E0C3F" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
            <circle class="bar" r="90" cx="50%" cy="50%" fill="transparent" stroke="#FE0098" stroke-linecap="round" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
          </svg>
          <span class="num after-percent" data-num="90">0</span>
          <span class="text del-100">Of the audience is Ecommerce focused on Facebook and instagram as the main traffic channel with Snapchat, Youtube, and Amazon close behind</span>
        </li>
        <li class="del-70">
          <svg width="300" height="300" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle r="90" cx="50%" cy="50%" fill="transparent" stroke="#2E0C3F" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
            <circle class="bar" r="90" cx="50%" cy="50%" fill="transparent" stroke="#FFE600" stroke-linecap="round" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
          </svg>
          <span class="num before-dollar after-million" data-num="37">0</span>
          <span class="text del-150">Average yearly revenue per brand that attended</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    dataNum() {
      const dataNums = document.querySelectorAll('[data-num]')
      dataNums.forEach(dataNum => {
        dataNum.previousElementSibling.children[1].style.strokeDashoffset = ((100 - 0) / 100) * (Math.PI * (90 * 2))
        const end = dataNum.dataset.num
        if (0 === end) return
        let range = end - 0,
            current = 0,
            increment = end > 0 ? 1 : -1,
            stepTime = Math.abs(Math.floor(10000 / range)),
            timer = setInterval(() => {
              current += increment
              dataNum.innerHTML = current
              dataNum.previousElementSibling.children[1].style.strokeDashoffset = ((100 - current + 10) / 100) * (Math.PI * (90 * 2))
              if (current == end) {
                clearInterval(timer)
              }
            }, stepTime)
      })
    }
  },
  mounted() {
    this.dataNum()
  }
}
</script>
<style lang="scss" scoped>
.goes {
  position: relative;
  z-index: 1;
  transition: z-index 0.1s ease 2s;
  padding: 40px 0;
  @media(min-width: 768px) {
    padding: 80px 0;
  }

  &-title {
    position: relative;
    padding: 23px 0 0 23px;
    @media(min-width: 768px) {
      padding: 30px 0 0 30px;
    }

    h2 {
      font-family: 'Monument Extended';
      font-size: 40px;
      line-height: 85%;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
      opacity: 0;
      @media(min-width: 768px) {
        font-size: 55px;
        margin-bottom: 60px;
      }
      @media(min-width: 1200px) {
        font-size: 70px;
      }

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
    }
  }

  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 40px;
    padding-left: 23px;
    @media(min-width: 768px) {
      margin-bottom: 60px;
      padding-left: 30px;
    }

    span {
      display: inline-block;
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
    }
  }

  .corner {
    display: block;
    position: absolute;

    &-one {
      left: 0;
      top: 0;
      transform: translate(30px, 30px);
      opacity: 0;
      transition: .5s ease 1.5s;
      @media(min-width: 768px) {
        height: 30px;
        width: 30px;
      }
    }
  }

  ul {
    list-style: none;
    @media(min-width: 992px) {
      display: flex;
      justify-content: center;
    }

    li {
      margin-bottom: 40px;
      color: #FFFFFF;
      position: relative;
      transition: opacity 1s ease;
      opacity: 0;

      &:last-child {
        margin-bottom: 0;
      }

      @media(min-width: 992px) {
        max-width: 380px;
        margin-bottom: 0;
      }

      span {
        display: block;
      }

      svg {
        width: 250px;
        height: 250px;
        display: block;
        margin: 0 auto;

        circle {
          stroke-dashoffset: 0;
          transition: stroke-dashoffset .5s ease;
          stroke-width: 10px;
        }

        .bar {
          stroke-width: 48px;
          transform: rotate(90deg);
          transform-origin: center;
          @media (min-width: 768px) {
            stroke-width: 60px;
          }
        }
      }
    }
  }

  .num {
    display: block;
    position: absolute;
    left: 0;
    top: 115px;
    width: 100%;
    text-align: center;
    font-family: 'Monument Extended';
    font-size: 30px;
    text-transform: uppercase;
  }

  .text {
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    padding: 0 30px;
    margin-top: 20px;
    transition: opacity 1s ease, transform 1s ease;
    opacity: 0;
    transform: translateY(50%);
    @media(min-width: 768px) {
      margin-top: 30px;
    }
  }

  .after {
    &-percent {
      &:after {
        font-size: 18px;
        margin-left: 10px;
        content: "%";
      }
    }

    &-million {
      &:after {
        text-transform: lowercase;
        content: "m";
      }
    }
  }

  .before {
    &-dollar {
      &:before {
        font-size: 18px;
        margin-right: 10px;
        content: "$";
      }
    }
  }
}

.white {
  h2 {
    color: #000;

    &:before {
      background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
    }
  }

  h3 {
    color: #003CFF;

    span {
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
  }

  h5 {
    color: #FE0098;
  }

  .text {
    color: #000;
  }

  ul {
    li {
      color: #000;

      svg {
        circle {
          &:first-child {
            stroke: #FCFCFC;
          }
        }
      }
    }
  }
}

.anim-active {
  z-index: 3;

  h2 {
    opacity: 1;

    &:before {
      opacity: 1;
      left: 100%;
    }
  }

  h3 {
    span {
      opacity: 1;

      &:before {
        opacity: 1;
        left: 100%;
      }
    }
  }

  .corner {
    &-one {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  ul {
    li {
      opacity: 1;
      transform: translateX(0);
    }

    .text {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
