import { BrowserRouter } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import Sidebar from './components/layout/Sidebar'
import PageHeader from './components/layout/PageHeader'
import PageContent from './components/layout/PageContent'
import DashboardContent from './components/dashboard/DashboardContent'
import './App.css'

const NAVIGATION_ITEMS = [
  { to: '/dashboard', label: 'Dashboard', icon: '▦' },
  { to: '/transactions', label: 'Transactions', icon: '⇄' },
  { to: '/profile', label: 'Profile', icon: '◉' },
]

const SAMPLE_TRANSACTIONS = [
  {
    id: 1,
    transaction_name: 'Salary',
    category: 'housing',
    type: 'credit',
    amount: 25000,
  },
  {
    id: 2,
    transaction_name: 'Shopping',
    category: 'shopping',
    type: 'debit',
    amount: 2500,
  },
  {
    id: 3,
    transaction_name: 'Rent',
    category: 'housing',
    type: 'debit',
    amount: 8000,
  },
]

const SAMPLE_WEEKLY_DATA = [
  { day: 'Mon', credit: 5000, debit: 2000 },
  { day: 'Tue', credit: 3000, debit: 1500 },
  { day: 'Wed', credit: 4500, debit: 2500 },
  { day: 'Thu', credit: 2000, debit: 1000 },
  { day: 'Fri', credit: 6000, debit: 3000 },
  { day: 'Sat', credit: 1500, debit: 800 },
  { day: 'Sun', credit: 3500, debit: 1800 },
]

function App() {
  return (
    <BrowserRouter>
      <AppShell
        sidebar={
          <Sidebar
            name="Varun"
            email="varun@example.com"
            navigationItems={NAVIGATION_ITEMS}
          />
        }
      >
        <PageHeader
          title="Dashboard"
          description="Track your income and expenses in one place."
        />

        <PageContent>
          <DashboardContent
            creditTotal={25000}
            debitTotal={12000}
            balance={13000}
            transactions={SAMPLE_TRANSACTIONS}
            weeklyData={SAMPLE_WEEKLY_DATA}
          />
        </PageContent>
      </AppShell>
    </BrowserRouter>
  )
}

export default App