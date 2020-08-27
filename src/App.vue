<template>
  <div id="app">
    <Navbar />
    <About />
    <Projects />
    <Technologies />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Technologies from "./components/sections/Technologies";
import Contact from "./components/sections/Contact";
import Navbar from "./components/menu/Navbar";
import Footer from "./components/sections/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    About,
    Projects,
    Technologies,
    Contact,
    Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Catamaran:wght@900&family=Montserrat&display=swap");
html,
body {
  height: 100%;
  scroll-behavior: smooth;
}
#app {
  height: 100%;
  p,
  span {
    font-family: "Montserrat", sans-serif;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Catamaran", sans-serif;
  }

  .row {
    flex-wrap: nowrap;
    @media screen and (min-width: 1024px) {
      flex-wrap: wrap;
    }
  }
}
</style>
