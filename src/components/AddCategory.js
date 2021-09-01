import React, { useState } from 'react';
import Proptypes from 'prop-types';

export const AddCategory = ({ setCategory }) => {

    const [inputValue, setInputValue] = useState('')
    
    const changeValue = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategory(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }

    
    return (
        
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                value={inputValue}
                onChange={ changeValue}
                
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategory: Proptypes.func.isRequired
}


// AddCategory.proptypes = {
//     setCategory: Proptypes.func.isRequired
// }