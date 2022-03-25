//styles
import './styles/root.css';
import './styles/resetStyles.css';

import './styles/App.css';
import './styles/module.css';

import './styles/develop.css'

//react
import { useEffect, useState } from 'react';

//axios
import axios from 'axios';

//components
import UsersList from './components/UsersList';

//utilities
import './utilities/u.css';
import Module from './components/Module';


function App() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([])
  const [showModule1, setShowModule1] = useState(false)

  const [showCreate, setShowCreate]=useState(false)
  const space = '\u00A0';


  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = () =>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res=>setUsers(res.data))
  }

  return (
    <div className='App'>
      <section className='App-section-title'>
        <h1 className='App-title'><b>Users</b></h1>
        <button className='u-button App-button-create-new-user'
          onClick={()=>{
            setShowModule1(true)
            setShowCreate(true)
          }}
        >
          <p className='App-create-new-user-plus'>+{space}</p>
          <p className='App-create-new-user-text'>Create new user</p>
        </button>
      </section>

      {
        showModule1 &&
        <Module 
          title="New User" 
          setShow={setShowModule1}
          getUsers={getUsers} 
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          showCreate={showCreate}
          setShowCreate={setShowCreate}
        />
      }

      <UsersList 
        users={users} 
        getUsers={getUsers} 
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        show={showModule1}
        setShow={setShowModule1}
      />
    </div>
  );
}

export default App;
