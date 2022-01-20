import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './form.scss';

const Form = ({submitSearch}) => {
    const [ location, setLocation ] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!location || location === '') return;
        submitSearch(location);
    }
    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    aria-label="location" 
                    className="input form-control"
                    placeholder="Search for location"
                    required 
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                />
                <button
                    type="submit" 
                    className="button"
                    onClick={onSubmit}
                >
                    SEARCH
                </button>
            </form>
        </div>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};

export default Form;