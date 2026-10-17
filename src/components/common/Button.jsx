import BUTTON_VARIANTS from '../../constants/buttonVariants'

function Button({
  children,
  type = 'button',
  variant = BUTTON_VARIANTS.PRIMARY,
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button