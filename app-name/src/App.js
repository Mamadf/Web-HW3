import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Canvas from './components/Canvas';
import ToolsPanel from './components/ToolsPanel';
import InfoPanel from './components/InfoPanel';
import { saveDrawing, loadDrawing } from './api';

function App() {
  const [dragShape, setDragShape] = useState(null);
  const [shapes, setShapes] = useState([]);
  const [paintingTitle, setPaintingTitle] = useState('My Painting');
  const fileInputRef = useRef();
  const username = 'user1'; 

  useEffect(() => {
    async function fetchDrawing() {
      try {
        const loadedShapes = await loadDrawing(username);
        setShapes(loadedShapes);
        setPaintingTitle('Server Drawing');
      } catch (err) {
        console.warn("No saved drawing for user:", err.message);
      }
    }
    fetchDrawing();
  }, []);

  const handleDragStart = (shape) => {
    setDragShape(shape);
  };

  const handleExport = () => {
    const json = JSON.stringify(shapes, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const filename = `${paintingTitle || 'Untitled'}.json`;

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedShapes = JSON.parse(event.target.result);
        if (Array.isArray(importedShapes)) {
          setShapes(importedShapes);
          const nameWithoutExtension = file.name.replace(/\.[^/.]+$/, '');
          setPaintingTitle(nameWithoutExtension);
        } else {
          alert('Invalid JSON format.');
        }
      } catch (err) {
        alert('Error reading file.');
      }
    };
    reader.readAsText(file);
  };

  const handleSaveToServer = async () => {
    try {
      await saveDrawing(username,shapes);
      alert('Saved to server successfully!');
    } catch (err) {
      alert('Failed to save to server.');
      console.error(err);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header
        paintingTitle={paintingTitle}
        setPaintingTitle={setPaintingTitle}
        handleExport={handleExport}
        handleImport={handleImport}
        handleSaveToServer={handleSaveToServer}
        fileInputRef={fileInputRef}
      />
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Canvas
            shapes={shapes}
            setShapes={setShapes}
            dragShape={dragShape}
            setDragShape={setDragShape}
          />
          <InfoPanel shapes={shapes} />
        </div>
        <ToolsPanel onDragStart={handleDragStart} />
      </div>
    </div>
  );
}

export default App;
