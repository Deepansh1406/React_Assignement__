import React from 'react'
import { BsArchiveFill, BsCart3, BsFillArchiveFill, BsFillGearFill, BsFillGrid1X2Fill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsListCheck, BsPeopleFill } from 'react-icons/bs'
function Sidebar({openSidebarToggle, openSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className="sidebar-title">
            <div className="sidebar-brand">
                <BsCart3 className='icon_header'/>DashBoard
            </div>
            <span className='icon close_icon' onClick={openSidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-items'>
                <a href="">
                    <BsGrid1X2Fill className='icon' />DashBoard
                </a>
            </li>
            <li className='sidebar-list-items'>
                <a href="">
                    <BsFillArchiveFill className='icon' />Product
                </a>
            </li>
            <li className='sidebar-list-items'>
                <a href="">
                    <BsPeopleFill className='icon' />Customers
                </a>
            </li>
            <li className='sidebar-list-items'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon' />Promote
                </a>
            </li>
            <li className='sidebar-list-items'>
                <a href="">
                    <BsFillGearFill className='icon' />Help
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar