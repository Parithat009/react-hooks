import React from 'react'
import { NavLink } from 'react-router-dom'
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import '../../assets/css/layout/AppSidebar.css'


const AppSidebar = () => {
  return (
    <nav>
      <input type='checkbox' id='check' />
      <label htmlFor='check' className='checkbtn'>
        <UploadOutlined />
      </label>

      <label className='logo'>Hanuman World Phuket</label>

      <ul>
        {/* <li className='listName'>LOGO NAME </li> ใช้ในกรณี่ชื่อมันยาวๆ  */}
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>About</NavLink></li>
        {/* <li><NavLink href='#'>Service</NavLink></li>
        <li><NavLink href='#'>Contact Us</NavLink></li>
        <li><NavLink href='#'>Feedback</NavLink></li> */}
      </ul>
    </nav>
  )
}

export default AppSidebar
