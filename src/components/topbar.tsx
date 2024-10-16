import githubSvg from '@/assets/icons/github.svg';
import sunSvg from '@/assets/icons/sun.svg';
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

    return <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80">
        <nav className="p-6 flex justify-between items-center">
            <Link to='/'>
                <h3 className="text-2xl text-transparent 
                    font-bold bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600">
                    Amazing Cheatsheet
                </h3>
            </Link>
            <div className='flex gap-2'>
                <img src={githubSvg} alt='github logo' className='w-5 h-5' />
                <img src={sunSvg} alt="sun logo" className='w-5 h-5 cursor-pointer' onClick={changeTheme} />
            </div>
        </nav>
    </header>
}