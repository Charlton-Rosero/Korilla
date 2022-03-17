
import './App.css';

import { useState } from 'react'

//Receipt Data
import allReceipt from './ReceiptData';


//components
import Receipt2 from './components/Receipt2';
import Receipt3 from './components/Receipt3';
import Receipt from './components/Receipt';
import Main from './components/Main';






function App() {
  
  const [r1, setReceipt1] = useState(allReceipt)
  const [r2, setReceipt2] = useState(allReceipt)
  const [r3, setReceipt3] = useState(allReceipt)
  
  


  return (
    <div className="App">
      <Receipt Receipt={r1}/>
      <Receipt2 Receipt2={r2}/>
      <Receipt3 Receipt3={r3}/>
  
      <Main />
     
      
      
      
    </div>
  );
}

export default App;
