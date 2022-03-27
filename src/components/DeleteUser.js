import React from 'react';
import UsersForm from './UsersForm';

const DeleteUser = ({
    users,
    getUsers,
    selectedUser,
    setSelectedUser,
    setShow, 
    showDelete, 
    setShowDelete
}) => {
    return (
        <div>
            <UsersForm
                 setUsers={users}
                 title="Delete User"
                 setShow={setShow}
                 getUsers={getUsers}
                 selectedUser={selectedUser}
                 setSelectedUser={setSelectedUser}
                 button={"Accept"}
                 content1="The user"
                 content2="has been deleted"
                 showDelete={showDelete}
                 setShowDelete={setShowDelete}

            />
        </div>
    );
};

export default DeleteUser;