import React, { useState } from 'react';
import '../index.css';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(val => val === '')) {
      alert("Please fill in all fields.");
      return;
    }
    onAddExpense(formData);
    setFormData({
      name: '',
      description: '',
      category: '',
      amount: '',
      date: ''
    });
  };

  return (
    <div className="expense-form-card">
      <h2>ADD EXPENSE</h2>
      <p>Enter your expense details below.</p>
      <form onSubmit={handleSubmit} className="expense-form">
     
          <input
            type="text"
            name="name"
            placeholder="Enter expense name"
            value={formData.name}
            onChange={handleChange}
          />
        
         <input
            type="text"
            name="description"
            placeholder="Enter expense description"
            value={formData.description}
            onChange={handleChange}
          />
     
          <input
            type="text"
            name="category"
            placeholder="Enter expense category"
            value={formData.category}
            onChange={handleChange}
        
          />
     
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
          />
       
          <div className="date-input">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
       

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseForm;


