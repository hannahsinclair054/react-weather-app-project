import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sydney" />
        <footer>
          This project was coded by Hannah Sinclair and is{" "}
          <a
            href="https://github.com/hannahsinclair054/final-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>{" "}
      </div>
    </div>
  );
}
