import React from 'react';
import UsersForm from './UsersForm';

const EditUser = ({
    getUsers,
    selectedUser,
    setSelectedUser, 
    setShow, 
    showEdit, 
    setShowEdit
}) => {
    return (
        <div>
            <UsersForm 
                getUsers={getUsers} 
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                button={"Save changes"}
                setShow={setShow}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
            />
        </div>
    );
};

export default EditUser;