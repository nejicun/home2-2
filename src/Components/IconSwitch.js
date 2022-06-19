import React from 'react'
import PropTypes from 'prop-types'

function IconSwitch(props) {
    console.log(props)

    let icon = ''
    if (props.icon){
       icon = "view_list"
    } else {
        icon = "view_module"
    }
    
  return (
        <div className='icon'>
          <span className="material-icons" onClick={props.onSwitch}>{icon}</span>
        </div>
        
 
  )
}

IconSwitch.propTypes = {}

export default IconSwitch
