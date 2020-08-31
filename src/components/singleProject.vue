<template>
  <div
    class="single-project__wrapper d-flex flex-column align-items-center"
    :class="{'portfolio' : portfolio}"
  >
    <img class="single-project__thumbnail" :src="img" alt />
    <h2 class="single-project__title">{{ name }}</h2>
    <section class="single-project__description">
      <p>{{ desc }}</p>
    </section>
    <section class="single-project__link">
      <p>GitHub Repo</p>
      <a class="project-link" :href="gitHub" target="_blank">{{ gitHub }}</a>
    </section>
    <section class="single-project__link livelink" v-if="liveLink">
      <p>Site URL</p>
      <a class="project-link" :href="liveLink" target="_blank">{{ liveLink }}</a>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.single-project__wrapper {
  border-radius: 20px;
  padding-bottom: 20px;
  background: #222831;
  @media screen and (min-width: 320px) {
    min-height: 500px;
    margin-bottom: 20px;
    .single-project__thumbnail {
      padding: 5px;
      width: 200px;
      height: 120px;
      border-radius: 100px;
      margin-top: 20px;
    }
    .single-project__title {
      font-size: 20px;
    }
    .single-project__description {
      p {
        color: #dfe4ea;
        text-align: center;
        padding: 20px;
      }
    }
  }
  @media screen and (min-width: 360px) {
    min-height: 500px;
    .single-project__thumbnail {
      width: 240px;
      height: 140px;
      border-radius: 100px;
      margin-top: 20px;
    }
    .single-project__title {
      font-size: 20px;
    }
    .single-project__description {
      p {
        color: #dfe4ea;
        text-align: center;
        padding: 20px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    min-height: 600px;
  }
  .single-project__thumbnail {
    border: 1px solid white;
  }
  .single-project__title {
    color: #b4e092;
    margin-top: 20px;
    font-size: 1.5em;
  }
  .single-project__link {
    margin-bottom: 20px;
    p {
      color: white;
      text-align: center;
    }
    .project-link {
      text-decoration: none;
      color: #b4e092;
      &:hover {
        color: white;
        text-decoration: underline;
      }
    }
  }
}
</style>

<script>
export default {
  props: {
    img: String,
    name: String,
    desc: String,
    gitHub: String,
    liveLink: String,
    portfolio: Boolean
  }
};
</script>