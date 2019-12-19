import React, {useState} from 'react'

const initialFormState = { id: null, name: '', username: '' }
const [user, setUser] = useState(initialFormState)

const handleInputChange = event => {
  const { name, value } = event.target

  setUser({ ...user, [name]: value })
}
const addUserForm = props => {
    <form>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  )  
}

export default addUserForm
