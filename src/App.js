import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      hello
      {/* <header className="App-header">
        <Div1>
          <p>helllo hello herdf rtghetgdrhe</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Div1>
      </header> */}
    </div>
  );
}

const Div1 = styled.div`
  z-index: 1;
`;

const Div = styled.div`
  position: fixed;
  z-index: 0;
`;
export default App;
