import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import ExpenseTable from './components/ExpenseTable';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <>
    <header>
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finanaces and life. Record, categorize and analyze your spending</p>
    </header>
      <div className="app-container">
          <ExpenseForm onAddExpense={handleAddExpense} />
       <div className="right-section">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <ExpenseTable expenses={filteredExpenses} />
       </div>
      </div>
    </>
 

  );
}

export default App;
