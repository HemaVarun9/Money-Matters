function StatCard({ title, amount, currency = '₹', description }) {
  return (
    <article className="stat-card">
      <p className="stat-card__title">{title}</p>

      <h2 className="stat-card__amount">
        {currency}
        {Number(amount).toLocaleString('en-IN', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h2>

      {description && (
        <p className="stat-card__description">{description}</p>
      )}
    </article>
  )
}

export default StatCard