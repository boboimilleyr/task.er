import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_profile">
        <img className='sidebar_profile_img' src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png" alt="avatar profile"/>
      </div>
      <nav className="sidebar_nav">
        <NavLink
          to='/tasks'
        >
          All
        </NavLink>
        <NavLink
          to={`/tasks/home` /* replace house with dynamic category*/}
        >
          House
        </NavLink>
        <NavLink
          to='/tasks/work'
        >
          Work
        </NavLink>
      </nav>
      <div className="sidebar_exit">
        <NavLink to="/">exit</NavLink>
      </div>
    </div>
  )
}

export default Sidebar