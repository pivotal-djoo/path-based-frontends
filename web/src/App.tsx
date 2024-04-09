import { useState } from 'react';
import './App.css';
import MenuBar from './MenuBar';

function App() {
  const pages = {
    Product: 'http://localhost:5174',
    Pricing: 'https://www.google.com/webhp?igu=1',
    Blog: 'https://www.youtube.com/embed/gdZLi9oWNZg?si=CxbhDezc692Cmw98'
  };
  const [currentPage, setCurrentPage] = useState<string>('/');

  return (
    <>
      <MenuBar pages={pages} setCurrentPage={setCurrentPage} />
      {currentPage !== '/' && (
        <iframe
          src={currentPage}
          style={{ width: window.innerWidth, height: window.innerHeight }}
        />
      )}
    </>
  );
}

export default App;
