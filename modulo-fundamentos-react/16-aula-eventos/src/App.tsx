import type { ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import './App.css'

function App() {

  const handleClick =(name: string) => {
    alert(`${name}, Clicou no botão`)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log('a teecla pressionada foi', event.key);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("formulário enviado")
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    
  }
  return (
    <>
      <button onClick={()=>handleClick("Vinicius")}>Clique aqui</button>

      <input type="text" onKeyDown={handleKeyPress}/>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite alto' onChange={handleChange} />
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default App
