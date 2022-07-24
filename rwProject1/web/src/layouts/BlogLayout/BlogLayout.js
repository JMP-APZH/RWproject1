import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {

  const { isAuthenticated, currentUser, logIn, logOut,  } = useAuth()

  return (
    <>
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">

        <h1 className="text-5xl font-semibold tracking-tight">
            <Link
              className="text-blue-400 hover:text-blue-100 hover:tracking-widest transition duration-100"
              to={routes.home()}>Redwood Blog</Link>
        </h1>

        <div className="absolute bottom-2 left-0 ml-9 text-xs text-blue-400">
              By JMP
        </div>

        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="py-2 px-4 font-semibold text-blue-400 hover:bg-blue-600 hover:text-yellow-500 transition duration-100 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                to={routes.home()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 font-semibold hover:bg-blue-600 hover:text-yellow-500 transition duration-100 rounded focus:outline-none focus:ring focus:ring-violet-300"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 font-semibold hover:bg-blue-600 hover:text-yellow-500 transition duration-100 rounded"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-semibold py-2 px-4 hover:bg-blue-600 hover:text-yellow-500 transition duration-100 rounded"
                to={routes.contact2()}
              >
                Contact2
              </Link>
            </li>



            <li>
            {isAuthenticated ? (
                <div>
                  <button className="py-2 px-4 font-semibold hover:text-yellow-500 hover:bg-blue-600 transition duration-100 rounded" type="button" onClick={logOut}>
                        Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="py-2 px-4 font-semibold">
                  Login
                </Link>
              )}
              </li>
          </ul>

          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-16 text-xs text-blue-300">
              Logged in as {currentUser.email}
            </div>
          )}
        </nav>

      </header>
      <main className="mt-4 max-w-4xl mx-auto p-6 bg-gray-200 shadow-2xl shadow-blue-500/50 rounded-b">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
