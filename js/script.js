const app = new Vue(
    {
        el: "#app",
        data: {
            newTask: "",
            todos: [
                {
                    text: "gym",
                    done: false
                },
                {
                    text: "work",
                    done: true
                },
                {
                    text: "boolean",
                    done: false
                }
            ]
        },
        methods: {
            deleteTask(index) {
                this.todos.splice(index, 1);
            },

            addTask() {
                if(this.newTask != "") {

                    let newTodo = {
                        text: this.newTask,
                        done: false
                    }
    
                    this.todos.unshift(newTodo);
                    this.newTask = "";
                }
            },

            done(index) {
                this.todos[index].done = !this.todos[index].done;
            }
        },
        
    }
);