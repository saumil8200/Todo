import { useState } from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

  return (
    <form onSubmit={addTodoHandler}>
      <input className="border-2 w-full border-grey-500 p-2" type="text" placeholder="Add Todo" value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded items-center hidden" type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodo