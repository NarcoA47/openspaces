import React, {useRef, useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import '../styles/header.css' 
import RoomIcon from '@mui/icons-material/Room';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MdMyLocation } from 'react-icons/md'
import edit from '../img/static/edit.png';
import inbox from '../img/static/envelope.png';
import settings from '../img/static/settings.png';
import help from '../img/static/question.png';
import logout from '../img/static/log-out.png';
import {Link} from 'react-router-dom'


function Header() {

    const [isCaretActive, setIsCaretActive] = useState(false)
    const [open, setOpen] = useState(false);
    const navRef = useRef();
    let menuRef = useRef();

    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });

    return (
        <div className='mobile-container header'>
            <div className='Header-Body'>
            <div className='max-width Main-Header-Container'>
            <Link to='/'><div className='header-logo'><h2>UnistayRooms</h2></div></Link>
            <nav ref={navRef}>
            <div className='header-center'>
                <div className='location-search-container'>
                    <div className='location-wrapper'>
                        <div className='location-name'>
                        <RoomIcon className='icon absolute-center' />
                        <div className='location-name'>Lusaka</div>
                        </div>
                        <div className='absolute-center caret-down' onClick={()=>{setIsCaretActive(!isCaretActive)}}>
                        
                            {isCaretActive ? <KeyboardArrowUpIcon className='absolute-center' /> : <KeyboardArrowDownIcon className='absolute-center' />}
                        </div>
                        
                    </div>
                    <div className='separator'></div>
                    <div className='header-search'>
                        <div className='FieldSet'>
                        <input placeholder="search here" className='search-input'/>
                        </div>
                        <div className='absolute-center'>
                            <SearchIcon className='absolute-center icon search-icon'/>
                        </div>
                        
                    </div>
                    <div className={`${isCaretActive ? 'user-location' : 'user-location-inactive'}`}>
                        <h3 className='user-location-header'>use your current location</h3>
                        <MdMyLocation className='absolute-center user-location-icon'/>
                    </div>
                </div>
            </div>
            </nav>
            <div className='Character'>
            <div className='profile-wrapper'>
                <div className='menu-container' ref={menuRef}>
                    <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                        <Link to='/Login'><span className='absolute-center'>Signin</span></Link>
                        {open ? <KeyboardArrowUpIcon className='absolute-center' /> : <KeyboardArrowDownIcon className='absolute-center' />}
                        
                    </div>
                    <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                    <h3>User<br/><span>unistayrooms</span></h3>
                    <ul>
                        <Link to='/dashboard'><DropdownItem img = {edit} text = {"Account"}/></Link>
                        <Link to=''><DropdownItem img = {inbox} text = {"Inbox"}/></Link>
                        <Link to='/settings'><DropdownItem img = {settings} text = {"Settings"}/></Link>
                        <Link to=''><DropdownItem img = {help} text = {"Help"}/></Link>
                        <DropdownItem img = {logout} text = {"Logout"}/>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}


function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
  }

export default Header