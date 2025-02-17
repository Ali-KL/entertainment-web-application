
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/users/usersActions';
import SingleUser from './SingleUser';

function UsersDashboard() {
    const allUsers = useSelector(state => state.user.users);
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, []);
    return (
        <>
            <div className="content-wrapper container">
                <div className="page-content">
                    <table class="table table-striped table-dark mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">name</th>
                                <th scope="col">type</th>
                                <th scope="col">email</th>
                                <th scope="col">edit</th>
                                <th scope="col">delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map(user => (
                                <SingleUser key={user.id} {...user} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UsersDashboard