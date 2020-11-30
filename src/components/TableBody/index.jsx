import React from 'react';

const TableBody = props => {
    return (
        <>

            <tr>
                <th scope="row">{props.num}</th>
                <td><img src={props.employee.picture.thumbnail} alt="new" /></td>
                <td>{props.employee.name.first}</td>
                <td>{props.employee.name.last}</td>
                <td>{props.employee.login.username}</td>
                <td>{props.employee.email}</td>
                <td>{props.employee.phone}</td>

            </tr>

        </>
    )
}

export default TableBody;