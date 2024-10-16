import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2 h-[1000px]">
      <h3>Welcome Home!</h3>
    </div>
  )
}