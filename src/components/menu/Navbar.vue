<template>
  <b-navbar fixed="top" class="d-flex justify-content-between align-items-center app-navbar">
    <b-navbar-brand href="#">
      <p id="logo">mnonn@</p>
    </b-navbar-brand>
    <div class="app-nav--mobile" @click="toggleMenu()">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
        <g id="Group_18" data-name="Group 18" transform="translate(-295 -15)">
          <g
            id="Ellipse_1"
            data-name="Ellipse 1"
            transform="translate(295 15)"
            fill="none"
            stroke="#b4e092"
            stroke-width="1"
          >
            <circle cx="20" cy="20" r="20" stroke="none" />
            <circle cx="20" cy="20" r="19.5" fill="none" />
          </g>
          <line
            id="Line_1"
            data-name="Line 1"
            x2="20"
            transform="translate(305.5 27.5)"
            fill="none"
            stroke="#b4e092"
            stroke-width="2"
          />
          <line
            id="Line_2"
            data-name="Line 2"
            x2="20"
            transform="translate(305.5 35.5)"
            fill="none"
            stroke="#b4e092"
            stroke-width="2"
          />
          <line
            id="Line_3"
            data-name="Line 3"
            x2="20"
            transform="translate(305.5 43.5)"
            fill="none"
            stroke="#b4e092"
            stroke-width="2"
          />
        </g>
      </svg>
    </div>
    <div class="app-menu-overlay" ref="overlay">
      <div class="app-menu-close d-flex justify-content-end align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30.707"
          height="30.707"
          viewBox="0 0 30.707 30.707"
          @click="toggleMenu()"
        >
          <g id="Menu_close" transform="translate(-76.146 -49.146)">
            <line
              id="Line_4"
              data-name="Line 4"
              x2="30"
              y2="30"
              transform="translate(76.5 49.5)"
              fill="none"
              stroke="#b4e092"
              stroke-width="1"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              x2="30"
              y2="30"
              transform="translate(106.5 49.5) rotate(90)"
              fill="none"
              stroke="#b4e092"
              stroke-width="1"
            />
          </g>
        </svg>
      </div>
      <div class="app-menu-links d-flex flex-column justify-content-around align-items-center">
        <h1>mnonn@</h1>
        <a class="app-menu-links__single" href="#about">About</a>
        <a class="app-menu-links__single" href="#projects">Projects</a>
        <a class="app-menu-links__single" href="#tech">Stack</a>
        <a class="app-menu-links__single" href="#contact">Contact</a>
      </div>
    </div>
  </b-navbar>
</template>

<style lang="scss" scoped>
.app-navbar {
  width: 100%;
  height: 80px;
  padding: 0;
  background-color: transparent;
  .navbar-brand {
    padding: 0;
    margin-left: 40px;
    #logo {
      margin: 0;
      padding: 0;
      color: #b4e092;
      font-family: 'Merienda One', cursive;
      @media screen and (min-width: 320px) {
        font-size: 24px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 28px;
      }
    }
  }
  .app-nav--mobile {
    margin-right: 40px;
    svg {
      @media screen and (min-width: 1366px) {
        width: 50px;
        height: 50px;
      }
      cursor: pointer;
      &:hover {
        g,
        line {
          stroke: white;
        }
      }
    }
  }
  .app-menu-overlay {
    position: fixed;
    top: 0;
    left: -2000px;
    opacity: 0;
    height: 100%;
    background-color: rgba(34, 47, 62, 0.95);
    display: grid;
    grid-template-rows: 80px 1fr;
    justify-items: center;
    align-items: center;
    @media screen and (min-width: 320px) {
      width: 100%;
    }
    @media screen and (min-width: 768px) {
      width: 60%;
    }
    @media screen and (min-width: 1024px) {
      width: 40%;
    }
    .app-menu-close {
      height: 100%;
      width: 100%;
      padding-right: 40px;
      svg {
        cursor: pointer;
        @media screen and (min-width: 320px){
          width: 30px;
          height: 30px;
        }
        @media screen and (min-width: 768px){
          width: 40px;
          height: 40px;
        }
        &:hover{
          g line{
            stroke: white;
          }
        }
      }
    }
    .app-menu-links {
      width: 50%;
      height: 300px;
      h1 {
        color: #b4e092;
      }
      a {
        color: #c8d6e5;
        text-decoration: none;
        font-size: 1.5em;
        transition: all 0.5 cubic-bezier(0.19, 1, 0.22, 1);
        &:hover {
          transform: scale(1.1);
          color: #b4e092;
        }
      }
    }
  }
}
</style>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      overlay: false
    };
  },

  methods: {
    toggleMenu: function() {
      const { overlay } = this.$refs;

      this.overlay = !this.overlay;

      if (this.overlay == true) {
        gsap.fromTo(
          overlay,
          { left: -2000, opacity: 0 },
          { left: 0, opacity: 1, duration: 1 }
        );
      } else {
        gsap.to(overlay, { left: -2000, opacity: 0, duration: 1 });
      }
    }
  },
};
</script>