import { Link } from "@tanstack/react-router";
import { ScrollArea } from "./ui/scroll-area";

export const Sidebar = (props: {links: {tag: string; href: string}[] }) => {
    
    return <ScrollArea className="w-full h-[38rem]" >
        {props.links.map((link) => (
            <div key={link.href} className="text-sm">
                <Link to="/cheatsheet/$tech"
                    params={{ tech: link.href,}} 
                >{link.tag}</Link>
            </div>
        ))}
    </ScrollArea>
}