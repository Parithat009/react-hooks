import React, { useContext, useEffect, useState } from 'react'
import '../assets/css/main.css'
import { AppContext } from '../hook'
import ListRender from '../components/listRender'
import { Icon } from 'semantic-ui-react'

const Main = () => {
  const [filterUsers, setFilterUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const { getData, users, editStatusUsers } = useContext(AppContext)

  useEffect(() => {
    setLoading(true)
    getData().then(res => {
      if (res.status === 'success') {
        setLoading(false)
      }
    })
  }, [])

  useEffect(() => {
    setFilterUsers(
      users && users.length > 0 && users.filter(user => {
        return user.name.toLowerCase().indexOf(search) !== -1
      })
    )
  }, [search, users])


  if (loading) {
    return <div className="loaders"><div className='loader'></div></div>
  }
  else {
    return (
      <div className='card'>

        <div className='card-content'>
          <div className='center column-2'>
            <Icon name='search' color='grey' />
            <input type='text' className='text-input' placeholder='Find by name'
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              value={search}
            />
          </div>
          <div className='column-1'>
            <label className='list-text'>{users && users.length} People</label>
          </div>
        </div>

        {
          filterUsers && filterUsers.length > 0 && filterUsers.map((user, i) => (
            <ListRender user={user} key={i} editStatusUsers={editStatusUsers} />
          ))
        }

      </div>
    )
  }
}
export default Main
