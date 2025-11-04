
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('reasons');

  return (
    <div className="App">
      <div className="background-animation"></div>
      <header className="App-header">
        <h1>Gemini-CLI vs. In-Browser Gemini</h1>
      </header>
      <div className="container">
        <div className="tabs">
          <button className={activeTab === 'reasons' ? 'active' : ''} onClick={() => setActiveTab('reasons')}>Top 5 Reasons</button>
          <button className={activeTab === 'install' ? 'active' : ''} onClick={() => setActiveTab('install')}>Installation & Usage</button>
        </div>
        <div className="glass-panel">
          {activeTab === 'reasons' && (
            <div className="fade-in">
              <h2>Top 5 Reasons</h2>
              <ol>
                <li><span className="fw-bold">Cool Retro Interface:</span> Experience Gemini with a unique, retro-inspired terminal interface that enhances your workflow.</li>
                <li><span className="fw-bold">Blazing Fast & Efficient:</span> While not local, Gemini-CLI offers significantly faster response times and a more efficient interaction than the browser version.</li>
                <li><span className="fw-bold">Integration:</span> Seamlessly pipe command outputs into Gemini or chain commands together for powerful workflows.</li>
                <li><span className="fw-bold">Customization:</span> Tailor the CLI to your needs with custom aliases, scripts, and configurations.</li>
                <li><span className="fw-bold">Privacy:</span> Keep your data local and secure, with no need to upload sensitive code to a web browser.</li>
              </ol>
            </div>
          )}
          {activeTab === 'install' && (
            <div className="fade-in">
              <h2>Installation and Usage</h2>
              <p><strong>Installation:</strong></p>
              <p><code>npm install -g @gemini/cli</code></p>
              <p><strong>Usage:</strong></p>
              <p><code>gemini [command] [options]</code></p>
              <p>For example, to ask a question:</p>
              <p><code>gemini "What is the capital of France?"</code></p>
            </div>
          )}
        </div>
      </div>
      <footer className="footer">
        <p>This site was made by Gemini-CLI in MINUTES! Credits to vxielo.</p>
      </footer>
    </div>
  );
}

export default App;
