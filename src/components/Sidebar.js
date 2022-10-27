import { NavLink } from 'react-router-dom';

const Sidebar = ({categories}) => {
  
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
        {
          categories.map((category, i) => {
            return (
              <NavLink
                key={i}
                to={`/tasks/${category}` /* replace house with dynamic category*/}
              >
                {category}
              </NavLink>
            );
          })
        }
      </nav>
      <div className="sidebar_exit">
        <NavLink to="/">exit</NavLink>
      </div>
    </div>
  )
}

export default Sidebar