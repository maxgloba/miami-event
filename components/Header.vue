<template>
  <header class="header" id="top">
    <div class="container">
      <div class="header-date">may 12-14</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header{
  position: absolute;
  left: 0; top: 15px;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  @media(min-width:1200px){
    padding-left: 30px;
    padding-right: 30px;
    top: 30px;
  }
  &-date {
    font-family: 'Monument Extended';
    font-size: 23px;
    font-weight: 400;
    line-height: 28px;
    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 36px;
      br {
        display: none;
      }
    }
  }
}
</style>
