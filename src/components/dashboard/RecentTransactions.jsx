import TransactionTypeIcon from '../common/TransactionTypeIcon'
import EmptyState from '../common/EmptyState'

function RecentTransactions({ transactions = [] }) {
  return (
    <section className="recent-transactions">
      <h2 className="recent-transactions__title">Recent Transactions</h2>

      {transactions.length === 0 ? (
        <EmptyState
          title="No transactions yet"
          message="Your recent transactions will appear here."
        />
      ) : (
        <ul className="recent-transactions__list">
          {transactions.map((transaction) => (
            <li
              className="recent-transactions__item"
              key={transaction.id}
            >
              <div className="recent-transactions__details">
                <span className="recent-transactions__name">
                  {transaction.transaction_name}
                </span>
                <span className="recent-transactions__category">
                  {transaction.category}
                </span>
              </div>

              <div className="recent-transactions__amount">
                <TransactionTypeIcon type={transaction.type} />
                <span>
                  {transaction.type === 'debit' ? '−' : '+'}
                  ₹{Number(transaction.amount).toLocaleString('en-IN')}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default RecentTransactions