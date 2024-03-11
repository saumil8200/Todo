import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">Todo</h1>
      <div className="max-w-sm mx-auto">
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
