import React, { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('/api/mensaje')
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '2rem' }}>
      <h1>Frontend React</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App; 