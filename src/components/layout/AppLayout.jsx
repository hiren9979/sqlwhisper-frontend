import { useState } from 'react'
import { AppHeader } from './AppHeader'
import { AppSidebar } from './AppSidebar'

export function AppLayout({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className="app-layout">
      <AppHeader />
      <div className="app-layout__body">
        <AppSidebar 
          isCollapsed={isSidebarCollapsed} 
          onToggleCollapse={toggleSidebar}
        />
        <main className="app-layout__main">
          {children}
        </main>
      </div>
    </div>
  )
}
