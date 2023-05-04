import React from 'react';
import s from '../PostNews/postNewsStyle.module.scss';

const MySelect = ({options, value, onChange}) => {
    return (
        <select className={s.buttom}
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