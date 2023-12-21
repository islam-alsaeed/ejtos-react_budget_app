import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, spending,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);

        if (updatedBudget > 20000) {
            alert('You have reached the upper limit');
        } else if (updatedBudget < spending) {
            alert('You cannot reduce the budget value lower than the spending');
        } else {
            setNewBudget(updatedBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: updatedBudget,
            });
        }
    };


    return (
        <div className='alert alert-secondary'>
            <span style={{ marginRight: ".1rem" }}>Budget: {currency} </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={{ marginLeft: '0rm' }}></input>
        </div>
    );
};

export default Budget;
