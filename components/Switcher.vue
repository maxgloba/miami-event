<template>
  <div class="switcher" @click="changeMode" :class="(this.$parent.$parent.mode === 'purple') ? 'switcher-purple':'switcher-white'">
    <div class="switcher-slide"></div>
  </div>
</template>
<script>
export default{
  methods: {
    changeMode(){
      this.$parent.$parent.mode = (this.$parent.$parent.mode === 'purple') ? 'white':'purple';
      localStorage.mode = this.$parent.$parent.mode;
    }
  }
}
</script>
<style lang="scss" scoped>
.switcher{
  width: 90px;
  height: 40px;
  background: #FE0098;
  border-radius: 40px;
  cursor: pointer;
  transition: .5s ease-in-out;
  margin-left: 10px;
  position: absolute;
  top: 0; right: 15px;
  @media(min-width:768px){
    position: fixed;
    top: 15px;
  }
  &:before, &:after{
    content:"";
    width: 5px;
    height: 15px;
    position: absolute;
    z-index: 1;
    border-radius: 5px;
    top: 50%;
    transform: translate(0, -50%);
  }
  &:before{
    background: #FFE600;
    left: 17px;
    z-index: 5;
  }
  &:after{
    background: #fff;
    right: 17px;
    z-index: 5;
  }
  &-slide{
    width: 36px;
    height: 36px;
    border-width: 8px;
    border-style: solid;
    position: absolute;
    z-index: 2;
    border-radius: 50%;
    box-sizing: border-box;
    top: 50%; left: 50%;
    transition: .5s ease-in-out;
  }
  &-white{
    background: #003CFF;
    & > div{
      transform: translate(8px, -50%);
      background: #FFE600;
      border-color: #FFE600;
    }
  }
  &-purple{
    background: #FE0098;
    & > div{
      transform: translate(calc(-100% - 8px), -50%);
      background: #fff;
      border-color: #fff;
      &:hover{
        border-color: #fff;
      }
    }
  }
}

.replay-header {
  .switcher {
    @media(max-width:767px) {
      top: 76px;
      right: 10px;
    }
    @media(min-width:768px){
      top: 50px;
      z-index: 4;
    }
  }
}
</style>
