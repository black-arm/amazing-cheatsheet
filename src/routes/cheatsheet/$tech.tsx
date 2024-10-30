import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { fetchTech } from '@/domains/fetch'
import { createFileRoute } from '@tanstack/react-router'
import { ChangeEvent, useState } from 'react'

export const Route = createFileRoute('/cheatsheet/$tech')({
  loader: async ({ params }) => {
    const techData = await fetchTech(params.tech)

    return { techData }
  },
  component: CheatsheetPage,
})

function CheatsheetPage() {
  const { techData } = Route.useLoaderData()
  const { tech } = Route.useParams()

  const [references, setReferences] = useState(techData)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if(value.length === 0){
      setReferences(techData);
    }

    const results = techData?.filter(item => item.text.includes(value));
    setReferences(results);
  }

  return (
    <div className="flex flex-col justify-center p-4">
      <h1 className="text-3xl title-color p-3 text-center uppercase">{tech}</h1>
      <div className='py-2'>
        <Label className='title-color' htmlFor="search">Search Text</Label>
        <Input type="text" id="Search" placeholder="Search Reference" onChange={onChange} />
      </div>
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-md">
        <div className="bg-background m-px p-1 rounded-md grid lg:grid-cols-3 grid-cols-2 gap-1">
          {references?.map((item, index) => (
            <div key={index} className="w-full truncate">
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    className="p2 md:p-1 truncate font-thin hover:title-color"
                  >
                    {item.text}
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-gradient-to-br from-cyan-500 to-blue-600">
                  <p>{item.text}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
