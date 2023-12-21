import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <select className="alert alert-secondary"
            value={currency}
            onChange={handleCurrencyChange}
            style={{
                // marginLeft: '2rem',
                width: '100%'
            }}
        >
            <option value="" >
                Select Currency
            </option>
            <option value="$"> $ Dollar</option>
            <option value="£"> £ Pound</option>
            <option value="€"> € Euro</option>
            <option value="₹"> ₹ Rupee</option>
        </select>

    );
};

export default Currency;
