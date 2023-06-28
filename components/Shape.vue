<template>
  <div class="shape-wrap">
    <div class="shape shape-blue"></div>
    <div class="shape shape-red"></div>
    <div class="shape shape-yellow"></div>
    <div class="shape shape-red"></div>
    <div class="shape shape-blue"></div>
    <div class="shape shape-yellow"></div>
    <div class="shape shape-blue"></div>
    <div class="shape shape-red"></div>
    <div class="shape shape-blue"></div>
  </div>
</template>
<style lang="scss" scoped>
.page-livestream{
  .shape:nth-child(9){
    display: none;
  }
}
  .shape{
    position: absolute;
    width: 200px;
    height: 200px;
    left: 0;
    top: 0;
    filter: blur(100px);
    z-index: 2;
    animation: shape 30s infinite;
    opacity: 0;
    transform: scale(0);
    @for $i from 1 through 9 {
      $index: $i;
      $position: $i * 10%;
      &:nth-child(#{$i}) {
        top: #{$position};
        animation-delay: #{$index}s;
      }
    }
    &-blue{
      background: #003CFF;
    }
    &-red{
      background: #FE0098;
    }
    &-yellow {
      background: #FFE600;
    }
  }
  @keyframes shape {
    0%, 100%  {
      opacity: 1;
      left: 0;
      transform: translateY(0%) scale(1);
    }
    25%, 75%  {
      left: calc(100% - 200px);
      transform: translateY(150%) scale(.5);
    }
    50%  {
      left: 0;
      transform: translateY(300%) scale(1);
    }
  }
</style>
