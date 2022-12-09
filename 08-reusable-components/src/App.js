import "./App.css";
import MyComponent from "./components/MyComponent";
import OthertComponent from "./components/OtherComponent";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <OthertComponent />
      <MyComponent />
      <OthertComponent />
      <MyComponent />
    </div>
  );
}

export default App;
