import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Topbar } from '@/components/topbar';
import { Sidebar } from '@/components/sidebar';
import { useQuery } from '@tanstack/react-query';
import { fetchSidebarMenuItem } from '@/domains/fetch';
import { useState } from 'react';

export const Route = createRootRoute({
  component: Main,
})


function Main() {

  const [openSidebarResponse, setOpenSidebarResponse] = useState(false);

  const { data } = useQuery({ queryKey: ['menu'], queryFn: fetchSidebarMenuItem });
  return <div className='relative min-h-full'>
    
      <Topbar onToggleSidebar={setOpenSidebarResponse}/>
      <main className='relative flex flex-col lg:flex-row w-full'>
        <div className={`hidden lg:block h-full w-full sticky top-20 z-50 max-w-[250px] xl:max-w-[300px] 2xl:max-w-[350px]`}>
          <Sidebar links={data ?? []} />
        </div>
        <div className={`${openSidebarResponse ? 'block w-full fixed top-20 z-50 bg-background pb-3': 'hidden'}`}>
          <Sidebar links={data ?? []} />
        </div> 
        <div className='w-full'>
          <Outlet />
        </div>
      </main>
    
   { !import.meta.env.PROD ? <TanStackRouterDevtools /> : null }
  </div>
}