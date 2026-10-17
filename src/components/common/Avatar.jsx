function Avatar({ name, imageUrl }) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')

  return (
    <div className="avatar">
      {imageUrl ? (
        <img className="avatar__image" src={imageUrl} alt={name} />
      ) : (
        <span className="avatar__initials">{initials}</span>
      )}
    </div>
  )
}

export default Avatar