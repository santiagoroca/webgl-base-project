import './App.css';
import Viewer from './webgl/Viewer'
import { useRef, useEffect } from 'react';

function App() {
  const canvasReference = useRef(null);

  useEffect(() => {
    canvasReference.current.width = parseInt(canvasReference.current.clientWidth);
    canvasReference.current.height = parseInt(canvasReference.current.clientHeight);

    new Viewer(canvasReference.current, {
      clearColor: { r: .5, g: .5, b: .5, a: 1.0 }
    });
  }, [ canvasReference ])

  return (
    <div className="App" style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
      <canvas key={1} style={{ width: '100%', height: '100%' }} ref={canvasReference} />
    </div>
  );
}

export default App;
