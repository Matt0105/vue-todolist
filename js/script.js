const app = new Vue(
    {
        el: "#app",
        data: {
            newTask: "",
            todos: [],
            todosCopy: []
        },
        methods: {
            deleteTask(index) {
                this.todos.splice(index, 1);
                this.todosCopy.splice(index, 1);
            },

            addTask() {
                if(this.newTask != "") {

                    let newTodo = {
                        text: this.newTask,
                        done: false
                    }
                    
                    this.todosCopy.unshift(newTodo);
                    this.todos.unshift(newTodo);
                    this.newTask = "";
                }
            },

            done(index) {
                this.todos[index].done = !this.todos[index].done;
            },

            todoFilter(condition) {
                this.todos = this.todosCopy.filter((element) => {
                    return element.done != condition;
                })
            }
        },
        
    }
);