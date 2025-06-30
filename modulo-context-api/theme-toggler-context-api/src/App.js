import './App.css';
import { ThemeProvider } from './contexts/theme-context';
import { ThemTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { Card } from './components/card/card';

function App() {
  return (
    <ThemeProvider>
      <ThemTogglerButton/>
      <Card/>
      <Card/>
      <Card/>
    </ThemeProvider>
  );
}

export default App;
