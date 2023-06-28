<template>
  <div class="countdown">
    <p>
      {{ currentDate.days < 10 ? '0' + currentDate.days : currentDate.days
      }}<span>d</span>
    </p>
    <p>
      {{ currentDate.hours < 10 ? '0' + currentDate.hours : currentDate.hours
      }}<span>h</span>
    </p>
    <p>
      {{
        currentDate.minutes < 10
          ? '0' + currentDate.minutes
          : currentDate.minutes
      }}<span>m</span>
    </p>
    <p>
      {{
        currentDate.seconds < 10
          ? '0' + currentDate.seconds
          : currentDate.seconds
      }}<span>s</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: {},
      priceRanges: {
        2900: {
          start: '00:00:00, 18.03.2022',
          end: '23:59:59, 24.03.2022',
          link: '/checkout'
        },
        3000: {
          start: '00:00:00, 25.03.2022',
          end: '23:59:59, 31.03.2022',
          link: '/checkout'
        },
        3100: {
          start: '00:00:00, 01.04.2022',
          end: '23:59:59, 08.04.2022',
          link: '/checkout'
        },
        3200: {
          start: '00:00:00, 08.04.2022',
          end: '23:59:59, 15.04.2022',
          link: '/checkout'
        },
        3300: {
          start: '00:00:00, 15.04.2022',
          end: '23:59:59, 21.04.2022',
          link: '/checkout'
        },
        3400: {
          start: '00:00:00, 22.04.2022',
          end: '23:59:59, 28.04.2022',
          link: '/checkout'
        },
        3500: {
          start: '00:00:00, 29.04.2022',
          end: '23:59:59, 14.05.2022',
          link: '/checkout'
        }
      }
    }
  },
  mounted() {
    const keys = Object.keys(this.priceRanges)
    keys.forEach((key) => {
      const startDate = this.$moment(
        this.priceRanges[key].start,
        'HH:mm:ss, DD.MM.YYYY'
      )
      const endDate = this.$moment(
        this.priceRanges[key].end,
        'HH:mm:ss, DD.MM.YYYY'
      )
      const currentDate = this.$moment()
      if (
        (this.$moment(currentDate).isSame(startDate) ||
          this.$moment(currentDate).isAfter(startDate)) &&
        (this.$moment(currentDate).isBefore(endDate) ||
          this.$moment(currentDate).isSame(endDate))
      ) {
        localStorage.ticketPrice = key
        this.timer(startDate, endDate)
      }
    })
  },
  methods: {
    timer(start, end) {
      const x = setInterval(() => {
        const currentDate = this.$moment()
        const distanceMoment = end.diff(currentDate)
        if (distanceMoment > 0) {
          this.currentDate = {
            days: Math.floor(distanceMoment / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distanceMoment % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor(
              (distanceMoment % (1000 * 60 * 60)) / (1000 * 60)
            ),
            seconds: Math.floor((distanceMoment % (1000 * 60)) / 1000),
          }
        } else {
          clearInterval(x)
        }
      }, 1000)
    },
  },
}
</script>

<style scoped lang="scss">
.countdown {
  display: flex;
  font-family: 'Spartan';
  color: rgb(255, 255, 255);
  z-index: 5;
  p {
    margin: 0;
    font-weight: 400;
    font-size: 23px;
    line-height: 1.2;
    letter-spacing: 0.095em;
    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 35px;
    }
    span {
      margin-right: 10px;
      font-size: 18px !important;
      font-weight: 300;
      font-size: 30px;
    }
  }
}
.white {
  .countdown {
    p {
      color: #000;
    }
  }
}
</style>
