import React from 'react'
import cars from '../assets/image/cars.png'
import '../assets/css/main.css'
import { Icon, TextArea,  Form } from 'semantic-ui-react'

const Main = ({ history }) => {
  return (
    <div className=''>
      <div className='contain-img'>
        <img src={cars} alt="car" className='img-car' onClick={() => history.push('/history')} />
      </div>

      <div className='card'>
        <div className="ui inverted divided padded equal width grid">
          <div className="center aligned row">
            <div className="column">
              Ford
            </div>
          </div>
          <div className="center aligned row">
            <div className="column">
              <label>เข้ารับบริการครั้งต่อไป 01/01/2565</label>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <Icon color='orange' name='car' />
              <label>Focus</label>
            </div>
            <div className="column">
              <Icon color='teal' name='table' />
              <label>กขค 1234</label>
            </div>
            <div className="column">
              <Icon color='red' name='map marker alternate' />
              <label>เชียงใหม่</label>
            </div>
          </div>
          <div className="row">

            <div className="column">
              <Icon color='pink' name='cart' />
              <label>สีขาว</label>
            </div>
            <div className="column">
              <Icon color='grey' name='clock outline' />
              <label>5000 km.</label>
            </div>
            <div className="column">
            </div>
          </div>
        </div>
      </div>

      <div className='card'>
        <div className="ui inverted divided padded equal width grid">

          <div className="center aligned row">
            <div className="column">
              <label>เข้ารับบริการครั้งล่าสุด 07/07/2565</label>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <Form>
                <TextArea rows={5} placeholder='Note ...' />
              </Form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Main
