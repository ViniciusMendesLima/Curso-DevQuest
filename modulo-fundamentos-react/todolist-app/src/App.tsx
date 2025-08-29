import TodoHeader from "./components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";



function App() {
  return (
    <main className="bg-neutral-very-dark-blue h-screen">
      <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
        <div className="max-w-[43.75rem] m-auto p-8">
          <TodoHeader />
          <TodoForm />
          <TodoList/>
          
        </div>
      </div>
    </main>
  );
}

export default App;
