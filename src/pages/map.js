import React from 'react'
import { Icon } from 'semantic-ui-react'
import mapPicture from '../assets/image/mappic.jpg'
// import moduleName from '../assets/image/'

const Map = ({ history }) => {
  return (
    <div className='card-map'>

      <div className="ui inverted divided padded equal width grid" >
        <div className="center aligned row">
          <div className="three wide column"> <Icon name='map marker alternate' inverted circular color='teal' /></div>
          <div className="eight wide column"><label className='text-contact'>222 ถ.สุขุมวิท กรุงเทพ ประเทศไทย</label></div>
          <div className="column">
            <label className='text-contact'>
              <Icon name='compass' inverted circular color='red' size='large' />
            </label>
          </div>
        </div>
      </div>

      <div className='contain-img'>
        <img src={mapPicture} alt="car" className='img-car' onClick={() => history.push('/history')} />
      </div>

      <div className='card'>
        <div className="ui inverted divided padded equal width grid" >
          <div className="center aligned row">
            <div className="column">
              <Icon name='phone' inverted circular color='teal' />
              <label className='text-contact'>เบอร์โทร</label>
            </div>
            <div className="column">
              <Icon name='comment alternate' inverted circular color='teal' />
              <label className='text-contact'>ข้อความ</label>
            </div>
          </div>
        </div>

        <div className="ui grid" >
          <div className="row">
            <div className="four wide right aligned column">
              <Icon name='user' inverted circular color='teal' />
            </div>
            <div className="twelve wide column">
              <label className='text-contact'>คลิกเพื่อโทรหาเจ้าหน้าที่</label>
            </div>
          </div>
        </div><br />
      </div>
    </div>
  )
}
export default Map