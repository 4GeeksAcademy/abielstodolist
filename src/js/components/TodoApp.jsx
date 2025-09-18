import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoTask from "./TodoTask";
import TodoFooter from "./TodoFooter";

//create the useState(s) hre to pass down to the children components

//think about what should be included in the tods array
//an array of bojects (json)

let todos = [
//[
//{}
//{id: ,
//  title: 'mow lawn' ,
// },
//{
//  id: 2,
//  title: 'Wash car',
//},
//]

const TodoApp = () => {
    const [todos, setTpdos] = useState([])
    return (
        <>
            TodoApp
            <TodoInput/>
            <TodoTask todos={todos} setTodos={setTodos} />
            <TodoFooter/>
           
            </>
    );
}
export default TodoApp;