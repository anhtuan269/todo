<template>
  <div class="header">
    <div class="container">
      <h1>{{ m }} {{ d }}, {{ y }}</h1>
      <div class="count">
        <div class="comp">
          <h4>{{ completed }} Completed,</h4>
        </div>
        <div class="comp">
          <h4>{{ incompleted }} Incompleted</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      d: 0,
      m: "March",
      y: 2020,
    };
  },
  computed: {
    incompleted() {
      return this.$store.getters.todoIncompleted.length;
    },
    completed() {
      return this.$store.getters.todoCompleted.length;
    },
  },
  created() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    this.d = new Date().getDate();
    this.m = month[new Date().getMonth()];
    this.y = new Date().getFullYear();
  },
};
</script>
<style scoped lang="scss">
.header {
  max-width: 343px;
  height: 74px;
  padding: 0 16px;
  margin-top: 76px;
  .container {
    border-bottom: 2px solid #e5e5e5;
    padding-bottom: 16px;
    h1 {
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 39px;
    }
    .count {
      display: flex;
      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #575767;
      }
    }
  }
}
</style>