import React from 'react'
import PropTypes from 'prop-types'

const TabPaneComponent = ({ children }) => (
  <div className='tab-pane active'>
    { children } 
  </div>
)

TabPaneComponent.propTypes = {
  children: PropTypes.string.isRequired
}

export default TabPaneComponent