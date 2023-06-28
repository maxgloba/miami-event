<template>
  <section class="points anim">
    <div class="container">
      <div class="points-wrap">
        <svg class="corner corner-one" width="23" height="23" viewBox="0 0 23 23" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M23 0H10C4.47715 0 0 4.47715 0 10V23L23 0Z" fill="#003CFF" />
        </svg>

        <div class="points-item" v-for="(point, index) in points"  :class="`del-${index*50}`">
          <h3 v-html="point.title"></h3>
          <p v-html="point.text" :class="`del-${index*75}`"></p>
        </div>

        <svg class="corner corner-two" width="22" height="22" viewBox="0 0 22 22" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M0 22H12C17.5228 22 22 17.5228 22 12V0L0 22Z" fill="#003CFF" />
        </svg>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      points: [
        {
          title: 'NOEGO',
          text: 'Beginners mind from start no finish? <br> “you want to be rich? <br> or do you want to be right?”'
        },
        {
          title: 'LAPTOPLEARNING',
          text: 'Nothing is better than attendees and speakers have laptops out and are shoulder to shoulder showing and sharing'
        },
        {
          title: 'NODOUCHEBAGS',
          text: 'NO Explanation <br> needed'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.points {
  padding: 40px 0;
  @media(min-width: 768px) {
    padding:80px 0;
  }
  .corner {
    display: block;
    position: absolute;
    height: 23px;
    width: 23px;
    @media(min-width: 768px) {
      height: 30px;
      width: 30px;
    }

    &-one {
      left: 0;
      top: 0;
      transform: translate(30px, 30px);
      opacity: 0;
      transition: .5s ease 1.5s;
    }

    &-two {
      right: 0;
      bottom: 0;
      transform: translate(-30px, -30px);
      opacity: 0;
      transition: .5s ease 1.5s;
    }
  }

  &-wrap {
    position: relative;
    padding: 23px 0;
    @media(min-width: 768px) {
      padding: 30px 0;
    }
    @media(min-width: 992px) {
      display: flex;
    }
  }

  &-item {
    margin-bottom: 50px;
    padding: 0 20px;
    opacity: 0;
    transition:  opacity 1s ease, transform 1s ease;
    transform: translateY(50px);
    &:nth-child(4){
      margin-bottom: 0;
    }

    @media(min-width: 992px) {
      flex-basis: 31.69%;
      max-width: 31.69%;
      margin-bottom: 0;
      margin-right: 2.5%;
      &:nth-child(4){
        margin-right: 0
      }
    }
  }

  h3 {
    font-family: 'Monument Extended';
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    text-align: center;
    margin-bottom: 20px;
    transition: 1s ease;
    opacity: 0;
    transform: translateY(50px);
    @media(min-width: 1200px) {
      font-size: 30px;
      line-height: 36px;
      margin-bottom: 30px;
    }
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    margin: 0;
    transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
    opacity: 0;
    transform: translateY(50px);
    @media(min-width: 768px) {
      width: 380px;
      margin: 0 auto;
      font-size: 18px;
      line-height: 20px;
    }
    @media(min-width:992px) {
      width: 100%;
      margin: 0;
    }
  }
}
.white{
  .points{
    h3{
      color: #000;
    }
    p{
      color: #000;
    }
  }
}

.anim-active{
  .points-item, h3, p{
    opacity: 1;
    transform: translateY(0);
  }
  .corner{
    &-one,&-two{
      transform: translate(0, 0);
      opacity: 1;
    }
  }
}
</style>
