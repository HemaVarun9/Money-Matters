import Button from '../common/Button'
import BUTTON_VARIANTS from '../../constants/buttonVariants'

function PageHeader({ title, description, actionLabel, onAction }) {
  return (
    <header className="page-header">
      <div className="page-header__text">
        <h1 className="page-header__title">{title}</h1>
        {description && (
          <p className="page-header__description">{description}</p>
        )}
      </div>

      {actionLabel && (
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </header>
  )
}

export default PageHeader