import React, { useContext } from 'react'
import SubSection from './SubSection'
import { UserContext } from '../Context/UserContext'
import Cart from './Cart';

function Section() {
  const {users} = useContext(UserContext);
  return (

      <div className='section'>
        {
        users.map(user => {return <Card key={user.id} user={user}/>})
        }
      </div>

  )
}

export default Section

