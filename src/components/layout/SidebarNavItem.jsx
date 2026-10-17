import { NavLink } from 'react-router-dom'

function SidebarNavItem({ to, label, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebar-nav-item${isActive ? ' sidebar-nav-item--active' : ''}`
      }
    >
      <span className="sidebar-nav-item__icon" aria-hidden="true">
        {icon}
      </span>

      <span className="sidebar-nav-item__label">{label}</span>
    </NavLink>
  )
}

export default SidebarNavItem