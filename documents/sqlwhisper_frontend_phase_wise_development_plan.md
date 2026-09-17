# SQLWhisper Frontend --- Phase-wise Development Plan

## 1. Purpose

This document defines the frontend implementation plan for the
SQLWhisper Text-to-SQL Clarification Engine based on the current
`sqlwhisper-frontend` structure.

The existing project structure is:

``` text
sqlwhisper-frontend/
├── documents/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── .oxlintrc.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

The implementation should use the existing structure instead of
introducing unnecessary folders.

------------------------------------------------------------------------

# 2. Frontend Architecture

The frontend should be organized around these responsibilities:

``` text
src/
│
├── assets/       Static images, logos, icons
├── components/   Reusable UI components
├── hooks/        Reusable React hooks and state logic
├── layouts/      Application-level page layouts
├── pages/        Route-level screens
├── routes/       Application routing
├── services/     API/data-source communication
├── styles/       Global/custom design system styles
├── utils/        Small reusable utilities
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

### Responsibility rules

-   `pages/` should contain complete route-level screens.
-   `components/` should contain reusable UI pieces.
-   `layouts/` should contain shared application layouts.
-   `services/` should contain API communication and data-source
    services.
-   `hooks/` should contain reusable stateful logic.
-   `routes/` should contain route configuration.
-   `styles/` should contain reusable application styling and theme
    definitions.
-   `utils/` should contain small pure helper functions.
-   Avoid putting API calls directly inside reusable UI components.
-   Avoid putting large page-specific components into `components/`.
-   Avoid creating a new folder when an existing folder already has the
    correct responsibility.

------------------------------------------------------------------------

# 3. Main Application UI

The main authenticated/application layout should eventually look like:

``` text
┌─────────────────────────────────────────────────────────────────────┐
│ SQLWhisper                                      Search     Settings │
├──────────────────────┬──────────────────────────────────────────────┤
│                      │                                              │
│ SQLWHISPER           │ Current Conversation                         │
│                      │                                              │
│ + New Chat           │ Production DB ●                              │
│                      │                                              │
│ Search chats         │ User                                         │
│                      │ Show me revenue by customer                  │
│ CHATS                │                                              │
│                      │ AI                                           │
│ Today                │ Clarification...                             │
│ Monthly Revenue      │                                              │
│ Customer Analysis    │ ○ orders.total_amount                        │
│ Order Report         │ ○ payments.amount                            │
│                      │                                              │
│ Yesterday            │ Generated SQL                                │
│ Inventory Query      │                                              │
│ Sales Analysis       │ Query Result                                 │
│                      │                                              │
│ DATABASE             │ Ask a follow-up question...                  │
│ Production DB ●      │                                              │
│ + Add Data Source    │                                              │
│                      │                                              │
│ Database Explorer    │                                              │
│                      │                                              │
│ Settings             │                                              │
└──────────────────────┴──────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 4. Phase 0 --- Existing Project Preparation

## Objective

Prepare the existing frontend structure before feature development.

## Files

### Review

``` text
package.json
vite.config.js
src/main.jsx
src/App.jsx
src/App.css
src/index.css
src/routes/
```

### Create/update

``` text
src/styles/theme.css
src/styles/variables.css
```

## Work

-   Verify existing React/Vite setup.
-   Verify current dependencies.
-   Keep existing working configuration.
-   Add Bootstrap 5 if it is not already installed.
-   Add Bootstrap Icons if required.
-   Add CodeMirror when SQL editor development starts.
-   Add chart/grid libraries only when their phases begin.
-   Establish CSS variables for the visual theme.
-   Remove or avoid duplicate global styling.
-   Keep the existing project structure.

## UI/UX

Define:

-   Application background
-   Sidebar background
-   Main content background
-   Primary action color
-   Text colors
-   Border colors
-   Status colors
-   Border radius
-   Shadows
-   Spacing
-   Typography
-   Input styles
-   Button styles

The visual direction should follow the provided SPOT reference:

-   Soft light-blue/gray palette
-   White content areas
-   Rounded controls
-   Subtle borders
-   Subtle shadows
-   Minimal visual noise
-   Clean desktop application appearance

------------------------------------------------------------------------

# 5. Phase 1 --- Application Shell and Layout

## Objective

Build the basic application shell before implementing real
functionality.

## Files

### Layouts

``` text
src/layouts/AppLayout.jsx
src/layouts/SidebarLayout.jsx
```

Use only the layout files that are actually required by the final
routing structure.

### Components

``` text
src/components/layout/AppHeader.jsx
src/components/layout/AppSidebar.jsx
src/components/layout/SidebarSection.jsx
```

### Pages

``` text
src/pages/HomePage.jsx
```

### Routing

``` text
src/routes/index.jsx
```

### Styles

``` text
src/styles/layout.css
src/styles/sidebar.css
```

### Existing files

``` text
src/App.jsx
src/App.css
src/index.css
```

Update only where necessary.

## UI

Implement:

-   Application header
-   Left sidebar
-   Main workspace
-   Sidebar sections
-   New Chat button
-   Chat list placeholder
-   Data Source section placeholder
-   Database Explorer navigation
-   Settings navigation
-   Responsive sidebar behavior

------------------------------------------------------------------------

# 6. Phase 2 --- Chat UI

## Objective

Create the complete chat experience using mock/static data initially.

## Files

### Pages

``` text
src/pages/ChatPage.jsx
```

### Components

``` text
src/components/chat/ChatHeader.jsx
src/components/chat/ChatMessageList.jsx
src/components/chat/ChatMessage.jsx
src/components/chat/UserMessage.jsx
src/components/chat/AssistantMessage.jsx
src/components/chat/ChatComposer.jsx
src/components/chat/ChatEmptyState.jsx
src/components/chat/ChatLoading.jsx
src/components/chat/ChatError.jsx
```

### Sidebar

``` text
src/components/chat/ChatList.jsx
src/components/chat/ChatListItem.jsx
src/components/chat/ChatSearch.jsx
src/components/chat/NewChatButton.jsx
```

### Hooks

``` text
src/hooks/useChat.js
```

Only create additional hooks if the logic is actually reusable.

### Styles

``` text
src/styles/chat.css
```

## UI/UX

Implement:

-   New Chat
-   Chat list
-   Search chats
-   Date grouping
-   User messages
-   AI messages
-   Message timestamps
-   Loading state
-   Error state
-   Empty state
-   Message composer
-   Send action
-   Follow-up input
-   Scrollable conversation
-   Hover actions for chat items

------------------------------------------------------------------------

# 7. Phase 3 --- Chat Management

## Objective

Make chat history functional.

## Files

### Services

``` text
src/services/chatService.js
```

### Hooks

``` text
src/hooks/useChats.js
src/hooks/useChat.js
```

### Components

``` text
src/components/chat/ChatList.jsx
src/components/chat/ChatListItem.jsx
src/components/chat/ChatActions.jsx
src/components/chat/NewChatButton.jsx
```

### Pages

``` text
src/pages/ChatPage.jsx
```

## Features

-   Create chat
-   Open chat
-   Rename chat
-   Delete chat
-   Archive chat
-   Search chats
-   Load chat history
-   Persist selected chat
-   Group chats by date

## Chat actions

``` text
Rename
Archive
Delete
```

Future options can be added later:

``` text
Duplicate
Export Conversation
```

------------------------------------------------------------------------

# 8. Phase 4 --- Data Source UI

## Objective

Create the UI for managing database connections and SQL files.

## Files

### Pages

``` text
src/pages/DataSourcesPage.jsx
```

### Components

``` text
src/components/data-source/DataSourceList.jsx
src/components/data-source/DataSourceCard.jsx
src/components/data-source/AddDataSourceModal.jsx
src/components/data-source/DatabaseConnectionForm.jsx
src/components/data-source/SqlFileUpload.jsx
src/components/data-source/ConnectionStatus.jsx
```

### Services

``` text
src/services/dataSourceService.js
```

### Hooks

``` text
src/hooks/useDataSources.js
```

### Styles

``` text
src/styles/data-source.css
```

### Routes

Update:

``` text
src/routes/index.jsx
```

## Features

### Live database

-   Database type
-   Host
-   Port
-   Database name
-   Username
-   Password
-   Secure connection option
-   Test connection
-   Connection status
-   Save connection
-   Disconnect
-   Delete connection

### SQL file

-   Upload `.sql`
-   File validation
-   Upload progress
-   Parsing status
-   Import success
-   Import failure
-   Detected table count
-   Detected column count
-   Detected relationships

------------------------------------------------------------------------

# 9. Phase 5 --- Database Explorer

## Objective

Allow users to inspect the schema that will be used by the Text-to-SQL
engine.

## Files

### Pages

``` text
src/pages/DatabaseExplorerPage.jsx
```

### Components

``` text
src/components/database/DatabaseExplorer.jsx
src/components/database/DatabaseSelector.jsx
src/components/database/TableSearch.jsx
src/components/database/TableList.jsx
src/components/database/TableListItem.jsx
src/components/database/TableDetails.jsx
src/components/database/ColumnTable.jsx
src/components/database/RelationshipList.jsx
src/components/database/IndexList.jsx
```

### Services

``` text
src/services/schemaService.js
```

### Hooks

``` text
src/hooks/useSchema.js
```

### Styles

``` text
src/styles/database-explorer.css
```

## Features

-   Select data source
-   Search tables
-   List tables
-   View columns
-   View data types
-   View primary keys
-   View foreign keys
-   View relationships
-   View indexes
-   Search columns
-   Table details

------------------------------------------------------------------------

# 10. Phase 6 --- Text-to-SQL Chat Integration

## Objective

Connect the chat UI to the Text-to-SQL backend.

## Files

### Services

``` text
src/services/textToSqlService.js
```

### Hooks

``` text
src/hooks/useTextToSql.js
```

### Components

``` text
src/components/chat/AssistantMessage.jsx
src/components/chat/GenerationStatus.jsx
src/components/sql/SqlPreview.jsx
src/components/sql/QueryContext.jsx
```

### Pages

``` text
src/pages/ChatPage.jsx
```

## Workflow

``` text
User Question
      ↓
Frontend API
      ↓
Backend Text-to-SQL Engine
      ↓
AI Response
      ↓
Clarification / SQL
      ↓
Frontend Rendering
```

## UI

The AI response should support multiple response types:

``` text
Normal response
Clarification
Generated SQL
Validation result
Query result
Error
```

------------------------------------------------------------------------

# 11. Phase 7 --- Clarification Engine UI

## Objective

Create a dedicated UI system for AI clarification.

## Files

### Components

``` text
src/components/clarification/ClarificationCard.jsx
src/components/clarification/ClarificationOption.jsx
src/components/clarification/ClarificationGroup.jsx
src/components/clarification/ClarificationInput.jsx
src/components/clarification/ClarificationActions.jsx
```

### Hooks

``` text
src/hooks/useClarification.js
```

### Services

``` text
src/services/clarificationService.js
```

### Styles

``` text
src/styles/clarification.css
```

## Supported clarification types

### Column clarification

``` text
Which amount do you mean?

○ orders.total_amount
○ payments.amount
○ invoices.total_amount
```

### Date clarification

``` text
Which date should be used?

○ order_date
○ payment_date
○ created_at
```

### Metric clarification

``` text
What should "sales" mean?

○ Number of orders
○ Total revenue
○ Average order value
```

### Entity clarification

``` text
Which customers should be included?

○ Active customers
○ All customers
○ Customers with orders
```

### Missing information

``` text
What period should I use?

[ This month ] [ Last month ] [ This year ]
```

## UX requirements

-   Clearly explain why clarification is required.
-   Prefer selectable options where possible.
-   Support free-text clarification.
-   Keep clarification inside the conversation.
-   Preserve previous conversation context.
-   Show selected choices before continuing where useful.
-   Allow the AI to proceed automatically when clarification is
    unnecessary.

------------------------------------------------------------------------

# 12. Phase 8 --- SQL Editor and Query Context

## Objective

Provide an advanced but clean SQL presentation/editing experience.

## Files

### Components

``` text
src/components/sql/SqlPanel.jsx
src/components/sql/SqlEditor.jsx
src/components/sql/SqlPreview.jsx
src/components/sql/SqlActions.jsx
src/components/sql/QueryContext.jsx
```

### Hooks

``` text
src/hooks/useSqlEditor.js
```

### Styles

``` text
src/styles/sql-editor.css
```

## Library

Use:

``` text
CodeMirror 6
```

## Features

-   SQL syntax highlighting
-   Line numbers
-   Copy SQL
-   Edit SQL
-   SQL formatting if required
-   Expand/collapse SQL panel
-   Run SQL
-   Display generated SQL
-   Display edited SQL
-   Query context

## Query Context

``` text
Query Context

Data Source
Production DB

Tables
customers
orders

Filters
August 2026

Metric
orders.total_amount

Grouping
customer

Limit
10
```

------------------------------------------------------------------------

# 13. Phase 9 --- SQL Validation

## Objective

Display validation status before query execution.

## Files

### Components

``` text
src/components/sql/QueryValidation.jsx
src/components/sql/ValidationStatus.jsx
src/components/sql/ValidationError.jsx
```

### Services

``` text
src/services/queryService.js
```

### Hooks

``` text
src/hooks/useQueryValidation.js
```

### Styles

``` text
src/styles/query-validation.css
```

## Validation states

``` text
✓ Tables exist
✓ Columns exist
✓ Relationships valid
✓ SQL syntax valid
✓ Query is read-only
```

Error state:

``` text
✕ Column `customer_name` does not exist

Possible columns:

customers.name
customers.full_name
```

------------------------------------------------------------------------

# 14. Phase 10 --- Query Execution

## Objective

Execute validated queries and handle execution states safely.

## Files

### Services

``` text
src/services/queryService.js
```

### Hooks

``` text
src/hooks/useQueryExecution.js
```

### Components

``` text
src/components/query/QueryExecutionStatus.jsx
src/components/query/QueryError.jsx
src/components/query/QueryCancelButton.jsx
```

## Features

-   Execute query
-   Query loading state
-   Query success state
-   Query failure state
-   Query timeout state
-   Query cancellation
-   Execution duration
-   Row count
-   Connection failure handling

------------------------------------------------------------------------

# 15. Phase 11 --- Result Workspace

## Objective

Display query results as a professional data workspace.

## Files

### Components

``` text
src/components/results/ResultWorkspace.jsx
src/components/results/ResultTable.jsx
src/components/results/ResultToolbar.jsx
src/components/results/ResultPagination.jsx
src/components/results/ResultEmptyState.jsx
src/components/results/ResultError.jsx
```

### Hooks

``` text
src/hooks/useQueryResults.js
```

### Utils

``` text
src/utils/resultFormatter.js
src/utils/exportCsv.js
```

### Styles

``` text
src/styles/results.css
```

## Features

-   Result table
-   Pagination
-   Sorting
-   Filtering
-   Column resizing
-   Row count
-   Execution time
-   Copy results
-   CSV export
-   View SQL

## Result header

``` text
Query Result

127 rows · 0.42 seconds

[ Export CSV ] [ Copy ] [ View SQL ]
```

------------------------------------------------------------------------

# 16. Phase 12 --- Visualization

## Objective

Add chart-based result visualization after the table experience is
stable.

## Files

### Components

``` text
src/components/charts/ChartView.jsx
src/components/charts/ChartSelector.jsx
src/components/charts/BarChart.jsx
src/components/charts/LineChart.jsx
src/components/charts/PieChart.jsx
src/components/charts/KpiCard.jsx
```

Only create individual chart components when they are required.

### Hooks

``` text
src/hooks/useChartData.js
```

### Utils

``` text
src/utils/chartDataTransformer.js
```

### Styles

``` text
src/styles/charts.css
```

## Library

``` text
Chart.js
```

## Features

-   Table / Chart switching
-   Bar chart
-   Line chart
-   Pie/donut chart
-   KPI cards
-   Chart configuration
-   Automatic chart recommendation later

------------------------------------------------------------------------

# 17. Phase 13 --- Settings

## Objective

Create application-level configuration.

## Files

### Page

``` text
src/pages/SettingsPage.jsx
```

### Components

``` text
src/components/settings/SettingsLayout.jsx
src/components/settings/GeneralSettings.jsx
src/components/settings/ConnectionSettings.jsx
```

Create additional settings components only when required.

### Services

``` text
src/services/settingsService.js
```

### Styles

``` text
src/styles/settings.css
```

## Potential settings

-   General application preferences
-   Default data source
-   Query limits
-   Result preferences
-   UI preferences
-   Connection preferences

Security-sensitive settings should be handled server-side where
appropriate.

------------------------------------------------------------------------

# 18. Phase 14 --- Production UX and Security

## Objective

Harden the frontend for production usage.

## Files to review

``` text
src/services/
src/hooks/
src/components/
src/pages/
src/routes/
src/utils/
src/styles/
src/App.jsx
src/main.jsx
```

## UX

-   Loading states
-   Skeleton states
-   Empty states
-   Error states
-   Connection status
-   Toast notifications
-   Confirmation dialogs
-   Keyboard shortcuts
-   Accessibility
-   Responsive behavior
-   Smooth transitions
-   Large-result handling

## Security-related frontend requirements

-   Never expose database passwords unnecessarily.
-   Never store raw database credentials in browser storage.
-   Do not execute database queries directly from the browser.
-   Send database operations through the backend.
-   Handle authentication/session state securely.
-   Avoid rendering untrusted SQL/result content as HTML.
-   Respect server-side query restrictions.
-   Handle expired sessions.
-   Handle unauthorized responses.

------------------------------------------------------------------------

# 19. Final Frontend Folder Structure

After the planned phases are implemented, the structure should
approximately become:

``` text
src/
│
├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│   ├── layout/
│   │   ├── AppHeader.jsx
│   │   ├── AppSidebar.jsx
│   │   └── SidebarSection.jsx
│   │
│   ├── chat/
│   │   ├── ChatHeader.jsx
│   │   ├── ChatMessageList.jsx
│   │   ├── ChatMessage.jsx
│   │   ├── UserMessage.jsx
│   │   ├── AssistantMessage.jsx
│   │   ├── ChatComposer.jsx
│   │   ├── ChatEmptyState.jsx
│   │   ├── ChatLoading.jsx
│   │   ├── ChatError.jsx
│   │   ├── ChatList.jsx
│   │   ├── ChatListItem.jsx
│   │   ├── ChatSearch.jsx
│   │   └── ChatActions.jsx
│   │
│   ├── clarification/
│   │   ├── ClarificationCard.jsx
│   │   ├── ClarificationOption.jsx
│   │   ├── ClarificationGroup.jsx
│   │   ├── ClarificationInput.jsx
│   │   └── ClarificationActions.jsx
│   │
│   ├── data-source/
│   │   ├── DataSourceList.jsx
│   │   ├── DataSourceCard.jsx
│   │   ├── AddDataSourceModal.jsx
│   │   ├── DatabaseConnectionForm.jsx
│   │   ├── SqlFileUpload.jsx
│   │   └── ConnectionStatus.jsx
│   │
│   ├── database/
│   │   ├── DatabaseExplorer.jsx
│   │   ├── DatabaseSelector.jsx
│   │   ├── TableSearch.jsx
│   │   ├── TableList.jsx
│   │   ├── TableListItem.jsx
│   │   ├── TableDetails.jsx
│   │   ├── ColumnTable.jsx
│   │   ├── RelationshipList.jsx
│   │   └── IndexList.jsx
│   │
│   ├── sql/
│   │   ├── SqlPanel.jsx
│   │   ├── SqlEditor.jsx
│   │   ├── SqlPreview.jsx
│   │   ├── SqlActions.jsx
│   │   ├── QueryContext.jsx
│   │   ├── QueryValidation.jsx
│   │   ├── ValidationStatus.jsx
│   │   └── ValidationError.jsx
│   │
│   ├── query/
│   │   ├── QueryExecutionStatus.jsx
│   │   ├── QueryError.jsx
│   │   └── QueryCancelButton.jsx
│   │
│   ├── results/
│   │   ├── ResultWorkspace.jsx
│   │   ├── ResultTable.jsx
│   │   ├── ResultToolbar.jsx
│   │   ├── ResultPagination.jsx
│   │   ├── ResultEmptyState.jsx
│   │   └── ResultError.jsx
│   │
│   ├── charts/
│   │   ├── ChartView.jsx
│   │   ├── ChartSelector.jsx
│   │   ├── BarChart.jsx
│   │   ├── LineChart.jsx
│   │   ├── PieChart.jsx
│   │   └── KpiCard.jsx
│   │
│   └── settings/
│       ├── SettingsLayout.jsx
│       ├── GeneralSettings.jsx
│       └── ConnectionSettings.jsx
│
├── hooks/
│   ├── useChat.js
│   ├── useChats.js
│   ├── useDataSources.js
│   ├── useSchema.js
│   ├── useTextToSql.js
│   ├── useClarification.js
│   ├── useSqlEditor.js
│   ├── useQueryValidation.js
│   ├── useQueryExecution.js
│   ├── useQueryResults.js
│   └── useChartData.js
│
├── layouts/
│   ├── AppLayout.jsx
│   └── SidebarLayout.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── ChatPage.jsx
│   ├── DataSourcesPage.jsx
│   ├── DatabaseExplorerPage.jsx
│   └── SettingsPage.jsx
│
├── routes/
│   └── index.jsx
│
├── services/
│   ├── chatService.js
│   ├── dataSourceService.js
│   ├── schemaService.js
│   ├── textToSqlService.js
│   ├── clarificationService.js
│   ├── queryService.js
│   └── settingsService.js
│
├── styles/
│   ├── variables.css
│   ├── theme.css
│   ├── layout.css
│   ├── sidebar.css
│   ├── chat.css
│   ├── clarification.css
│   ├── data-source.css
│   ├── database-explorer.css
│   ├── sql-editor.css
│   ├── query-validation.css
│   ├── results.css
│   ├── charts.css
│   └── settings.css
│
├── utils/
│   ├── resultFormatter.js
│   ├── exportCsv.js
│   └── chartDataTransformer.js
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

This is the **target structure**, not a requirement to create every file
immediately. Files should be introduced phase-by-phase when their
functionality is actually implemented.

------------------------------------------------------------------------

# 20. Route Structure

The frontend routes should eventually follow a simple structure:

``` text
/
├── /chat
│   └── /chat/:chatId
│
├── /data-sources
│
├── /database-explorer
│
└── /settings
```

Potential future routes:

``` text
/login
/profile
```

Authentication routes should only be added when authentication is
implemented.

------------------------------------------------------------------------

# 21. Recommended Implementation Order

The implementation order should remain:

``` text
Phase 0
Project Preparation
        ↓
Phase 1
Application Shell
        ↓
Phase 2
Chat UI
        ↓
Phase 3
Chat Management
        ↓
Phase 4
Data Sources
        ↓
Phase 5
Database Explorer
        ↓
Phase 6
Text-to-SQL Integration
        ↓
Phase 7
Clarification Engine
        ↓
Phase 8
SQL Editor
        ↓
Phase 9
SQL Validation
        ↓
Phase 10
Query Execution
        ↓
Phase 11
Results
        ↓
Phase 12
Visualization
        ↓
Phase 13
Settings
        ↓
Phase 14
Production Hardening
```

------------------------------------------------------------------------

# 22. Important Development Rule

Do not build all UI components upfront.

Each phase should:

1.  Create only the required files.
2.  Connect the components needed for that phase.
3.  Keep the UI functional with mock data until the corresponding
    backend API exists.
4.  Replace mock data with real services when the backend endpoint
    becomes available.
5.  Avoid duplicate components.
6.  Keep page-specific logic in pages/hooks rather than spreading it
    across unrelated components.
7.  Keep reusable API communication inside `services/`.
8.  Keep reusable visual components inside `components/`.
9.  Keep styling centralized in `styles/`.
10. Avoid unnecessary abstraction.

The goal is to keep the existing `sqlwhisper-frontend` project clean
while progressively turning it into the complete Text-to-SQL
application.
