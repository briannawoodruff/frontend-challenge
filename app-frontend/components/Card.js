import React from 'react';

const Card = ({ users, setUsers }) => {
    const handleDelete = (name) => {
        const removeUser = users.filter((user => user.name.first !== name))
        setUsers(removeUser)
    }
    return (
        <>
            {users.length !== 0
                ? <>
                    {users.map((user) => (
                        <li
                            onClick={() => handleDelete(user.name.first)}
                            key={user.name.first}
                            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 cursor-pointer"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={user.picture.large} alt={user.name.last} />
                                <h3 className="mt-6 text-gray-900 text-sm font-medium">{user.name.first} {user.name.last}</h3>
                            </div>
                        </li>
                    ))}
                </>
                : <div className='m-10'>No persons...</div>
            }
        </>
    )
}

export default Card;