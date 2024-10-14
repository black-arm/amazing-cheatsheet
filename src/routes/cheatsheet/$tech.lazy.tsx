import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cheatsheet/$tech')({
  component: CheatsheetPage,
})


function CheatsheetPage() {
  const {tech} = Route.useParams();

  return <div>
    {tech}  
  </div>
}