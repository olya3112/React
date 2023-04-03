import React, {useMemo, useState} from 'react';




export function Comments (props)  {

    return (
        <li>
            <div>
                {props.author}
            </div>
            <div>
                {props.text}
            </div>
        </li>

    );
};

export default Comments;