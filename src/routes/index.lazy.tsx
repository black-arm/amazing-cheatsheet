import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-10 flex-col mt-11">
      <h1 className="text-5xl title-color p-3 text-center">Amazing Cheatsheet</h1>
      <p className="text-center text-2xl font-light">Amazing Cheatsheet is an open source project for web developers.
         Here you find find all information about framework, languages and tools for frontend world!!!
      </p>
    </div>
  )
}