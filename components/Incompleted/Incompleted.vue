<template>
  <div class="incompleted">
    <h3>Incompleted</h3>
    <div class="content">
      <ul>
        <li
          v-for="(todo, index ) in todoIncompleted"
          :key="index"
          :id="todo.id"
          @click.prevent="change(todo.id)"
        >
          <div class="todo">
            <div class="input-container">
              <input
                type="checkbox"
                class="ckeckbox"
                :checked="isChecked"
                v-if="todo.completed"
              />
              <span class="checkmark"> </span>
            </div>
            <div class="todo-content">
              <h4>{{ todo.title }}</h4>
              <p>{{ todo.description }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="add-new" v-if="isShow">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for=""> Name: </label>
          <input
            type="text"
            placeholder="to do something"
            v-model="editTodo.title"
          />
          <span>{{ err1 }}</span>
        </div>
        <div class="form-group">
          <label for=""> Description: </label>
          <input
            class="description"
            type="text"
            placeholder="Fiance,..... "
            v-model="editTodo.description"
          />
          <span> {{ err2 }}</span>
        </div>
        <button type="submit">Add New Task</button>
      </form>
    </div>
    <div class="create">
      <div class="box-contain" @click="add">
        <div class="box">
          <div class="x"></div>
          <div class="y"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default() {
        return {
          title: "",
          description: "",
          completed: false,
        };
      },
    },
  },
  data() {
    return {
      isChecked: true,
      check: 0,
      editTodo: this.todo
        ? { ...this.todo }
        : { title: "", description: "", completed: false },
      err1: "",
      err2: "",
      isShow: false,
    };
  },
  methods: {
    add() {
      return (this.isShow = true);
    },
    change(todoId) {
      this.$store.dispatch("changeStatus",todoId );
    },
    onSubmit() {
      if (
        this.editTodo.title &&
        this.editTodo.description.trim().length < 10 &&
        this.editTodo.description.trim().length > 0
      ) {
        this.$store.dispatch("setData", this.editTodo);
        this.editTodo = this.todo;
        return (this.isShow = false);
      }
      if (!this.editTodo.title) {
        this.err1 = "requie title";
      }
      if (!this.editTodo.description.trim().length) {
        this.err2 = "description max lenght 10 characters.";
      }
    },
  },
  computed: {
    todoIncompleted() {
      return this.$store.getters.todoIncompleted;
    },
  },
};
</script>

<style scoped lang="scss">
.incompleted {
  margin-top: 16px;
  padding: 0 16px;
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
              cursor: pointer;
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
              color: #575767;
              font-weight: 500;
              margin-bottom: 4px;
            }
            p {
              font-family: Inter;
              font-style: Semi Bold;
              font-size: 14px;
              line-height: 17px;
              line-height: 100%;
              color: #b9b9be;
            }
          }
        }
      }
    }
  }
  .add-new {
    margin-top: 16px;
    box-sizing: border-box;
    .form-group {
      margin-bottom: 16px;
      label {
        display: block;
        margin-bottom: 4px;
      }
      input {
        padding: 10px 20px;
        width: 298px;
        font-size: 16px;
        color: #222;
      }
    }
    button {
      display: flex;
      padding: 10px 20px;
      background-color: #473fa0;
      color: #fff;
      transition: all 0.3s linear;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        background-color: #515cc6;
      }
    }
    span {
      display: block;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .create {
    position: fixed;
    cursor: pointer;
    right: 16px;
    bottom: 16px;
    .box-contain {
      .box {
        width: 56px;
        position: relative;
        height: 56px;
        border-radius: 100%;
        background-image: linear-gradient(#3f4ea0, #473fa0);
        border: 2px solid #515cc6;

        .x {
          position: absolute;
          top: 45%;
          left: 50%;
          width: 20px;
          transform: translateX(-50%);
          height: 0.25px;
          border: 1px solid #fff;
          background-color: #fff;
          border-radius: 5px;
        }
        .y {
          position: absolute;
          top: 45%;
          left: 48%;
          width: 0.25px;
          transform: translateY(-45%);
          height: 20px;
          border: 1px solid #fff;
          background-color: #fff;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>