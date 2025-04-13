import React from 'react';
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
           <Home />
        </div>
      </main>
    </>
  );
};

export default App;
