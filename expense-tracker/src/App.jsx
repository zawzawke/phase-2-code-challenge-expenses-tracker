import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finances and life. Record, categorize and analyze your spending.</p>

      <div className="main-content">
        <div className="form-section">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        <div className="table-section">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ExpenseTable
            expenses={filteredExpenses}
            onDelete={handleDeleteExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
