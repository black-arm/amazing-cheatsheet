import githubSvg from '@/assets/icons/github.svg';
import sunSvg from '@/assets/icons/sun.svg';

export const Topbar = () => {

    return <header className="sticky top-0 z-50 bg-white/80">
        <nav className="p-6 flex justify-between items-center">
            <div>
                <h3 className="text-xl font-bold">Amazing Cheatsheet</h3>
            </div>
            <div className='flex gap-2'>
                <img src={githubSvg} alt='github logo' className='w-5 h-5' />
                <img src={sunSvg} alt="sun logo" className='w-5 h-5' />
            </div>
        </nav>
    </header>
}