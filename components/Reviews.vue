<template>
  <section class="reviews anim">
    <div class="container">
      <div class="reviews-title">
        <svg class="corner corner-one" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0H10C4.47715 0 0 4.47715 0 10V23L23 0Z" fill="#FFE600" /></svg>
        <h2>What <br> have past <br> attendees <br> said?</h2>
      </div>

      <div class="reviews-wrap">
        <div class="reviews-item" v-for="(post,index) in posts"  :class="`del-${index*50}`">
          <div class="reviews-author">
            <img :src="require(`@/assets/img/mi/reviews/reviews-${index + 1}.png`)">
            <div>
              <h3 v-html="post.name"></h3>
              <Stars/>
            </div>
          </div>
          <div class="reviews-comment" v-html="post.comment" :class="`del-${index*65}`"></div>
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
          name: 'Paul <br> Jeyapal',
          comment: '“For me, it\'s being in the room with like, eight players man. Being in a room with media buyers that you know are spending 10 grand plus a day, 20 grand plus a day, and just bouncing ideas, but also the speakers. Starting this morning, watching the YouTube presentation, the influencer presentation. Even though I\'m not actively on those platforms, it\'s really insightful because these are other channels. I was taking tons of notes, so I\'ve got a lot of stuff that I can implement, and what I\'m gonna be doing when I get home.”'
        },
        {
          name: 'Tyler <br> Pack',
          comment: '“It\'s hard to put into words, I mean, the caliber of people, and the presentations and the speakers is just something that I haven\'t had at any other event, really. The reason why I came here was that we\'re running e-comm brands and we\'re running just Facebook ads. And I wanted to market an affiliate and this has been perfect. I\'m coming back, hundred percent I\'m coming back.”'
        },
        {
          name: 'Matt <br> Orlic',
          comment: '“The group is truly unique in terms of the skillsets, and I think the networking is just phenomenal, probably one of the best events I’ve definitely been to from that perspective, and on top of it, the content is also extremely valuable.”'
        },
        {
          name: 'Eric <br> Toz',
          comment: '“I like that it was very tactical like here\'s what you need to do to get ready for Q4. That was super helpful. I was super engaged. Usually, I tune out a bit at some events or from watching people speak. I\'ll just tune out, but I was super engaged the whole time, and it was a good rhythm. It was back to back to back to back to back, no b.s., just learn, learn, learn, learn, learn, which I really appreciated And then the people. The networking\'s great, I mean, it\'s amazing. And if you don\'t know the GeekOut people, you need to add them to your network, yeah.”'
        },
        {
          name: 'Kyle <br> Hermann',
          comment: '“It\'s been great, the networking opportunity. It\'s been crazy meeting these people. It\'s a much higher level than I\'m used to. I go to a lot of events, and it\'s been really impressive what they\'ve been able to pull off at this price point. it\'s really community-based. It almost feels like a family that you never had for a few days so it\'s been great.”'
        },
        {
          name: 'Justin <br> Dallas',
          comment: '“I have never taken so many notes at an event before. This community is a collection of experts. If you\'re into media buying, e-commerce, or direct response then you NEED to attend GeekOut. What really amazed me was how willing everyone was to share the personal strategies they use in their own businesses. No superficial fluff here.”'
        },
        {
          name: 'Peter <br> Kell',
          comment: '“If you\'re not connecting with people, you\'re crazy. To see what everyone else is doing and to learn about the other opportunities, you\'d be crazy not to join one of these things. I mean, how good are you at influencers? How good are you at YouTube? How good are you at Facebook? How good are you on Instagram? There\'s plenty to learn in this space. There\'s plenty, like, the opportunity for you to grow and be a better marketer and a better businessman.”'
        },
        {
          name: 'Wendi <br> Borlabi',
          comment: '“This is a really great reviews. I feel very, very fortunate to be able to do things that are outside my normal comfort zone. We wanna learn and stretch and be able to come and talk to a different population about performance, I think was very fortunate for me, and I always say that performance is performance, and this is a really great example.”'
        },
        {
          name: 'Brad <br> Vuckovich',
          comment: '“It\'s amazing, not just because of the people that you meet here, but also about the whole reviews. It\'s all about networking, it\'s all about sharing.”'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.reviews {
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
  }
  h2 {
    font-family: 'Monument Extended';
    font-size: 40px;
    font-weight: 400;
    line-height: 85%;
    letter-spacing: -0.02em;
    margin-bottom: 40px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    text-transform: uppercase;
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

    @media (min-width: 768px) {
      font-size: 55px;
      margin-bottom: 80px;
    }
    @media(min-width:1200px){
      font-size: 70px;
    }
    }

  &-wrap {
    @media (min-width: 992px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  &-item {
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1.5s ease 0.5s, transform 1.5s ease 0.5s;

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: 992px) {
      position: relative;
      width: 28.7%;
      margin-bottom: 80px;
    }
    &:hover {
      img {
        filter: none;
      }
    }
  }

  &-author {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
    @media (min-width: 992px) {
      margin-bottom: 30px;
    }

    img {
      filter: grayscale(1);
      transition: 0.3s ease;
      @media (max-width: 767px) {
        flex-basis: 31.57%;
        max-width: 31.57%;
      }
        @media (min-width: 992px) {
        flex-basis: 33.72%;
        max-width: 33.72%;
      }
    }

    div {
      flex-basis: 65.8%;
      max-width: 65.8%;
      @media (min-width: 768px) {
        flex-basis: 80%;
        max-width: 80%;
      }
      @media (min-width: 992px) {
        flex-basis: 56.39%;
        max-width: 56.39%;
      }
    }
  }

  h3 {
    font-family: 'Monument Extended';
    font-size: 23px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
    margin-bottom: 31px;
    @media (min-width: 768px) {
      margin-bottom: 27px;
    }
    @media (min-width: 992px) {
      margin-bottom: 10px;
    }
    @media (min-width: 1200px) {
      margin-bottom: 27px;
    }
  }

  &-comment {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    transition: opacity 1s ease, transform 1s ease;
    opacity: 0;
    transform: translateY(50px);
    @media (min-width: 1200px) {
      width: 278px;
    }
  }
}

.white {
  .reviews {
    h2 {
      color: #000;
      &:before {
        background: linear-gradient(90deg, rgba(#DDE2F0, 0) 0%, rgba(#DDE2F0, 1) 50%, rgba(#DDE2F0, 1) 100%,);
      }
    }

    h3 {
      color: #000000;
    }

    &-comment {
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
  .corner{
    &-one{
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  .reviews-item {
    opacity: 1;
    transform: translateY(0);
  }
  .reviews-comment{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
