import githubSvg from '@/assets/icons/github.svg';
import sunSvg from '@/assets/icons/sun.svg';
import moonSvg from '@/assets/icons/moon.svg';
import githubMoonSvg from '@/assets/icons/github-moon.svg';

import { Link } from '@tanstack/react-router';
import { useTheme } from './theme-provider';

export const Topbar = () => {

    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        if(theme === 'dark'){
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 drop-shadow-md">
        <nav className="p-6 flex justify-between items-center">
            <Link to='/'>
                <h3 className="text-2xl
                    title-color">
                    Amazing Cheatsheet
                </h3>
            </Link>
            <div className='flex gap-2'>
                <a role='link' href="https://github.com/black-arm/amazing-cheatsheet" target='_blank'>
                    <img  src={theme === 'light' ? githubSvg : githubMoonSvg} alt='github logo' className='w-5 h-5'/>
                </a>
                <img src={theme === 'light' ? sunSvg : moonSvg} 
                    alt="sun logo" 
                    className='w-5 h-5 cursor-pointer' 
                    onClick={changeTheme} 
                />
            </div>
        </nav>
    </header>
}