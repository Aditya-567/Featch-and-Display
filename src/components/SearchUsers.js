import React, { useState } from 'react';
import Body from './Body';
import UsersTable from './UsersTable';

function SearchUsers() {
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        if (query) {
            fetch(`https://dummyjson.com/users/search?q=${query}`)
                .then(response => response.json())
                .then(data => setUsers(data.users))
                .catch(error => console.error('Error fetching data: ', error));
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <Body />
                </div>
                <div style={{ paddingTop: '100px' }}>
                    <h1>Search User Here ...</h1>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            style={{ height: '30px', width: '220px' }}
                        />
                        <button type="submit" style={{ height: '38px', width: '60px' }}>Search</button>
                    </form>
                </div>

            </div>
            {users.length > 0 ? (
                <UsersTable users={users} />
            ) : (
                <p>No users found or begin your search.</p>
            )}
        </div>
    );
}

export default SearchUsers;