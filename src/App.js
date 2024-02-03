import './App.css';
import Items from "./Component/Items";

const box = {
  margin: "auto", 
  marginTop: "10px", 
  padding: "10px", 
  width: "75%", 
  background: "#282828", 
  borderRadius: "15px", 
  boxShadow: "0px 10px 10px black"
}

function App() {
  return (
    <div style={box}>
      <h1>Accounting App</h1>
      <p className="alignText"> Track Daily Transactions.</p>
      <Items/>
    </div>
  );
}

export default App;
