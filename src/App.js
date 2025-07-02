import Main from "./advice-generator-app-main/Main";
import './style.css'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Main />
      <Analytics />
    </>
  );
}

export default App;
