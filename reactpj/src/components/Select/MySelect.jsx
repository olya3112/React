import React from 'react';

const MySelect = ({options, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            {options.map( options =>
                <option key={options.value} value={options.value}>
                    {options.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;