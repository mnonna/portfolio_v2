<template>
  <b-container fluid class="about-container" id="about">
    <div class="about-container__row">
      <b-col class="about-heading d-flex justify-content-center align-items-center" xl="8">
        <b-row class="about-heading__wrapper d-flex justify-content-center align-items-center">
          <b-col class="about_profile d-flex flex-column align-items-center" xl="6">
            <img id="profileImg" :src="require('../../assets/img/profile.webp')" alt />
            <h1>Hello, my name is Marcin</h1>
            <p>
              The one who'll make
              a nice website for you
            </p>
          </b-col>
          <b-col class="about-bio" sm="8" md="6" xl="6">
            <p>
              I'm an frontend developer.
              My journey with coding websites started about one year ago.
              By far I've learned all things by myself, e.g online courses
              and doing my independent projects. Of course I don't want to
              be complacent and I'm still going to learn new things.
              I'm looking for a intern/job as an frontend
              dev. Feel free, check out my projects and contact me.
            </p>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="about-go-further d-flex justify-content-center align-items-center">
        <button id="aboutGoFurther" class="d-flex align-items-center justify-content-center">
          <a href="#projects">Go for more</a>
        </button>
      </b-col>
    </div>
  </b-container>
</template>

<style lang="scss" scoped>
.about-container {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  height: 100%;
  background: #222831;
  @media screen and (min-width: 320px) {
    max-height: none;
    height: auto;
  }
  @media screen and (min-width: 360px) {
    max-height: none;
  }
  @media screen and (min-width: 400px) {
    max-height: 100vh;
  }
  @media screen and (min-width: 500px) and (orientation: landscape) {
    height: auto;
    max-height: none;
  }
  .col {
    flex-grow: 0;
    flex-basis: auto;
  }
  .about-container__row {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    padding-top: 70px;
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    @media screen and (min-width: 320px) {
    }
    .about-heading {
      .about-heading__wrapper {
        @media screen and (min-width: 320px) {
          flex-direction: column;
        }
        @media screen and (min-width: 1024px) {
          flex-direction: row;
        }
        .about_profile {
          h1 {
            color: #b4e092;
          }
          p {
            position: relative;
            color: #dfe4ea;
            padding: 0;
          }
          @media screen and (min-width: 320px) {
            h1 {
              text-align: center;
              font-size: 2rem;
            }
            p {
              text-align: center;
              font-size: 20px !important;
            }
          }
          @media screen and (min-width: 1024px) {
            h1 {
              font-size: 2.5rem;
            }
            p {
              font-size: 24px !important;
            }
          }
        }
        #profileImg {
          position: relative;
          padding: 5px;
          border-radius: 50%;
          @media screen and (min-width: 320px) {
            width: 120px;
            height: 120px;
          }
          @media screen and (min-width: 768px) {
            width: 155px;
            height: 155px;
          }
        }
      }
    }
    .about-bio {
      p {
        color: white;
        padding: 10px;
        text-align: center;
        @media screen and (min-width: 1366px) {
          padding-left: 50px;
        }
      }
    }
    .about-go-further {
      background: url("../../assets/img/mobile/about_footer_mobile.svg");
      background-size: cover;
      position: relative;
      justify-self: flex-start;
      a {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: white;
        font-weight: 500;
      }
      @media screen and (min-width: 320px) {
        height: 100px;
        #aboutGoFurther {
          position: relative;
          width: 150px;
          height: 50px;
          background-color: #c43a30;
          color: white;
          outline: 0;
          border: 1px solid #2f3542;
          border-radius: 25px;
          &:hover{
            background-color: transparent;
            a{
              color: #c43a30;
            }
          }
        }
      }
      @media screen and (min-width: 1024px) {
        background: url("../../assets/img/about_Footer_desk.svg");
        background-size: cover;
        height: 150px;
      }
    }
  }
}
</style>

<script>
import { TimelineLite } from "gsap";
export default {
  mounted() {
    let profileImg = document.getElementById("profileImg");
    let profileHead = document
      .querySelector(".about_profile")
      .querySelector("h1");
    let profileText = document
      .querySelector(".about_profile")
      .querySelector("p");
    let profileBio = document.querySelector(".about-bio").querySelector("p");
    let footer = document.querySelector(".about-go-further");
    let button = document
      .querySelector(".about-go-further")
      .querySelector("button");

    const t1 = new TimelineLite();

    t1.fromTo(profileImg, 1, { top: -200, opacity: 0 }, { top: 0, opacity: 1 })
      .fromTo(profileHead, 0.5, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        profileText,
        0.2,
        { bottom: -200, opacity: 0 },
        { bottom: 0, opacity: 1 }
      )
      .fromTo(profileBio, 1, { opacity: 0 }, { opacity: 1 }, "+=.5")
      .fromTo(
        footer,
        1,
        { width: "0%", opacity: 0 },
        { width: "100%", opacity: 1 }
      )
      .fromTo(
        button,
        0.5,
        { bottom: -200, opacity: 0 },
        { bottom: 0, opacity: 1 }
      );
  }
};
</script>