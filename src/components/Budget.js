import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const handleSaveBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget),
        });
    };

    const handleIncreaseBudget = () => {
        setNewBudget((prevBudget) => prevBudget + 10);
    };

    const handleDecreaseBudget = () => {
        setNewBudget((prevBudget) => prevBudget - 10);
    };

    return (
        <div className='alert alert-secondary'>
            <span style={{marginRight:"1rem"}}>Budget: £{budget}</span>
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={{marginLeft:'2rm'}}></input>
            
            <div style={{ marginTop: '1rem' }}>
                <button className="btn btn-success" onClick={handleIncreaseBudget}>Increase by 10</button>
                <button className="btn btn-danger" onClick={handleDecreaseBudget} style={{ marginLeft: '1rem' }}>Decrease by 10</button>
                <button className="btn btn-primary" onClick={handleSaveBudget} style={{ marginLeft: '1rem' }}>Save</button>
            </div>
        </div>
    );
};

export default Budget;
