import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const Contact2sLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.contact2S()} className="rw-link">
            Contact2s
          </Link>
        </h1>
        <Link to={routes.newContact2()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Contact2
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default Contact2sLayout
