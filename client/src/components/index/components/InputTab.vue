<template>
  <div class="mainTab">
    <div class="content">    
        <div class="title">
            Input Tab
        </div>
        <br>
        <div id="inputControll">
            <div class="fieldDiv">
                <input type="text" placeholder="Author">
            </div>
            <div class="fieldDiv">
                <input type="text" placeholder="Book title">
            </div>
            <div class="fieldDiv">
                <input type="text" placeholder="Year of publishing">
            </div>
            <div class="buttonDiv fieldDiv">
                <div class="button accept">
                    Save
                </div>
                <div class="button deny">
                    Cancel
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTab',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
    background: rgb(240, 232, 232);
    border: 1px solid grey;
    padding: 50px 20px;
    width: 80%;
    margin: auto;
    border-radius: 10px;
}

.inputControll{
    margin: auto;
    width: 90%;
}

.fieldDiv{
    margin: 20px;
}

.fieldDiv input{
    width: 80%;
    border-radius: 5px;
    height: 30px;
    border: 1px solid grey;
    padding: 0 5px;
}

.button{
    /* float:left; */
    width: 150px;
    height: 50px;
    margin:auto 20px;
    border-radius: 15px;
    line-height: 50px;
    color: white;
    font-size: 20px;
    display: inline-block;   
}

.accept {
    background-color:rgb(75 165 75);
}

.deny {
    background-color: red;
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
