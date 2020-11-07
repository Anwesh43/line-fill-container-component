import logo from './logo.svg';
import './App.css';
import LineFillRect from './LineFillRect'
import { useAniamtedScale, useDimension } from './hooks';

function App() {
  const {w, h} = useDimension()
  const {scale, start} = useAniamtedScale(0.02, 20)
  return (
    <div className="App">
      <button onClick = {start}>start</button>
      <LineFillRect scale = {scale} w = {w} h = {h}/>
    </div>
  );
}

export default App;
