import Card from '../Components/Card'

export default function Login() {
  return (
    <div className='auth-page-container'>
      <Card>
          <h3 className='mb-3'>Login</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="**********" />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">Login</button>
          </div>
      </Card>
    </div>
  )
}
