import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell/ArticlesCell'


const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      Home

      <ArticlesCell />

    </>
  )
}

export default HomePage
