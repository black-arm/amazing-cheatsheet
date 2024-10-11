import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '../App.css';
import { Topbar } from '@/components/topbar';
import { Sidebar } from '@/components/sidebar';

const links = [
  { tag: 'Angular', href: 'angular'},
  { tag: 'React', href: 'react' }
]

export const Route = createRootRoute({
  component: () => (
    <div className='relative min-h-full'>
      <Topbar />
      <main className='relative grid grid-cols-5'>
        <div className='col-span-1'>
          <Sidebar links={links} />
        </div>
        <div className='col-span-4'>
          <Outlet />
        </div>
      </main>
      <TanStackRouterDevtools />
    </div>
  ),
})