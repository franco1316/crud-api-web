import React from 'react';
import imgUpdate from '../Assets/write.png';
import imgDelete from '../Assets/bin.png';
import imgGift from '../Assets/gift.png';
import '../styles/usersList.css'
import u from '../utilities/u';

const UsersList = ({users, setSelectedUser}) => {
    return (
        <div className="ul-layout">
            <article className='ul-grid'>
                {
                    users.map(user=>(
                        <section
                            key={user.id}
                            className="ul-box"
                        >
                            <li>
                                <ul>
                                    <h2 className='ul-user-name'>
                                        <b>{user.first_name} {user.last_name}</b>
                                    </h2>
                                </ul>
                                <hr className='ul-separator'/>
                                <ul>
                                    <h3 className='ul-field'>
                                        Email
                                    </h3>
                                    <p className="ul-info">
                                        {user.email}
                                    </p>
                                </ul>
                                <ul>
                                    <h3 className='ul-field'>
                                        Birthday
                                    </h3>
                                    <section className="ul-birthday">
                                        <div className="u-container-icon">
                                            <img
                                                src={imgGift} alt="Gift"
                                                className="u-icon">
            
                                            </img>
                                        </div>
                                        <p className="ul-info">
                                            {u.space} {user.birthday}
                                        </p>
                                    </section>
                                </ul>
                                <hr className='ul-separator'/>
                                <ul className='ul-all-end'>
                                    <div className='ul-container-buttons'>
                                        <button
                                            onClick={()=>setSelectedUser([user, "put"])}
                                            className='u-container-icon ul-container-edit'>
                                                <img
                                                    src={imgUpdate} alt="Update"
                                                    className='ul-icon ul-edit'
                                                />
                                        </button>
                                        <button
                                            onClick={()=>setSelectedUser([user, "delete"])}
                                            className='u-container-icon ul-container-delete'>
                                                <img
                                                    src={imgDelete} alt="delete"
                                                    className='ul-icon ul-delete'
                                                />
                                        </button>
                                    </div>
                                </ul>
                            </li>
                        </section>
                    ))
                }
            </article>
        </div>
    );
};

export default UsersList;