// import axios from 'axios'

export const state = () => ({
    todos: [{
        "completed": true,
        "description": "fiance",
        "id": 1,
        "title": "delectus aut autem",
    },
    {
        "completed": false,
        "description": "fiance",
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
    },
    {
        "completed": true,
        "description": "fiance",
        "id": 3,
        "title": "fugiat veniam minus",
    },
    {
        "completed": false,
        "description": "fiance",
        "id": 4,
        "title": "et porro tempora",
    },
    {
        "completed": false,
        "description": "fiance",
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    },
    {
        "completed": false,
        "description": "fiance",
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    },
    {
        "completed": true,
        "description": "fiance",
        "id": 7,
        "title": "illo expedita consequatur quia in",
    },
    {
        "completed": true,
        "description": "fiance",
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
    },
    {
        "completed": false,
        "description": "fiance",
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
    },
    {
        "completed": true,
        "description": "fiance",
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
    }
    ],
})
export const getters = {
    todos: state => {
        return state.todos
    },
    todoIncompleted: state => {
        return state.todos.filter(todo => todo.completed == false)
    },
    todoCompleted: state => {
        return state.todos.filter(todo => todo.completed == true)
        
    }
   
}
export const mutations = {
    // setData(state,todo) {
    //     state.todos = todo
    // }
    changeData(state,payload) {
      state.todos.map( todo => {
          if(todo.id === payload){
              todo.completed = !todo.completed
              return todo;
          }
      })
    },
    setData(state,payload) {
        state.todos.push(payload)
    }
}
export const actions = {
    // nuxtServerInit(vuexContext, context) {
    //     return axios.get("https://nuxt-english-course-default-rtdb.firebaseio.com/decks.json")
    //     .then( res => {
    //         const todosArr = [];
    //         for(const key in res.data) {
    //             todosArr.push({...res.data[key], id:key})
    //         }
    //         vuexContext.commit('setData', todosArr)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // },
    // setData(vuexContext,todos) {
    //     vuexContext.commit('setData',todos)
    // }
    changeStatus(vuexContext,payload){
        vuexContext.commit('changeData', payload)
    },
    setData(vuexContext, payload) {
        vuexContext.commit('setData', payload)
    }
}