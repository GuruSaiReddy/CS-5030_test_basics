

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


    // Write all your test cases here that corresponds to software requirements
    test("Add-todo", () => {
        todo_service.add_todo({"title": "T3",
        "description": "T3",
        "done": false})
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });   

    test("Delete", () => {
        todo_service.delete_todo("T3")
        expect(todo_service.get_todos().todo.length).toEqual(3);
    })

    test("Update", () => {
        todo_service.update_todo("T0", {
            "title": "T3",
        "description": "T3",
        "done": true
    })
        expect(todo_service.get_todos().todo.length).toEqual(3);
    })
});