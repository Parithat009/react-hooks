import React, { useState } from 'react'
import { Icon, Step } from 'semantic-ui-react'

const Contact = (props) => {

  const mockData = [
    { activity: 'เปลี่ยนยาง', distance: '50000 km', date: '1/2/2563', price: 5000 },
    { activity: 'เปลี่ยนครัช', distance: '40000 km', date: '1/3/2563', price: 4000 },
    { activity: 'เช็คระยะ', distance: '20000 km', date: '1/4/2563', price: 3000 },
    { activity: 'ซ่อมเบรค', distance: '10000 km', date: '1/5/2563', price: 2000 },
    { activity: 'ซ่อมกระจก', distance: '8000 km', date: '1/6/2563', price: 1000 }
  ]

  return (
    <div className='card'>
      <Step.Group vertical size='mini' style={{ width: '100%' }}>
        {mockData && mockData.map((item, i) => (
          <Step key={i} onClick={() => props.history.push('/map')} >
            <Icon name='car' inverted circular color='teal' />
            <Step.Content style={{ width: '94%' }} >
              <Step.Title>{item.activity}</Step.Title><br />
              <div className="ui two column grid">
                <div className="row">
                  <div className="column">
                    <Step.Description><Icon name='map marker alternate' color='grey' /><label className='text-contact'>อู่ใจดี กรุงเทพ</label> </Step.Description>
                    <Step.Description><label className='text-contact'>ระยะทาง : {item.distance}</label></Step.Description>
                  </div>
                  <div className=" column">
                    <Step.Description><label className='text-contact'>{item.date}</label></Step.Description>
                    <Step.Description><label className='text-contact'>THB : {item.price}</label></Step.Description>
                  </div>
                </div>
              </div>

            </Step.Content>
          </Step>
        ))}
      </Step.Group>
    </div>
  )
}

export default Contact
