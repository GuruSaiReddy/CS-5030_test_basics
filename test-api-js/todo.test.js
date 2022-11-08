

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });


        test("Update", () => { 
        expect(todo_service.update_todo("T0",{"title":"updated"})).toEqual({"title":"updated"});
        expect(todo_service.get_todos().todo.length).toEqual(3);
    }) 

     
    test("Delete", () => {
        todo_service.delete_todo("T3")
        expect(todo_service.get_todos().todo.length).toEqual(2);
       
    })

    
    test("Add-todo", () => {
        todo_service.add_todo({"title": "Guru",
        "description": "D4",
        "done": true})
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });   

   

   
});