import { Link } from "@tanstack/react-router";
import { ScrollArea } from "./ui/scroll-area";

export const Sidebar = (props: {links: {tag: string; href: string}[] }) => {
    
    return <ScrollArea className="w-full h-[38rem]" >
        {props.links.map((link) => (
            <Link key={link.href} to="/cheatsheet/$tech" 
                activeProps={{ className: `font-bold` }}
                params={{ tech: link.href,}} >
                <div className="text-sm p-2 hover:bg-gray-50/90">
                    {link.tag}
                </div>
            </Link>
                
        ))}
    </ScrollArea>
}