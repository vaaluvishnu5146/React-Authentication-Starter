import Card from '../Components/Card'

export default function Signup() {
  return (
    <div className='auth-page-container'>
      <Card>
          <h3 className='mb-3'>Create Account</h3>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">First Name</label>
            <input type="text" className="form-control" id="first_name" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="**********" />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="phone" className="form-control" id="phoneNumber" placeholder="**********" />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">Signup</button>
          </div>
      </Card>
    </div>
  )
}
