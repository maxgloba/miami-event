<template>
  <section class="schedule anim">
    <div class="container">
      <div>
        <div class="schedule-title">
          <svg class="corner corner-one" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0H10C4.47715 0 0 4.47715 0 10V23L23 0Z" fill="#FE0098" /></svg>
          <h2>What’s <br> THE <br> sCHEDULE?</h2>
        </div>

        <div class="schedule-wrap">
          <div class="schedule-item" v-for="(post,index) in posts" :class="`del-${index*70}`">
            <div class="schedule-date">
            <h3 v-html="post.title"></h3>
            <h4 v-html="post.day"></h4>
            </div>
            <ul>
              <svg class="corner corner-two" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 0H10C4.47715 0 0 4.47715 0 10V22L22 0Z" fill="#003CFF" /></svg>
              <li v-for="item in post.list"><b>{{ item.time }}</b> - {{ item.activity }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      posts: [
        {
          title: 'MAY 12th ',
          day:'(Thursday)',
          list: [
            {time: '13.00', activity: 'Airboat Rides',},
            {time: '16.00', activity: 'Gator Time'},
            {time: '19.00', activity: 'Welcome Dinner',}
          ]
        },
        {
          title: 'MAY 13th ',
          day:'(Friday)',
          list: [
            {time: '07.30-08.30', activity: 'Breakfast',},
            {time: '08.30', activity: 'Education'},
            {time: '12.00', activity: 'Lunch'},
            {time: '13.00', activity: 'Education'},
            {time: '18.40', activity: 'Marlins vs Brewers Game Box',}
          ]
        },
        {
          title: 'MAY 14th ',
          day:'(Saturday)',
          list: [
            {time: '08.00', activity: 'Breakfast',},
            {time: '09.00', activity: 'Education'},
            {time: '12.00', activity: 'Lunch'},
            {time: '13.00', activity: 'Education'},
            {time: '17.00', activity: 'Happy Hour'},
            {time: '19.00', activity: 'VIP Dinner'}
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.schedule {
  position: relative;
  z-index: 1;
  transition: z-index 0.1s ease 2s;
  padding: 40px 0 40px;
  @media(min-width: 768px) {
    padding: 80px 0;
  }

  &-title {
    position: relative;
    padding: 23px 0 0 23px;
    @media(min-width: 768px) {
      padding: 30px 0 0 30px;
    }
    @media(min-width: 1200px) {
      max-width: 48.75%;
      margin: 0 0 0 auto;
    }

    h2 {
      position: relative;
      font-family: 'Monument Extended';
      font-size: 40px;
      font-weight: 400;
      line-height: 85%;
      letter-spacing: -0.02em;
      text-align: left;
      margin-bottom: 34px;
      text-transform: uppercase;
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
        font-size: 55px;
        margin-bottom: 60px;
      }
      @media(min-width: 1200px) {
        font-size: 70px;
      }
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

    &-two {
      left: 0;
      top: 0;
      height: 23px;
      width: 23px;
      @media(min-width: 768px) {
        height: 30px;
        width: 30px;
      }
    }
  }

  &-item {
    margin-bottom: 40px;
    transition: opacity 1.5s ease 1s, transform 1.5s ease 1s;
    opacity: 0;
    transform: translateY(50px);
    &:last-child {
      margin-bottom: 0;
    }

    @media(min-width: 768px) {
      margin-bottom: 60px;
      display: flex;
      & > ul, .schedule-date {
        flex: 1 1 48.75%;
        justify-content: space-between;
        margin-right: 2.5%;
      }

      & > ul {
        margin-right: 0;
      }
    }

    &:hover {
      .schedule-date {
        background: #003CFF;
      }
    }
  }

  &-date {
    background: #2E0C3F;
    border-radius: 20px;
    padding: 30px;
    margin-bottom: 20px;
    transition: 0.3s ease;
    @media(min-width: 768px) {
      margin-bottom: 0;
      padding: 40px;
    }
    h3 {
      font-family: 'Monument Extended';
      font-size: 30px;
      font-weight: 400;
      line-height: 36px;
      margin-bottom: 20px;
      text-align: left;
      @media(min-width: 992px) {
        margin-bottom: 30px;
        font-size: 45px;
        line-height: 60px;
      }
      @media(min-width: 1200px) {
        font-size: 50px;
      }
    }
    h4 {
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;
      text-transform: uppercase;
      @media(min-width: 992px) {
        font-size: 30px;
        line-height: 34px;
      }
    }
    h5{
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;
      @media(min-width: 992px) {
        font-size: 30px;
        line-height: 34px;
      }
    }
  }

  ul {
    list-style: none;
    padding: 23px 0 0 23px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(min-width: 768px) {
      padding:30px 0 0 30px;
      border-bottom: 1px solid #ffffff;
    }

    li {
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      text-align: left;
    }
  }
}

.white {
  .schedule {
    h2 {
      color: #000;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }
    .schedule-item{
      &:hover {
        .schedule-date {
          color: #ffffff;
          background: #003CFF;        }
      }
    }
    .schedule-date {
      color: #003CFF;
      background: #ffffff;
    }

    ul {
      @media(min-width: 768px) {
        border-bottom: 1px solid #003CFF;
      }
    }

    li {
      color: #000000;
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
  .schedule-item {
    opacity: 1;
    transform: translateY(0);
  }
  .corner{
    &-one{
      transform: translate(0, 0);
      opacity: 1;
    }
  }
}
</style>












