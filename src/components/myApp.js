import React, { useEffect, useContext } from 'react'
import { AppContext, Consumer, OPEN_LOADER, CLOSE_LOADER } from '../hook'
import '../assets/css/myApp.css'

const MyApp = () => {
  const { getData } = useContext(AppContext)

  useEffect(() => {
    getData()
  }, [])

  return (
    <Consumer>
      {({ products, dispatchLoader, loader }) => {
        console.log('0000', products, loader)
        return <>
          {products && products.all && products.all.map(item => (
            <p key={item.id}>{item.id}-{item.name}</p>
          ))}
          <button onClick={() => dispatchLoader({ type: OPEN_LOADER, message: 'กำลังโหลดข้อมูล' })}>OPEfdfN LOADER นิ</button>
          <button onClick={() => dispatchLoader({ type: CLOSE_LOADER })}>CLOSE loader</button>
          <button onClick={() => console.log('0000')}>click </button>

          <button className="ui primary button">Primary</button>
          <button className="ui secondary button">Secondary</button>
        </>
      }}
    </Consumer>
  )
}

export default MyApp
