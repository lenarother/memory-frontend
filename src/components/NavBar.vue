<template>
  <div class="section container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="../assets/brain.png" >
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Category
            </a>

            <div class="navbar-dropdown" >
              <a class="navbar-item" v-for="category in categories">
                {{ category.name }}
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Show</strong>
              </a>
              <a class="button is-light">
                Hide
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>  </div>
</template>

<script>

import  axios from 'axios'
export default {
  name: 'NavBar',
  data () {
    return {
      categories: null,
    }
  },
  mounted () {
    this.getCategories()
  },
  methods: {
    getCategories () {
      axios({
        method: 'get',
        url: 'http://localhost:8000/categories/'
      }).then(response => {
          this.categories = response.data;
          console.log('Categories');
          console.log(this.categories);
        }
      )

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>


<!--
<h3>Installed CLI Plugins</h3>
<ul>
  <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
  <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
</ul>
<h3>Essential Links</h3>
<ul>
  <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
  <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
  <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
  <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
  <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
</ul>
<h3>Ecosystem</h3>
<ul>
  <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
  <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
  <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
  <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
  <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
</ul>
-->
