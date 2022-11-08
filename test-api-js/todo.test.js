

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


    // This test case updates the object and validates it with the returned object and also checks the length of the array if only updation operation is done. 
        test("Update", () => { 
        expect(todo_service.update_todo("T0",{"title":"updated"})).toEqual({"title":"updated"});
        expect(todo_service.get_todos().todo.length).toEqual(3);
    }) 

     //This test case is used to delete an object based on id called title and returns the length of the array which is decreased.
    test("Delete", () => {
        todo_service.delete_todo("T3")
        expect(todo_service.get_todos().todo.length).toEqual(2);
       
    })

    //This test case validates wheather the new object is added into the array or not returns lengt of the array after sucessful validation.
    test("Add-todo", () => {
        todo_service.add_todo({"title": "Guru",
        "description": "D4",
        "done": true})
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });   

   

   
});