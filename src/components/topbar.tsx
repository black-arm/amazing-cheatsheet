import githubSvg from '@/assets/icons/github.svg';
import sunSvg from '@/assets/icons/sun.svg';

export const Topbar = () => {

    return <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-sm">
        <nav className="p-6 flex justify-between items-center">
            <div>
                <h3 className="text-2xl text-transparent 
                    font-bold bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600">
                    Amazing Cheatsheet
                </h3>
            </div>
            <div className='flex gap-2'>
                <img src={githubSvg} alt='github logo' className='w-5 h-5' />
                <img src={sunSvg} alt="sun logo" className='w-5 h-5' />
            </div>
        </nav>
    </header>
}