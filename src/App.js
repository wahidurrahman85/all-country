import logo from './logo.svg';
import './App.css';
import Home from './componants/Home/Home';
import Header from './componants/Header/Header';
import Shipment from './componants/Shipment/Shipment';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  return (
    <CategoryContext.Provider value={[count, setCount]}>
      <p>Count: {count}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
      
    </CategoryContext.Provider>
  );
}

export default App;
