class todoservice{
    todo_data = {
        "todo":[{
            "title": "T0",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D2",
            "done": false
        },{
            "title": "T2",
            "description": "D3",
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
        this.todo_data.todo.push(todo);
    }   

    delete_todo(title){
        // Your code here
        const deleteItem = this.todo_data.todo.findIndex((i)=>i.title == title)
        this.todo_data.todo.splice(deleteItem,1)


    }

    update_todo(title, todo){
        // Your code here
        const updateItem = this.todo_data.todo.findIndex((i)=>i.title === title)
        this.todo_data.todo.splice(updateItem,1,todo)
             
        var result= this.todo_data.todo.find(obj =>{
            return obj.title === "updated";
        });
        return result;
    
    }
}


module.exports= todoservice;