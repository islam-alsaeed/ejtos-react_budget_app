import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, spending } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const handleSaveBudget = () => {
        if (newBudget < spending) {
            alert('You cannot reduce the budget value lower than the spending')
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: parseInt(newBudget),
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span style={{ marginRight: "1rem" }}>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={{ marginLeft: '2rm' }}></input>
            <button className="btn btn-primary" onClick={handleSaveBudget} style={{ marginLeft: '1rem' }}>Save</button>
        </div>
    );
};

export default Budget;
