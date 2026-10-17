import Button from './Button'
import BUTTON_VARIANTS from '../../constants/buttonVariants'

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message" role="alert">
      <h3>Something went wrong</h3>

      <p>{message}</p>

      <Button
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={onRetry}
      >
        Try Again
      </Button>
    </div>
  )
}

export default ErrorMessage