import React, { useEffect, useContext } from 'react'
import { AppContext, Consumer, OPEN_LOADER, CLOSE_LOADER } from '../hook'

const MyApp = () => {
  const { getData } = useContext(AppContext)

  useEffect(() => {
    getData()
  }, [])

  return (
    <Consumer>
      {({ products, dispatchLoader, loader }) => {
        console.log('reduxsdf', products, loader)
        return <>
          {products && products.all && products.all.map(item => (
            <p key={item.id}>{item.id}-{item.name}</p>
          ))}
          <button onClick={() => dispatchLoader({ type: OPEN_LOADER, message: 'กำลังโหลดข้อมูล' })}>OPEN LOADER นิ</button>
          <button onClick={() => dispatchLoader({ type: CLOSE_LOADER })}>CLOSE loader 000</button>
          <button onClick={() => console.log('0000')}>click 0000</button>
        </>
      }}
    </Consumer>
  )
}

export default MyApp
