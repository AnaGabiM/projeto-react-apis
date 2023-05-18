import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router"
import { CardsContainer } from "./styles";


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;

function App() {
  return (
    <CardsContainer>
      <GlobalStyle/>
      <Router/>
    </CardsContainer>
  );
}

export default App;
