
export async function fetchSidebarMenuItem(){
    try {
        const response = await fetch('/src/assets/json/menu.json', {
            method: 'GET'
        })

        return await response.json() as { tag: string; href: string }[];
    } catch(error){
        console.log(error)
    }
}

export async function fetchTech(tech: string){
    try {
        const response = await fetch(`/src/assets/json/${tech}.json`, {
            method: 'GET'
        });

        return await response.json() as { text: string; href: string }[];
    } catch(error) {
        console.log(error);
    }
}