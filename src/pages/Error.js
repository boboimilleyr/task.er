import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <p>Page not found</p>
      <Link to='/'>Return to home page</Link>
    </div>
  )
}

export default Error