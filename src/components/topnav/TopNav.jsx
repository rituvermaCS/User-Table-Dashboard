import React from 'react'

import './topnav.css'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

const curr_user = {
    display_name: 'Ritu Verma',
}

const renderUserToggle = (user) => (
    <div className='top__right-user'>
        <div className='topnav__right-user__name'>
            {user.display_name}
        </div>
    </div>
)

const TopNav = () => {
  return (
    <div className='topnav'>
        <div className="topnav__search">
            <input type="text" placeholder='Search here...'/>
            <i className='bx bx-search'></i>
        </div>
        <div className="topnav__right">
            <div className="topnav__right-item">
                <Dropdown 
                     customToggle={() => renderUserToggle(curr_user)}
                />
            </div>
            <div className="topnav__right-item">
                <ThemeMenu/>
            </div>
        </div>
    </div>
  )
}

export default TopNav
