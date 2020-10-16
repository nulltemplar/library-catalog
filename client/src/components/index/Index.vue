<template>
  <div>
    <div class="tab">
      <InputTab @onUpdate="update" />
    </div>
    <div class="tab">
      <SearchTab @onUpdate="update" :books="loadedBooks"/>
    </div>
  </div>
</template>

<script>
import SearchTab from './components/SearchTab.vue';
import InputTab from './components/InputTab.vue';
import axios from "axios";

export default {
  name: 'Index',
  components: {
    SearchTab,
    InputTab
  },
  data(){
    return {
      loadedBooks: []
    }
  },
  mounted: function(){
    axios.get('http://localhost:3000/books')
    .then((books) => {
      this.loadedBooks = books.data})
  },
  methods: {
    async update(querry){
      if(querry) {
        await axios.post('http://localhost:3000/books/multiple', querry)
          .then((books) => {
            this.loadedBooks = books.data})
      } else {
        await axios.get('http://localhost:3000/books')
          .then((books) => {
            this.loadedBooks = books.data})
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab{
  width:50%;
  float: left;
}
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
</style>
