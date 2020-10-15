<template>
  <div>
    <div class="tab">
      <InputTab/>
    </div>
    <div class="tab">
      <SearchTab/>
    </div>
  </div>
</template>

<script>
import SearchTab from './components/SearchTab.vue';
import InputTab from './components/InputTab.vue';

export default {
  name: 'Index',
  components: {
    SearchTab,
    InputTab
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
