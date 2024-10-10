import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '../App.css';
import { Topbar } from '@/components/topbar';

export const Route = createRootRoute({
  component: () => (
    <div className='relative min-h-full'>
      <Topbar />
      <main className='relative grid grid-cols-4'>
        <div className='grid-cols-1'>References</div>
        <div className='grid-cols-3'>
          <Outlet />
        </div>
      </main>
      <TanStackRouterDevtools />
    </div>
  ),
})