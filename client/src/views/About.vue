<template>
  <div id="container">
    <nav class="navbar fixed-top navbar-dark bg-primary">
      <ul class="nav" style="margin:0px auto;">
        <li class="nav-item">
          <router-link to="/main">
            <a class="nav-link active" href="#!">Home</a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="{name:'About'}">
            <a class="nav-link active" href="#!">About</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'Vreme'}">
            <a class="nav-link active" href="#!">Vreme</a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/admin" v-if="admin">
            <a class="nav-link active" href="#!">Admin</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'Profile'}">
            <a class="nav-link active" href="#!">Profile</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'Test'}">
            <a class="nav-link active" href="#!">Galerija</a>
          </router-link>
        </li>
        <li class="nav-item">
          <a @click="logout" class="nav-link active">Logout</a>
        </li>
      </ul>
    </nav>
    <div class="jumbotron">
      <h1 v-if="!user">Jos nema Usera..</h1>
      <h1 v-if="user">We, @ {{user}}, we do some bad stuff with your ass</h1>
    </div>

    <!-- //------SLIDER----///// -->

    <div id="app">
      <v-app id="inspire">
        <v-carousel>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </v-app>
    </div>


    
  </div>
</template>


<script>
const API = "http://localhost:5000/auth/about";
import axios from "axios";

export default {
  name: "About",
  data() {
    return {
      user: null,
      admin: false,
      slide: 0,
      sliding: null,
      dejta: [],
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  },
  mounted() {
    if (localStorage.token != null) {
      // axios.get("http://localhost:5000/auth/test").then(res => {
      //   this.dejta = res.data;
      //   this.cetiri_slike.push(this.dejta[1].file_path);
      //   this.cetiri_slike.push(this.dejta[40].file_path);
      //   this.cetiri_slike.push(this.dejta[100].file_path);
      //   this.cetiri_slike.push(this.dejta[200].file_path);
      this.user = localStorage.username;
      if (localStorage.getItem("admin")) {
        this.admin = true;
      }
    } else {
      logout();
    }
    // napuni_niz();
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("admin");
      localStorage.removeItem("user_id");
      localStorage.removeItem("ime");
      this.$router.push("/login");
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
    // napuni_niz() {
    //   this.cetiri_slike.push([
    //     "http://localhost:5000/" +
    //       dejta[Math.floor(Math.random() * dejta.length)].file_path,
    //     "http://localhost:5000/" +
    //       dejta[Math.floor(Math.random() * dejta.length)].file_path,
    //     "http://localhost:5000/" +
    //       dejta[Math.floor(Math.random() * dejta.length)].file_path,
    //     "http://localhost:5000/" +
    //       dejta[Math.floor(Math.random() * dejta.length)].file_path
    //   ]);
    // }
  }
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ccc;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>