import { Menu, References } from "@/model";

export async function fetchSidebarMenuItem(): Promise<Menu | undefined>{
    try {
        const response = await fetch('/json/menu.json', {
            method: 'GET'
        })

        return await response.json() as { tag: string; href: string }[];
    } catch(error){
        console.log(error)
    }
}

export async function fetchTech(tech: string): Promise<References | undefined> {
    try {
        const response = await fetch(`/json/${tech}.json`, {
            method: 'GET'
        });

        return await response.json() as { text: string; href: string }[];
    } catch(error) {
        console.log(error);
    }
}