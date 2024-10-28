import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from './components/theme-provider'
import { TooltipProvider } from './components/ui/tooltip'

// Create a new router instance
const router = createRouter({ routeTree })
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </StrictMode>,
)
