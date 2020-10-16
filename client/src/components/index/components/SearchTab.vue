<template>
  <div class="mainTab">
    <div class="content">    
            <div class="title">
                Search Tab
            </div>
            <br>
            <div id="inputControll">
              <div class="upperPanel">
                <div class="fieldDiv">
                    <input class="searchField" type="text" placeholder="Search by author" v-model="searchFields.author">
                    <br>
                    <input class="searchField" type="text" placeholder="Search by title" v-model="searchFields.title">
                    <br>
                    <input class="searchField" type="number" placeholder="Search by year" v-model="searchFields.year">
                </div>
                <div class="fieldDiv buttonDiv">
                  <div class="button blue" @click="searchBooks()">
                    Search
                  </div>
                </div>
              </div>
                <div class="list">
                  <div class="book" v-for="book in books" :key="book._id">
                    <div class="left">
                      <span> Title: {{book.title}}</span>
                      <br>
                      <span> Author: {{book.author}}</span>
                      <br>
                      <span> Year: {{book.year}}</span>
                    </div>
                    <div class="right">
                      <div class="button deny" :id="book._id" @click="deleteBook(book._id)">
                        Delete
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'SearchTab',
  data: function(){
    return {
      searchFields:{
        author: '',
        title: '',
        year: ''
      }
    }
  },
  props: [ 'books'],
  methods: {
    async deleteBook(id){
      await axios.delete(`http://localhost:3000/books/${id}`);
      this.$emit('onUpdate');
    },
    async searchBooks() {
      const searchQuerry = {}
      let querryUpdated = false;

      for (const [key, content] of Object.entries(this.searchFields)) {
        if (content !== '') {
          if(key == 'year') {
            searchQuerry[key] = Number(content)
          } else {
            searchQuerry[key] = content
          }
          querryUpdated = true
        }
      }


      if(querryUpdated) {
        this.$emit('onUpdate', searchQuerry);
      } else {
        this.$emit('onUpdate');
      }
    }
  }
}
</script>

<style scoped>

.fieldDiv{
  margin: 5px auto;
}

.fieldDiv input{
    width: 80%;
    border-radius: 10px;
    height: 30px;
    border: 1px solid grey;
    padding: 0 5px;
}

.button {
  width: 150px;
  height: 50px;
  margin: auto 5px;
  border-radius: 15px;
  line-height: 50px;
  color: white;
  font-size: 20px;
  background-color: blue;
}

.blue:hover{
  background-color:rgb(98, 98, 245);
}

.book {
  height: 50px;
  line-height: 50px;
  margin: 20px auto;
} 

.content {
    background: rgb(240, 232, 232);
    border: 1px solid grey;
    padding: 50px 20px;
    width: 80%;
    margin: auto;
    border-radius: 10px;
}

.list{
    height: 400px;
    border-radius: 10px;
    width: 80%;
    margin: auto;
    background-color: white;
    border: 1px solid grey;
    padding: 0 5px;
    height: 400px;
    max-height: 400px;
    overflow: auto;
}

.inputControll{
    margin: auto;
    width: 90%;
}

.left{
  width: 50%;
  height: 50px;
  float: left;
  /* line-height: 25px; */
  line-height: 15px;
  text-align: left;
  padding-left:25px;
}

.left, .right{
    display: inline-block;   
}

.left span{
  /* line-height: 25px; */
  line-height: 15px;
  font-size: 15px;
}

.button{
    width: 100px;
    height: 50px;
    margin:auto 20px;
    border-radius: 15px;
    line-height: 50px;
    color: white;
    font-size: 20px;
    display: inline-block;   
}

.button:hover{
    cursor: pointer;
}

.deny {
    background-color: red;
}

.deny:hover {
    background-color: #fb4d4d;
}

.searchField{
  width: 80%;
  margin: 5px;
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
