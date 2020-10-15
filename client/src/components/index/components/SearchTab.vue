<template>
  <div class="mainTab">
    <div class="content">    
            <div class="title">
                Search Tab
            </div>
            <br>
            <div id="inputControll">
                <div class="fieldDiv">
                    <input type="text" placeholder="Search">
                </div>
                <div class="list">
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'SearchTab',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .mainTab {
} */

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
}

.inputControll{
    margin: auto;
    width: 90%;
}

.fieldDiv{
    margin: 20px 0;
}

.fieldDiv input{
    width: 80%;
    border-radius: 10px;
    height: 30px;
    border: 1px solid grey;
    padding: 0 5px;
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
