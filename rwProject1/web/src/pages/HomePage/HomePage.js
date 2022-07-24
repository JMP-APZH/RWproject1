import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell/ArticlesCell'


const HomePage = () => {
  return (
    <>

      <MetaTags title="Home" description="Home page" />

      <div className="">
        <h1 className="text-white text-center text-2xl font-semibold tracking-tight bg-gray-500 rounded-xl pb-1">
          Blog Articles Overview
        </h1>


        <ArticlesCell />
      </div>
    </>
  )
}

export default HomePage
