import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {

  const { isAuthenticated, currentUser, logIn, logOut,  } = useAuth()

  return (
    <>
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">

        <h1 className="text-5xl font-semibold tracking-tight">
            <Link
              className="text-blue-400 hover:text-blue-100 transition duration-100"
              to={routes.home()}>Redwood Blog</Link>
          </h1>

        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="text-blue-400 hover:text-blue-100 transition duration-100"
                to={routes.home()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.contact2()}
              >
                Contact2
              </Link>
            </li>



            <li>
            {isAuthenticated ? (
                <div>
                  <button className="py-2 px-4" type="button" onClick={logOut}>
                        Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="py-2 px-4">
                  Login
                </Link>
              )}
              </li>
          </ul>

          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300">
              Logged in as {currentUser.email}
            </div>
          )}
        </nav>

      </header>
      <main className="max-w-4xl mx-auto p-12 bg-gray-200 shadow-2xl shadow-blue-500/50 rounded-b">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
