import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { fetchTech } from '@/domains/fetch'
import { createFileRoute } from '@tanstack/react-router'

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

  return (
    <div className="flex flex-col justify-center p-4">
      <h1 className="text-3xl title-color p-3 text-center uppercase">{tech}</h1>
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-md">
        <div className="bg-background m-px p-1 rounded-md grid grid-cols-3 gap-1">
          {techData?.map((item, index) => (
            <div key={index} className="w-full truncate">
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    className="p-1 truncate font-thin hover:title-color"
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