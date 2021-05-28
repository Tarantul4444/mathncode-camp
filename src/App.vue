<template>
  <div id="app">
    <Header />
    <div class="container">
      <Join />
      <Features />
      <Aims />
      <Program />
      <Trainers />
      <Entertainment />
      <Dates />
      <Enrollment />
      <Gallery />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Join from "./components/Join.vue";
import Features from "./components/Features.vue";
import Aims from "./components/Aims.vue";
import Program from "./components/Program.vue";
import Trainers from "./components/Trainers.vue";
import Entertainment from "./components/Entertainment.vue";
import Dates from "./components/Dates.vue";
import Enrollment from "./components/Enrollment.vue";
import Gallery from "./components/Gallery.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Join,
    Features,
    Aims,
    Program,
    Trainers,
    Entertainment,
    Dates,
    Enrollment,
    Gallery,
    Footer,
  },
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  outline: none;
}
@font-face {
  font-family: Montserrat-Regular;
  src: url("./assets/fonts/Montserrat-Regular.ttf");
}
#app {
  font-family: Montserrat-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.container {
  padding: 200px 140px;
}
@media (max-width: 1023px) {
  .container {
    padding: 100px 40px;
  }
}
</style>
