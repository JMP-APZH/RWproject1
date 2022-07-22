import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell/ArticlesCell'


const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-white text-center text-2xl font-semibold tracking-tight bg-gray-500 rounded-xl">
        Blogs Articles Overview
      </h1>


      <ArticlesCell />

    </>
  )
}

export default HomePage
