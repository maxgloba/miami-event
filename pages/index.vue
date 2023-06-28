<template>
  <div class="page page-miami" :class="mode" :style="">
    <Header />
    <Banner/>
    <Shape v-if="loaded" />
    <Metaverse v-if="loaded" />
    <Whatis v-if="loaded" />
    <Points v-if="loaded" />
    <Start v-if="loaded" />
    <Goes v-if="loaded" />
    <Experience v-if="loaded" />
    <Topics v-if="loaded" />
    <Schedule v-if="loaded" />
    <Reviews v-if="loaded" />
    <Money v-if="loaded" />
    <Footer v-if="loaded" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      loaded: false,
      campaignId: 3,
      mode: 'white'
    }
  },
  methods:{
    animation(){
      const anims = document.querySelectorAll('.anim')
      anims.forEach(anim => {
        if(window.scrollY + (window.outerHeight) > anim.offsetTop){
          anim.classList.add('anim-active')
        }
      })
    }
  },
  mounted() {
    setTimeout(()=>{
      this.loaded = true
    }, 1000);
    setTimeout(() => {
      window.onscroll = e => this.animation()
    }, 0)
  },
}
</script>
