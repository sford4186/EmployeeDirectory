import React from 'react';
import TableBody from '../TableBody'

const Table = props => {
    return (
        <>
          
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col" onClick={()=>props.sort("name","first")}>First</th>
                        <th scope="col" onClick={()=>props.sort("name","last")}>Last</th>
                        <th scope="col" onClick={()=>props.sort("login","username")}>Username</th>
                        <th scope="col" onClick={()=>props.sort("email")}>Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map((employee, i) => (
                        <TableBody
                            key={employee.login.uuid}
                            employee={employee}
                            num={i + 1}
                        />


                    ))}

                </tbody>
            </table>
        </>
    )

}

export default Table;