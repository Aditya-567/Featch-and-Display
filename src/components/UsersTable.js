import React from 'react';

function UsersTable({ users }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.firstName} {user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}, {user.address.country}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UsersTable;