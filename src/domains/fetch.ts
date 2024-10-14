
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