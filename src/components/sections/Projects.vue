<template>
  <b-container fluid class="projects-container" id="projects">
    <b-row class="projects-container__row d-flex justify-content-center align-items-center">
      <b-col
        class="projects-main d-flex flex-column justify-content-center align-items-center"
        sm="10"
        xl="8"
      >
        <h1>Projects I've done so far</h1>
        <img :src="require('../../assets/img/checklist-154274.png')" alt />
        <b-row class="projects-main__row justify-content-center">
          <b-col
            v-for="project in projects"
            :key="project.id"
            class="single-project__main"
            cols="12"
            sm="8"
            xl="6"
          >
            <SingleProject
              :img="project.url"
              :name="project.name"
              :desc="project.desc"
              :gitHub="project.gitHub"
              :liveLink="project.liveLink"
              :portfolio="(project.portfolio) ? project.portfolio : false"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.projects-container {
  min-height: 100vh;
  background-color: #f1f2f6;
  padding-bottom: 100px;
  .projects-container__row {
    @media screen and (min-width: 1024px) {
      flex-direction: row !important;
    }
    h1 {
      margin-top: 30px;
      color: #c43a30;
      text-align: center;
      @media screen and (min-width: 320px) {
        font-size: 2rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 2.5rem;
      }
    }
    img {
      @media screen and (min-width: 320px) {
        margin-bottom: 20px;
        width: 48px;
        height: 60px;
      }
    }
    .projects-main__row {
      @media screen and (min-width: 320px) {
        flex-direction: column;
        align-items: center;
      }
      @media screen and (min-width: 1024px) {
        flex-direction: row;
        align-items: flex-start;
      }
    }
    .single-project__main {
      @media screen and (min-width: 360px) {
        margin-top: 20px;
      }
    }
  }
}
</style>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SingleProject from "../singleProject";
export default {
  components: {
    SingleProject
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          url: require("../../assets/img/Image 1.png"),
          name: "Noteify App",
          desc: `Noteify is an music player app.
                You can add your favourite songs
                to your playlist and have a good time
                listening it. Noteify is integrated with Genius API
                - while listening a song, API provides link to 
                its lyrics and also some author/-s biography
                from genius.com website (genius.com is 
                worldwide known site providing song lyrics).
                App created with: Vue.js, HTML5, SCSS, Bootstrap 4,
                Axios, Node.js / Express, Adobe XD. More informations on my GitHub.`,
          liveLink: "https://noteify-app.herokuapp.com/",
          gitHub: "https://github.com/mnonna/noteify"
        },
        {
          id: 2,
          url: require("../../assets/img/Image 2.png"),
          name: "EHC App",
          desc: `EHC is an hotel managment system app.
                It distinguishes 5 user types - admin, receptionist,
                hotel Staff (service and cleaning) and hotel guest.
                App features :
                adding / removing / edit / deleting 
                room and reservations, editing clients info, booking process. 
                App created with: Vue.js, Laravel, HTML5, SCSS, Bootstrap 4,
                Axios, Moment.js, MySQL, GreenSock GSAP. More informations on my GitHub.
                `,
          gitHub: "https://github.com/mnonna/EHC-App"
        },
        {
          id: 3,
          url: require("../../assets/img/Image 3.png"),
          name: "Swisher App",
          desc: `My first Vue.js app :). It's really simple.
                It allows you to search informations
                about NBA teams. App recieves info 
                from NBA Rapid API. 
                `,

          liveLink: "https://mnonna.github.io/swisherapp/#/",
          gitHub: "https://github.com/mnonna/swisher"
        },
        {
          id: 4,
          url: require("../../assets/img/Image 4.png"),
          name: "Portfolio",
          desc: `My portfolio website. Designed in Adobe XD
                and coded in Vue.js framework with support of
                HTML5, SCSS, Bootstrap 4 and GreenSock GSAP.
                `,
          gitHub: "https://github.com/mnonna/noteify",
          portfolio: true
        }
      ]
    };
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    let projects = document.getElementsByClassName("single-project__main");
    console.log(projects)

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top top"
      }
    });

    projects.forEach(project => {
      t1.from(project, { top: -200, opacity: 0 }).to(project, .1, { top: 0, opacity: 1 });
    });
  }
};
</script>