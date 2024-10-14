import React from 'react';

function NestedList() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>
                3
                <ul>
                    <li>3.1</li>
                    <li>3.2</li>
                </ul>
            </li>
        </ul>
    );
}

export default NestedList;