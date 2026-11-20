import { useState } from "react";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <GlobalStyle />
      <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
    </>
  );
}

export default App;
