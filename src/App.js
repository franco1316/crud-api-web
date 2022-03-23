//styles
import './styles/root.css';
import './styles/resetStyles.css';

import './styles/App.css';

import './styles/develop.css'

//react
import { useEffect, useState } from 'react';

//axios
import axios from 'axios';

//components
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import CreateUser from './components/CreateUser';

//utilities
import './utilities/u.css';
import u from './utilities/u';


function App() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([])
  const [color, setColor] = useState("true")

  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = () =>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res=>setUsers(res.data))
  }

  return (
    <div className={`App ${color?'bg-light':'bg-dark'} `}>
      <section className='App-section-title'>
        <h1 className='App-title'>Users</h1>
        <button className='u-button App-button-create-new-user'>
          <p className='App-create-new-user-plus'>+{u.space}</p>
          <p className='App-create-new-user-text'>Create new user</p>
        </button>
      </section>
      
      <UsersList 
        users={users} 
        setSelectedUser={setSelectedUser}
      />

      <CreateUser
        getUsers={getUsers} 
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
}

export default App;
