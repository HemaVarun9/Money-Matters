import Avatar from '../common/Avatar'

function UserBadge({ name, email, imageUrl }) {
  return (
    <div className="user-badge">
      <Avatar name={name} imageUrl={imageUrl} />

      <div className="user-badge__details">
        <p className="user-badge__name">{name}</p>
        <p className="user-badge__email">{email}</p>
      </div>
    </div>
  )
}

export default UserBadge