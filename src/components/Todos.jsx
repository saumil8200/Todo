import { useState } from "react";
import { useSelector } from "react-redux"
import {useDispatch} from "react-redux";
import { removeTodo, updateTodo, checkTodo } from "../features/todo/todoSlice";

function Todos() {

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newText, setNewText] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleUpdateTodo = (todoId) => {
    dispatch(updateTodo({ id: todoId, text: newText }));
    setNewText("");
    setEditingTodoId(null);
  };

  return (
    <>
      <div className="my-5">
        {todos.map((todo) => (
          <div className="flex justify-between items-center my-4" key={todo.id}>
            <span>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(checkTodo(todo.id))}
                className="mr-2"
              />
            </span>
            {editingTodoId === todo.id ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                readOnly={false}
                className="border-2 w-full border-grey-500 p-2 mx-3"
              />
            ) : (
              <input
                type="text"
                value={todo.text}
                readOnly={true}
                className={`border-2 w-full border-grey-500 p-2 mx-3 ${todo.completed ? "line-through" : ""}`}
              />
            )}
            <span>
              <button className="bg-red-500 text-white px-5 py-2 rounded-md" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </span>
            <span className="mx-3">
              {editingTodoId === todo.id ? (
                <button className="bg-blue-500 text-white px-5 py-2 rounded-md" onClick={() => handleUpdateTodo(todo.id)}>Save</button>
              ) : (
                <button className="bg-blue-500 text-white px-5 py-2 rounded-md" onClick={() => setEditingTodoId(todo.id)}>Edit</button>
              )}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

export default Todos