<template>
  <div class="mainTab">
    <div class="content">
      <div class="title">Input Tab</div>
      <br />
      <div id="inputControll">
        <div class="fieldDiv">
          <input
            v-if="!inputData.author.error.status"
            type="text"
            :placeholder="inputData.author.placeholder"
            v-model="inputData.author.value"
          />
          <input
            v-else
            type="text"
            :placeholder="inputData.author.error.message"
            class="error"
          />
        </div>
        <div class="fieldDiv">
          <input
            v-if="!inputData.author.error.status"
            type="text"
            :placeholder="inputData.title.placeholder"
            v-model="inputData.title.value"
          />
          <input
            v-else
            type="text"
            :placeholder="inputData.title.error.message"
            class="error"
          />
        </div>
        <div class="fieldDiv">
          <input
            v-if="!inputData.year.error.status"
            type="number"
            :placeholder="inputData.year.placeholder"
            v-model="inputData.year.value"
          />
          <input
            v-else
            type="number"
            :placeholder="inputData.year.error.message"
            class="error"
          />
        </div>
        <div class="buttonDiv fieldDiv">
          <div class="button accept" @click="sendData()">Save</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "InputTab",
  data: function () {
    return {
      inputData: {
        author: {
          value: "",
          placeholder: "Author",
          error: {
            status: false,
            message: "Author must be a non-empty string",
          },
        },
        title: {
          value: "",
          placeholder: "Title",
          error: { status: false, message: "Title must be a non-empty string" },
        },
        year: {
          value: "",
          placeholder: "Year",
          error: { status: false, message: "Year must be a number" },
        },
      },
    };
  },
  methods: {
    async sendData() {
      if(this.validateInput()) return false
      await axios.post("http://localhost:3000/books", {
        title: this.inputData.title.value,
        author: this.inputData.author.value,
        year: this.inputData.year.value,
      });

      this.$emit('onUpdate')
    },
    validateInput() {
      for (const [key, content] of Object.entries(this.inputData)) {
        if (content.value == "") {
          this.inputData[key].error.status = true;

          setTimeout(() => {
            this.inputData[key].error.status = false;
          }, 2500);
        }
      }
      if (
        this.inputData.year.error.status ||
        this.inputData.title.error.status ||
        this.inputData.author.error.status
      ) return true;
    },
  },
};
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

.inputControll {
  margin: auto;
  width: 90%;
}

.fieldDiv {
  margin: 20px;
}

.fieldDiv input {
  width: 80%;
  border-radius: 5px;
  height: 30px;
  border: 1px solid grey;
  padding: 0 5px;
}

.error ::placeholder {
  color: red;
}

.button {
  /* float:left; */
  width: 150px;
  height: 50px;
  margin: auto 20px;
  border-radius: 15px;
  line-height: 50px;
  color: white;
  font-size: 20px;
  display: inline-block;
}

.button:hover {
  cursor: pointer;
}

.accept {
  background-color: rgb(75 165 75);
}
.accept:hover {
  background-color: rgb(122 197 122);
}

.deny {
  background-color: red;
}

.deny:hover {
  background-color: #fb4d4d;
}

.error {
  animation-name: blink;
  animation-duration: 0.5s;
  animation-timing-function: step-end;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.error::placeholder {
  color: red;
}

@keyframes blink {
  50% {
    border-color: #ff0000;
  }
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
