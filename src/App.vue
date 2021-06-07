<template>
  <div id="app">
    <Header />
    <Modal v-show="showModal" />
    <div class="container">
      <Join />
      <Features id="about" />
      <Aims />
      <Program id="education" />
      <Trainers id="trainers" />
      <Entertainment />
      <Dates id="dates" />
      <Enrollment />
      <Gallery id="gallery" />
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

import Modal from "./components/Modal.vue";
import { EventBus } from "./main.js";

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
    // ----------
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  watch: {
    showModal() {
      if (this.showModal) {
        document.documentElement.style.overflow = "hidden";
        return;
      }
      document.documentElement.style.overflow = "auto";
    },
  },
  created() {
    EventBus.$on("boolean", (showModal) => {
      this.showModal = showModal;
    });
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
@media (max-width: 2561px) and (min-width: 2151px) {
  .container {
    padding: 400px 300px 450px;
  }
}
@media (max-width: 2151px) and (min-width: 1751px) {
  .container {
    padding: 250px 220px 300px;
  }
}
@media (max-width: 1751px) and (min-width: 1451px) {
  .container {
    padding: 250px 180px;
  }
}
@media (max-width: 1023px) {
  .container {
    padding: 100px 40px;
  }
}
@media (max-width: 641px) {
  .container {
    padding: 100px 30px;
  }
}
@media (max-width: 426px) {
  .container {
    padding: 100px 20px;
  }
}
</style>
