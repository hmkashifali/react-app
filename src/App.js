import './App.css';
import Homefeed from './components/Homefeed';
import Sidebar from './components/shared/Sidebar';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Homefeed />
    </div>
  );
}

export default App;
