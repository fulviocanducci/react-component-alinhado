import "./App.css";
import Button from "./components/buttons";

function App() {
  return (
    <div className="App">
      <div className="row mt-3">
        <div className="col-md-6 text-end mb-1">
          <Button.Blue label="Botão Azul" type="button" icon="bi bi-activity" />
        </div>
        <div className="col-md-6 text-start mb-1">
          <Button.Yellow label="Botão Yellow" type="button" icon={<i className={"bi bi-terminal-x"}></i>} />
        </div>
        <div className="col-md-6 text-end mb-1">
          <Button.Secondary label="Secundário" icon={<i className="bi bi-android2"></i>} />
        </div>
      </div>
    </div>
  );
}

export default App;
