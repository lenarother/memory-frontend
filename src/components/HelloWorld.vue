<template>
  <div class="section container">
    <h1 class="title">{{ memoryTitle }}</h1><br>
    <div class="columns is-multiline" v-if="cards">
      <div class="column is-one-third" v-for="card in cards" v-bind:key="card.id">
        <div @click="setActiveCard(card)">
          <div v-if="activeCard == card.id">
            <div class="card-box" v-html="card.answer_html">
            </div>
          </div>
          <div  v-else>
            <div v-html="card.question_html"></div>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>

import  axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    myName: String,
  },
  data () {
    return {
      cards: null,
      memoryTitle: '',
      activeCard: null
    }
  },
  mounted () {
    this.getCards()
  },
  methods: {
    getCards () {

      axios({
        method: 'get',
        url: 'http://localhost:8000/cards/'
      }).then(response => {
          this.cards = response.data;
          this.memoryTitle = response.data[0].category
        }
      )

    },
    setActiveCard (card) {
      this.activeCard = card.id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-box {
  border-style: solid;
  border-color: rgba(66, 185, 131, .3);
  border-opacity: 0.1;
  border-width: 8px;
}

::v-deep .highlight .hll { background-color: #ffffcc }
::v-deep .highlight { background: #f8f8f8; }
::v-deep .highlight .c { color: #408080; font-style: italic } /* Comment */
::v-deep .highlight .err { border: 1px solid #FF0000 } /* Error */
::v-deep .highlight .k { color: #008000; font-weight: bold } /* Keyword */
::v-deep .highlight .o { color: #666666 } /* Operator */
::v-deep .highlight .ch { color: #408080; font-style: italic } /* Comment.Hashbang */
::v-deep .highlight .cm { color: #408080; font-style: italic } /* Comment.Multiline */
::v-deep .highlight .cp { color: #BC7A00 } /* Comment.Preproc */
::v-deep .highlight .cpf { color: #408080; font-style: italic } /* Comment.PreprocFile */
::v-deep .highlight .c1 { color: #408080; font-style: italic } /* Comment.Single */
::v-deep .highlight .cs { color: #408080; font-style: italic } /* Comment.Special */
::v-deep .highlight .gd { color: #A00000 } /* Generic.Deleted */
::v-deep .highlight .ge { font-style: italic } /* Generic.Emph */
::v-deep .highlight .gr { color: #FF0000 } /* Generic.Error */
::v-deep .highlight .gh { color: #000080; font-weight: bold } /* Generic.Heading */
::v-deep .highlight .gi { color: #00A000 } /* Generic.Inserted */
::v-deep .highlight .go { color: #888888 } /* Generic.Output */
::v-deep .highlight .gp { color: #000080; font-weight: bold } /* Generic.Prompt */
::v-deep .highlight .gs { font-weight: bold } /* Generic.Strong */
::v-deep .highlight .gu { color: #800080; font-weight: bold } /* Generic.Subheading */
::v-deep .highlight .gt { color: #0044DD } /* Generic.Traceback */
::v-deep .highlight .kc { color: #008000; font-weight: bold } /* Keyword.Constant */
::v-deep .highlight .kd { color: #008000; font-weight: bold } /* Keyword.Declaration */
::v-deep .highlight .kn { color: #008000; font-weight: bold } /* Keyword.Namespace */
::v-deep .highlight .kp { color: #008000 } /* Keyword.Pseudo */
::v-deep .highlight .kr { color: #008000; font-weight: bold } /* Keyword.Reserved */
::v-deep .highlight .kt { color: #B00040 } /* Keyword.Type */
::v-deep .highlight .m { color: #666666 } /* Literal.Number */
::v-deep .highlight .s { color: #BA2121 } /* Literal.String */
::v-deep .highlight .na { color: #7D9029 } /* Name.Attribute */
::v-deep .highlight .nb { color: #008000 } /* Name.Builtin */
::v-deep .highlight .nc { color: #0000FF; font-weight: bold } /* Name.Class */
::v-deep .highlight .no { color: #880000 } /* Name.Constant */
::v-deep .highlight .nd { color: #AA22FF } /* Name.Decorator */
::v-deep .highlight .ni { color: #999999; font-weight: bold } /* Name.Entity */
::v-deep .highlight .ne { color: #D2413A; font-weight: bold } /* Name.Exception */
::v-deep .highlight .nf { color: #0000FF } /* Name.Function */
::v-deep .highlight .nl { color: #A0A000 } /* Name.Label */
::v-deep .highlight .nn { color: #0000FF; font-weight: bold } /* Name.Namespace */
::v-deep .highlight .nt { color: #008000; font-weight: bold } /* Name.Tag */
::v-deep .highlight .nv { color: #19177C } /* Name.Variable */
::v-deep .highlight .ow { color: #AA22FF; font-weight: bold } /* Operator.Word */
::v-deep .highlight .w { color: #bbbbbb } /* Text.Whitespace */
::v-deep .highlight .mb { color: #666666 } /* Literal.Number.Bin */
::v-deep .highlight .mf { color: #666666 } /* Literal.Number.Float */
::v-deep .highlight .mh { color: #666666 } /* Literal.Number.Hex */
::v-deep .highlight .mi { color: #666666 } /* Literal.Number.Integer */
::v-deep .highlight .mo { color: #666666 } /* Literal.Number.Oct */
::v-deep .highlight .sa { color: #BA2121 } /* Literal.String.Affix */
::v-deep .highlight .sb { color: #BA2121 } /* Literal.String.Backtick */
::v-deep .highlight .sc { color: #BA2121 } /* Literal.String.Char */
::v-deep .highlight .dl { color: #BA2121 } /* Literal.String.Delimiter */
::v-deep .highlight .sd { color: #BA2121; font-style: italic } /* Literal.String.Doc */
::v-deep .highlight .s2 { color: #BA2121 } /* Literal.String.Double */
::v-deep .highlight .se { color: #BB6622; font-weight: bold } /* Literal.String.Escape */
::v-deep .highlight .sh { color: #BA2121 } /* Literal.String.Heredoc */
::v-deep .highlight .si { color: #BB6688; font-weight: bold } /* Literal.String.Interpol */
::v-deep .highlight .sx { color: #008000 } /* Literal.String.Other */
::v-deep .highlight .sr { color: #BB6688 } /* Literal.String.Regex */
::v-deep .highlight .s1 { color: #BA2121 } /* Literal.String.Single */
::v-deep .highlight .ss { color: #19177C } /* Literal.String.Symbol */
::v-deep .highlight .bp { color: #008000 } /* Name.Builtin.Pseudo */
::v-deep .highlight .fm { color: #0000FF } /* Name.Function.Magic */
::v-deep .highlight .vc { color: #19177C } /* Name.Variable.Class */
::v-deep .highlight .vg { color: #19177C } /* Name.Variable.Global */
::v-deep .highlight .vi { color: #19177C } /* Name.Variable.Instance */
::v-deep .highlight .vm { color: #19177C } /* Name.Variable.Magic */
::v-deep .highlight .il { color: #666666 } /* Literal.Number.Integer.Long */

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
