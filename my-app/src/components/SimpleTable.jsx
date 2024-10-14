import React from 'react';

function SimpleTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mikita</td>
                    <td>21</td>
                    <td>Warsaw</td>
                </tr>
                <tr>
                    <td>Pavel</td>
                    <td>22</td>
                    <td>Lublin</td>
                </tr>
                <tr>
                    <td>Jan</td>
                    <td>19</td>
                    <td>Poznan</td>
                </tr>
            </tbody>
        </table>
    );
}

export default SimpleTable;