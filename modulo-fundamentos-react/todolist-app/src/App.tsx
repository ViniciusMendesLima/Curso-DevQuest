import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { themeConfig } from "./contexts/theme";



function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <main className={`h-screen ${themeConfig[theme].layout.backgroundColor}`}>
      <div className={`${themeConfig[theme].layout.heroClass} h-80 bg-cover bg-center`}>
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
