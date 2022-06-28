import React from 'react';

const Table = ({ users, setUsers }) => {
    const handleDelete = (name) => {
        const removeUser = users.filter((user => user.name.first !== name))
        setUsers(removeUser)
    }
    return (
        <>
            {users.length !== 0 
                ? <tbody className="divide-y divide-gray-200 bg-white cursor-pointer">
                    {users.map((user) => (
                        <tr key={user.name.first} onClick={() => handleDelete(user.name.first)}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                {user.name.first} {user.name.last}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.location.street.number} {user.location.street.name} {user.location.city}, {user.location.state} {user.location.postcode}, {user.location.country}</td>
                        </tr>
                    ))}
                </tbody>
                : <div className='m-10'>No persons...</div>
            }
        </>
    )
}

export default Table;