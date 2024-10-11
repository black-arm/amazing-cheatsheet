import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cheatsheet/$tech')({
  component: () => <div>Hello /cheatsheet/$tech!</div>,
})
