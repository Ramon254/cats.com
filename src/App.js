import React, {useState} from 'react';
import Picture from './Components/Picture';
import './App.css';
import Button from './Components/Button';
import data from './Database/Data';

function App() {

  const [catId, setCatId] = useState(1);

  function incrementCatId() {
    if (catId === data.length) {
      setCatId(1);
    } else {
      setCatId(catId + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Cats.com
      </header>
      <Picture id={catId}></Picture>
      <Button incrementCatId={incrementCatId}></Button>
    </div>
  );
}

export default App;
