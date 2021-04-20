<template>
  <div class="completed">
    <h3>Completed</h3>
    <div class="content">
      <ul>
        <li v-for="(todo, index) in todoCompleted" :key="index">
           <div class="todo">
            <div class="input-container">
              <input type="checkbox" :checked="isChecked" class="checkbox" v-if="todo.completed" />
              <span class="checkmark" @click="change(todo.id)"> </span>
            </div>
            <div class="todo-content">
              <h4>{{todo.title}}</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: true ,
      
    }
  },
  methods: {
    change(todoId) {
      this.$store.dispatch("changeStatus",todoId );
    }
  },
  computed: {
    todoCompleted() {
      return this.$store.getters.todoCompleted
    }
  }
};
</script>

<style scoped lang="scss">
.completed {
  padding-top: 32px;
  margin: 0 16px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 18px;
    color: #575767;
    margin-bottom: 10px;
  }
  .content {
    ul {
      li {
        list-style: none;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
        .todo {
          display: flex;
          justify-content: flex-start;

          .input-container {
            position: relative;
            display: inline-block;
            margin-right: 16px;
            width: 24px;
            height: 24px;
            input:checked {
              opacity: 0;
              position: absolute;
              cursor: pointer;
            }
            span {
              position: absolute;
              top: 0;
              left: 0;
              width: 24px;
              height: 24px;
              border-radius: 6px;
              margin-right: 16px;
              border: 1px solid #dadada;
              cursor:pointer;
            }
            input {
              opacity: 0;
            }
            input ~ span::before {
              opacity: 0;
            }
            input:checked ~ span::before {
              content: "";
              position: absolute;
              width: 6px;
              height: 13px;
              border-right: 1px;
              border-bottom: 1px;
              border-color: #333;
              border-top: 0;
              border-left: 0;
              border-style: solid;
              transform: rotate(-315deg);
              left: 38%;
              top: 10%;
              opacity: 1;
            }
          }

          .todo-content {
            h4 {
              font-size: 18px;
              line-height: 24px;
              color: #b9b9be;
              font-weight: 500;
              margin-bottom: 4px;
            }
          }
        }
      }
    }
  }
}
</style>