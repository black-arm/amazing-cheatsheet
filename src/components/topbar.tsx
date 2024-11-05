import githubSvg from '/icons/github.svg';
import sunSvg from '/icons/sun.svg';
import moonSvg from '/icons/moon.svg';
import githubMoonSvg from '/icons/github-moon.svg';
import barsSvg from '/icons/bars.svg';
import barsDarkSvg from '/icons/bars-dark.svg';
import closeSvg from '/icons/close.svg';
import closeDarkSvg from '/icons/close-dark.svg';
import { Link } from '@tanstack/react-router';
import { useTheme } from './theme-provider';
import { useState } from 'react';

export const Topbar = ({ onToggleSidebar }: { onToggleSidebar: (value: boolean) => void }) => {

    const { theme, setTheme } = useTheme()
    const [toggleBars, setToggleBars] = useState(false);

    const changeTheme = () => {
        if(theme === 'dark'){
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    const onSetToggleBars = () => {
        setToggleBars(!toggleBars)
        onToggleSidebar(!toggleBars);
    }

    return <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 drop-shadow-md">
        <nav className="p-6 flex justify-between items-center">
            <div className='flex flex-row gap-4 items-center'>
                {
                    !toggleBars ? <img alt="bars" src={theme === 'light' ? barsSvg: barsDarkSvg} 
                                    className='w-5 h-5 block lg:hidden cursor-pointer' onClick={onSetToggleBars} /> :
                                 <img alt="close" src={theme === 'light' ? closeSvg: closeDarkSvg} 
                                    className='w-5 h-5 block lg:hidden cursor-pointer' onClick={onSetToggleBars}/> 
                }
            <Link to='/' onClick={() => {
                setToggleBars(false)
                onToggleSidebar(false)
            }}>
                <h3 className="text-2xl
                    title-color">
                    Amazing Cheatsheet
                </h3>
            </Link>
            </div>
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