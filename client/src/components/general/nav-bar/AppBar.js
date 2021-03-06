import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
//import { BsSearch } from 'react-icons/bs'
import { FaSignOutAlt } from 'react-icons/fa'
import { BsChatDots } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'
import logo from './_reuse/logo.png'
import burger from './_reuse/burger.png'
import './AppBar.css'
import { NavItem } from './_reuse/NavComponents'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../../../redux/actions/loginsAction'

function AppBar(props) {
    const [state, setState] = useState(false)
    const toggleDrawer = () => () => {
        setState(!state)
    }
    const handleLogout = () => {
        props.dispatch(startLogout())
    }
    const history  = useHistory()
    return (
        <div className='app-bar-contain'>
            <nav>
                <img src={logo} alt='chatbot' className='logo-appbar' onClick={() => {
                    history.push('/')
                }}/>
                <button><img src={burger} alt='menu' className='burger-menu' onClick={toggleDrawer(true)}/></button>
                <Drawer anchor={'top'} open={state} onClose={toggleDrawer()} >
                    <div className='appbar-drawer'>
                        <NavItem to='/users/friends' name={<FaUserFriends/>}  styleClassLi='appBarLi' onClick={toggleDrawer()}/>
                        <NavItem to='/users/chat' name={<BsChatDots/>} styleClassLi='appBarLi' onClick={toggleDrawer()}/>
                        <NavItem to='#' name={<FaSignOutAlt/>} styleClass='sign-out' styleClassLi='appBarLi'
                            onClick = {handleLogout} 
                            />
                    </div>
                </Drawer>
            </nav>
        </div>
    )
}

export default connect()(AppBar)
