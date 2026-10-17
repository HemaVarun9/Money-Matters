import Button from './Button'
import BUTTON_VARIANTS from '../../constants/buttonVariants'

function ConfirmDialog({
  title,
  message,
  confirmLabel,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="confirm-dialog">
      <h2>{title}</h2>

      <p>{message}</p>

      <div className="confirm-dialog__actions">
        <Button
          variant={BUTTON_VARIANTS.SECONDARY}
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          variant={BUTTON_VARIANTS.DANGER}
          onClick={onConfirm}
        >
          {confirmLabel}
        </Button>
      </div>
    </div>
  )
}

export default ConfirmDialog