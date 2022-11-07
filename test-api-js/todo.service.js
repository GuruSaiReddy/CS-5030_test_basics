class todoservice{
    todo_data = {
        "todo":[{
            "title": "T0",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todo_data.todo.push(todo)
    }   

    delete_todo(title){
        // Your code here
        const t = this.todo_data.todo.findIndex((o)=>o.title == title)
        this.todo_data.todo.splice(t,1)

    }

    update_todo(title, todo){
        // Your code here
        const t = this.todo_data.todo.findIndex((o)=>o.title === title)
        this.todo_data.todo.splice(t,1,todo)
    }
}


module.exports= todoservice;