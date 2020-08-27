<template>
  <b-container fluid class="technologies-main" id="tech">
    <b-row class="technologies-main__row">
      <b-col class="technologies-main__col" cols="12">
        <div class="technologies-main__wrapper">
          <div>
            <h1 id="techHeaderText">Technologies i enjoy using</h1>
          </div>
          <b-row class="d-flex justify-content-center align-items-center">
            <b-col
              class="single-tech__wrapper d-flex justify-content-center align-items-center"
              cols="4"
              v-for="thumb in thumbs"
              :key="thumb.id"
            >
              <img class="single-tech__thumbnail" :src="thumb.url" alt />
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.technologies-main {
  @media screen and (min-width: 320px) {
    height: 800px;
    .technologies-main__row {
      .technologies-main__wrapper {
        .row {
          height: 100%;
          width: 80%;
        }
        h1 {
          font-size: 2rem;
          text-align: center;
        }
        .single-tech__wrapper {
          height: 60px;
          .single-tech__thumbnail {
            height: 100%;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    height: 900px;
    .technologies-main__row {
      .technologies-main__wrapper {
        h1 {
          font-size: 2.5rem;
        }
        .single-tech__wrapper {
          margin-bottom: 40px;
          height: 120px;
          .single-tech__thumbnail {
            transform: scale(0.8);
          }
        }
      }
    }
  }
  .technologies-main__row {
    height: 100%;
    .technologies-main__wrapper {
      height: 100%;
      display: grid;
      grid-template-rows: 20% 80%;
      justify-items: center;
      align-items: center;
      .single-tech__thumbnail{
        position: relative;
      }
    }
  }
  h1 {
    color: #000000;
  }
  .row {
    flex-wrap: wrap !important;
  }
}
</style>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  data() {
    return {
      thumbs: [
        {
          id: 1,
          url: require("../../assets/img/tech_thumbs/vuejs-original.svg")
        },
        {
          id: 2,
          url: require("../../assets/img/tech_thumbs/javascript-original.svg")
        },
        {
          id: 3,
          url: require("../../assets/img/tech_thumbs/html5-original.svg")
        },
        {
          id: 4,
          url: require("../../assets/img/tech_thumbs/sass-original.svg")
        },
        {
          id: 5,
          url: require("../../assets/img/tech_thumbs/bootstrap-plain.svg")
        },
        {
          id: 6,
          url: require("../../assets/img/tech_thumbs/mysql-original-wordmark.svg")
        },
        {
          id: 7,
          url: require("../../assets/img/tech_thumbs/laravel-plain-wordmark.svg")
        },
        {
          id: 8,
          url: require("../../assets/img/tech_thumbs/nodejs-original-wordmark.svg")
        },
        {
          id: 9,
          url: require("../../assets/img/tech_thumbs/heroku-original-wordmark.svg")
        },
        {
          id: 10,
          url: require("../../assets/img/tech_thumbs/github-original.svg")
        },
        {
          id: 11,
          url: require("../../assets/img/tech_thumbs/npm-original-wordmark.svg")
        }
      ]
    };
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const header = document.querySelector("#techHeaderText");
    const thumbs = document.querySelectorAll(".single-tech__thumbnail");

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#tech",
        start: "top top"
      }
    });

    t1.from(header, {opacity: 0}).to(header, .5, {opacity: 1});
    
    thumbs.forEach(thumb => {
      t1.from(thumb, {left: -100, scale: 0, duration: .15}).to(thumb, {left: 0, scale: .8, duration: .15});
    })
  }
};
</script>