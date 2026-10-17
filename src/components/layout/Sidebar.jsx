import SidebarNavItem from './SidebarNavItem'
import Logo from '../common/Logo'
import UserBadge from './UserBadge'

function Sidebar({ name, email, imageUrl, navigationItems }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <Logo />

        <nav className="sidebar__navigation" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <SidebarNavItem
              key={item.to}
              to={item.to}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </nav>
      </div>

      <UserBadge name={name} email={email} imageUrl={imageUrl} />
    </aside>
  )
}

export default Sidebar