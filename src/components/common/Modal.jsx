import Button from './button'
import BUTTON_VARIANTS from '../../constants/buttonVariants'

function Modal({ title, children, onClose }) {
  return (
    <div className="modal-overlay">
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <header className="modal__header">
          <h2 id="modal-title">{title}</h2>

          <Button
            variant={BUTTON_VARIANTS.SECONDARY}
            onClick={onClose}
          >
            Close
          </Button>
        </header>

        <div className="modal__content">{children}</div>
      </section>
    </div>
  )
}

export default Modal