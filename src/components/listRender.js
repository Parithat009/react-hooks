import React from 'react'
import { Icon } from 'semantic-ui-react'

const ListRender = ({ user, editStatusUsers }) => {
  // console.log(user);
  return (
    <div>
      <div className='card-content'>
        <div className='center column-1'>
          <label> <Icon name='user' circular inverted color='teal' /></label>
        </div>
        <div className='divide column-3'>
          <label className='list-text'>{user.name}</label>
          <label className='listDeep-text'>{user.email}</label>
        </div>
        <div className='column-1'>
          <label className='listAction-text' onClick={() => editStatusUsers(user.id)}>Member </label>
          <Icon name={`${user.status ? 'angle down' : 'angle right'}`} color='teal' onClick={() => editStatusUsers(user.id)} />
        </div>
      </div>

      {user.status
        ? <div className='card-detail'>
          <div className='column-2'>
            <label className='listDeep-text'>Address : {user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}</label>
          </div>
        </div> : ''
      }
    </div>
  )
}

export default ListRender