
import { useState } from 'react'


import './App.css'

// components 
import Navbar from './component/navbar/navbar'

import Footer from './component/footer/Footer'

import UserList from './component/userList/userList'

import NewUserForm from './component/newuser/NewUserForm'


function App() {

  const [showModal, setshowModal] = useState(false)

  const [users, setUsers] = useState([])

  const AddUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setshowModal(false)
  }



  const handleDelete = (id) => {
    const filtered = users.filter((userid) => {
      return userid.id !== id
    })
    setUsers(filtered)
  }

  const closeModal = (e) => {
    if (e.target.className === "overlay") setshowModal(false)
    if (e.key === "Escape") setshowModal(false)
  }

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
      <Navbar usersLength={users.length}/>
        <main>
          <div className='no-users'>
            {users.length === 0 && <h2>No Users</h2>}
          </div>
          <UserList users={users} handleDelete={handleDelete}/>
        </main>
        {showModal && <NewUserForm AddUser={AddUser} />}
        <button className='create-user' onClick={() => setshowModal(true)} >Create User</button>
      <Footer/>
    </div>
  )
}

export default App

