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
      {todos.map((todo) => (
        <div key={todo.id}>
          {editingTodoId === todo.id ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              readOnly={false}
            />
          ) : (
            <input
              type="text"
              value={todo.text}
              readOnly={true}
            />
          )}
          <span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(checkTodo(todo.id))}
            />
          </span>
          <span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </span>
          <span>
            {editingTodoId === todo.id ? (
              <button onClick={() => handleUpdateTodo(todo.id)}>Save</button>
            ) : (
              <button onClick={() => setEditingTodoId(todo.id)}>Update</button>
            )}
          </span>
        </div>
      ))}
    </>
  )
}

export default Todos