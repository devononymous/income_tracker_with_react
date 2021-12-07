import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import Incomelist from './components/Incomelist';


function App() {
  const[income, setIncome] = useState([]);
  const[totalIncome, setTotalIncome] = useState(0);

  useEffect(()=>{
    let temp = 0;
    for (let i=0; i<income.length; i++) {
      temp += parseInt(income[i].price);
    }
     setTotalIncome(temp);
  },[income]);

  return (
    <div className="App">
      <Header totalIncome ={totalIncome}/>
      <IncomeForm  income={income} setIncome={setIncome} />
      <Incomelist income={income} setIncomelist={setIncome} />
    </div>
  );
}

export default App;
