function TextField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
}) {
  return (
    <div className="text-field">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextField