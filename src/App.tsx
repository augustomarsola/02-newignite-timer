import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Ignite Timer - Aula</h1>
      <Button>Teste</Button>
      <Button variant="danger">Teste</Button>
      <Button variant="success">Teste</Button>
      <Button variant="secondary">Teste</Button>
      <Button variant="primary">Teste</Button>
    </ThemeProvider>
  );
}
