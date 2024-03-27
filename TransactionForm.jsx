import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTransaction } from '../actions/transactionActions';

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new transaction data
    const newTransaction = {
      ...formData,
      id: Math.floor(Math.random() * 1000000),
    };

    // Dispatch the action to add the new transaction
    dispatch(addTransaction(newTransaction));

    // Reset the form
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  const handleFilter = (e) => {
    // Your logic for filtering transactions
  };

  // Fetch saved transactions from the specified URL
  const handleFetch = async () => {
    try {
      const res = await fetch('http://localhost:3000/');
      const data = await res.json();
      dispatch({ type: 'SET_TRANSACTIONS', payload: data.transactions });
    } catch (err) {
      console.error(`Error fetching transactions: ${err}`);
    }
  };

  // Call the `handleFetch` function on initial render
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">Add Transaction</button>
      </form>
      <input
        type="text"
        placeholder="Search transactions..."
        onChange={handleFilter}
      />
    </div>
  );
};

export default TransactionForm;
