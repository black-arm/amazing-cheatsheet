import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Topbar } from '@/components/topbar';
import { Sidebar } from '@/components/sidebar';
import { useQuery } from '@tanstack/react-query';
import { fetchSidebarMenuItem } from '@/domains/fetch';

export const Route = createRootRoute({
  component: Main,
})

function Main() {

  const { data } = useQuery({ queryKey: ['menu'], queryFn: fetchSidebarMenuItem });
  console.log(import.meta.env)
  return <div className='relative min-h-full'>
    <Topbar />
    <main className='relative grid grid-cols-5'>
      <div className='col-span-1 h-full'>
        <Sidebar links={data ?? []} />
      </div>
      <div className='col-span-4'>
        <Outlet />
      </div>
    </main>
   { !import.meta.env.PROD ? <TanStackRouterDevtools /> : null }
  </div>
}