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
            href="https://github.com/hannahsinclair054/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
            className="GitHub-Link"
          >
            open-sourced on GitHub
          </a>{" "}
          and is{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noreferrer"
            className="Netlify-Link"
          >
            hosted on Netlify
          </a>{" "}
        </footer>{" "}
      </div>
    </div>
  );
}
