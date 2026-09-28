import { AppHeader } from './AppHeader'
import { AppSidebar } from './AppSidebar'

export function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <AppHeader />
      <div className="app-layout__body">
        <AppSidebar />
        <main className="app-layout__main">
          {children}
        </main>
      </div>
    </div>
  )
}
