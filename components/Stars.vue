<template>
  <div class="star">
    <ul class="star-rating">
      <li class="star-f">
        <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5001 0L22.4141 10.6536L34.0648 12.035L25.4511 20.0007L27.7376 31.508L17.5001 25.7775L7.26248 31.508L9.54898 20.0007L0.935303 12.035L12.586 10.6536L17.5001 0Z" fill="#FFE600"/>
      </svg>
      </li>
      <li class="star-f">
        <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5001 0L22.4141 10.6536L34.0648 12.035L25.4511 20.0007L27.7376 31.508L17.5001 25.7775L7.26248 31.508L9.54898 20.0007L0.935303 12.035L12.586 10.6536L17.5001 0Z" fill="#FFE600"/>
        </svg>
      </li>
      <li class="star-f">
        <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5001 0L22.4141 10.6536L34.0648 12.035L25.4511 20.0007L27.7376 31.508L17.5001 25.7775L7.26248 31.508L9.54898 20.0007L0.935303 12.035L12.586 10.6536L17.5001 0Z" fill="#FFE600"/>
        </svg>
      </li>
      <li class="star-f">
        <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5001 0L22.4141 10.6536L34.0648 12.035L25.4511 20.0007L27.7376 31.508L17.5001 25.7775L7.26248 31.508L9.54898 20.0007L0.935303 12.035L12.586 10.6536L17.5001 0Z" fill="#FFE600"/>
        </svg>
      </li>
      <li class="star-f">
        <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5001 0L22.4141 10.6536L34.0648 12.035L25.4511 20.0007L27.7376 31.508L17.5001 25.7775L7.26248 31.508L9.54898 20.0007L0.935303 12.035L12.586 10.6536L17.5001 0Z" fill="#FFE600"/>
        </svg>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.star {
  &-rating {
    display: flex;
    li {
      display: block;
      position: relative;
      svg {
        width: 33.13px;
        height: 31.51px;
        @media (min-width: 992px) {
          width: 29px;
          height: 37px;
        }
        @media (min-width: 1200px) {
          width: 34.74px;
          height: 33px;
        }
      }
    }
  }
  &-f{
    margin-right: 2px;
    &:last-child{
      margin-right: 0;
    }
  }
}

.page-sdreplays {
  .star {
    &-rating {
      li {
        margin-right: 9px;
        @media (min-width: 768px) {
          margin-right: 4px;
        }

        svg {
          width: 16px;
          height: 16px;
          @media (min-width: 768px) {
            width: 26px;
            height: 25px;
          }

          path {
            fill: #1DCD68;
          }
        }
      }
    }
  }
}
</style>
