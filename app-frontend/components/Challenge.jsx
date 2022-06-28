import React, { useState } from 'react';
import Card from './Card'
import Table from './Table'

let index = 1

const Challenge = ({ randomuser }) => {
	let data = randomuser.results
	const [users, setUsers] = useState(data);
	const [toggle, setToggle] = useState(false);
	const [newUser, setNewUser] = useState(1)

	const addUser = async () => {
		const res = await fetch('https://randomuser.me/api/?inc=name,picture,location&results=1&noinfo')
		const singleUser = await res.json()

		users.push(singleUser.results[0])

		index++
		setNewUser(index)
	}

	return (
		<div className='flex flex-wrap items-center justify-around min-w-full mt-6 sm:w-full'>
			<div className='p-6 mt-6 text-left border w-full rounded-xl'>
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">Users</h1>
						<p className="mt-2 text-sm text-gray-700">
							Click a user to remove them or alternate view.
						</p>
					</div>
					<div className="mt-4 flex sm:mt-0 sm:ml-16 sm:flex sm:justify-center">
						<button
							onClick={() => setToggle(!toggle)}
							type="button"
							id="switcher"
							className="inline-flex mr-20 items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
						>
							{toggle
								? <span>Image View</span>
								: <span>Table View</span>
							}
						</button>
						<button
							onClick={addUser}
							type="button"
							id="addition"
							className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
						>
							Add User
						</button>
					</div>
				</div>

				{/* SWITCH */}
				{!toggle
					?
					// GRID
					<ul role="list" className="grid grid-cols-1 gap-6 mt-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{newUser >= 1 &&
							<Card users={users} setUsers={setUsers} />
						}
					</ul>
					:
					// TABLE
					<div className="px-4 sm:px-6 lg:px-8">
						<div className="mt-8 flex flex-col">
							<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
									<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
										<table className="min-w-full divide-y divide-gray-300">
											<thead className="bg-gray-50">
												<tr>
													<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
														Name
													</th>
													<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
														Location
													</th>
												</tr>
											</thead>
											{newUser >= 1 &&
												<Table users={users} setUsers={setUsers} />
											}
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		</div >
	);
};

export default Challenge;
