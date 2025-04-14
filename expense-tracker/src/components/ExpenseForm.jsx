import React, { useState } from 'react';
import './ExpenseForm.css';

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
        <label>
          Expense Name:
          <input
            type="text"
            name="name"
            placeholder="e.g. Rent"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            placeholder="e.g. April Rent Payment"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Expense Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Amount:
          <input
            type="number"
            name="amount"
            placeholder="e.g. 1000"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>

        <label>
          Date:
          <div className="date-input">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <span className="calendar-icon">📅</span>
          </div>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseForm;


