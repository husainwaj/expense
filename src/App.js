import React, {useState} from "react";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";

const DUMMY_EXPENSES=[
  {title: 'Car Insurance',amount:230, date:new Date(2021,2,23)},
  {title: 'Car Insurance1',amount:230, date:new Date(2022,2,23)},
  {title: 'Car Insurance2',amount:230, date:new Date(2023,2,23)},
  {title: 'Car Insurance3',amount:230, date:new Date(2020,2,23)},
  ];

const App=() =>{
const[expenses, setExpenses]= useState(DUMMY_EXPENSES);

const addExpenseHandler=(expense)=>{

  setExpenses((prevExpenses) => {
  return[expense, ...prevExpenses];
  });
};
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
