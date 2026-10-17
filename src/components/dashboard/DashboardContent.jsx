import StatsGrid from './StatsGrid'
import StatCard from './StatCard'
import RecentTransactions from './RecentTransactions'
import WeeklyChart from './WeeklyChart'

function DashboardContent({
  creditTotal,
  debitTotal,
  balance,
  transactions = [],
  weeklyData = [],
}) {
  return (
    <>
      <StatsGrid>
        <StatCard
          title="Total Credit"
          amount={creditTotal}
          description="Total money received"
        />

        <StatCard
          title="Total Debit"
          amount={debitTotal}
          description="Total money spent"
        />

        <StatCard
          title="Balance"
          amount={balance}
          description="Remaining balance"
        />
      </StatsGrid>

      <RecentTransactions transactions={transactions} />

      <WeeklyChart data={weeklyData} />
    </>
  )
}

export default DashboardContent