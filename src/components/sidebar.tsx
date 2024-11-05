import { Link } from "@tanstack/react-router";
import { ScrollArea } from "./ui/scroll-area";

export const Sidebar = ({links}: {links: {tag: string; href: string, iconSrc: string}[] }) => {
    
    return <ScrollArea className="w-full h-full px-2 mt-3" >
        {links.map((link) => (
            <Link key={link.href} to="/cheatsheet/$tech" 
                className="text-sm"
                params={{ tech: link.href }} >
                    {(props) => {                        
                        const classActiveText = props.isActive  ? 
                            `font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600`: 
                            '';
                        const classActiveBox = props.isActive ?
                            'bg-slate-100/40':
                            '';

                        return <div className={"mt-2 py-1 px-2 rounded-sm hover:bg-slate-200/80 flex gap-2 " + classActiveBox}>
                            <img src={`/src/assets/icons/${link.href}.svg`} className="w-5 h-5" alt={link.href}/>
                            <span className={classActiveText}>{link.tag}</span>
                        </div>
                    }}
            </Link>
                
        ))}
    </ScrollArea>
}