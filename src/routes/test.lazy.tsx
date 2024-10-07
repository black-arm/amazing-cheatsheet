import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/test')({
  component: () => <div>Hello /test!</div>,
})
