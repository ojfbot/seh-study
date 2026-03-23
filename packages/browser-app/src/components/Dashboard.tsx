import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '../store/store.js'
import DashboardContent from './DashboardContent.js'

const queryClient = new QueryClient()

export interface DashboardProps {
  shellMode?: boolean
}

export default function Dashboard({ shellMode = false }: DashboardProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <DashboardContent shellMode={shellMode} />
      </QueryClientProvider>
    </Provider>
  )
}
