import "./App.css";
import Dashboard from "./components/Pages/DashBoard/dashboard";
import Collections from "./components/Pages/Collections/collections";

function App() {
  return (
    <div className="App">
      <Dashboard data-testid="Dashboard"
      />
    </div>
  );
}

export default App;
