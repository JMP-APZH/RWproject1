// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import Contact2sLayout from 'src/layouts/Contact2sLayout'

import ContactsLayout from 'src/layouts/ContactsLayout'

import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from './layouts/BlogLayout/BlogLayout'


const Routes = () => {
  return (
    <Router>
      
      <Set wrap={Contact2sLayout}>
      
        <Route path="/contact2s/new" page={Contact2NewContact2Page} name="newContact2" />
      
        <Route path="/contact2s/{id:Int}/edit" page={Contact2EditContact2Page} name="editContact2" />
      
        <Route path="/contact2s/{id:Int}" page={Contact2Contact2Page} name="contact2" />
      
        <Route path="/contact2s" page={Contact2Contact2sPage} name="contact2S" />
      
      </Set>
      
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>

      <Set wrap={BlogLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
