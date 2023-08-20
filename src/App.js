import './App.css';
import Router from './components/Router';
import NodeState from './context/note/NodeState';

function App() {
  return (
    <NodeState>
      <Router />
    </NodeState>
  );
}

export default App;
