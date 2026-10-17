const TRANSACTION_TYPE_STYLES = {
  credit: {
    label: 'Credit',
    symbol: '+',
  },
  debit: {
    label: 'Debit',
    symbol: '−',
  },
}

function TransactionTypeIcon({ type }) {
  const transactionStyle = TRANSACTION_TYPE_STYLES[type]

  if (!transactionStyle) {
    return null
  }

  return (
    <span
      className={`transaction-type-icon transaction-type-icon--${type}`}
      aria-label={transactionStyle.label}
      title={transactionStyle.label}
    >
      {transactionStyle.symbol}
    </span>
  )
}

export default TransactionTypeIcon