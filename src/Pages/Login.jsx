import { useRef } from "react";
import Card from '../Components/Card'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigator = useNavigate();

  function handleLoginCtaClick(e) {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    if(!payload.email || !payload.password) {
      return;
    }

    fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then((result) => {
      if(result && result.status === 200) {
        // Go to Home Page
        setTimeout(() => navigator("/home"), 2000);
      }
    }).catch((error) => {
      console.log(error)
    })

  }

  return (
    <div className='auth-page-container'>
      <Card>
          <h3 className='mb-3'>Login</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input ref={emailRef} type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input ref={passwordRef} type="password" className="form-control" id="password" placeholder="**********" />
          </div>
          <div className="d-grid gap-2">
            <button onClick={handleLoginCtaClick} className="btn btn-primary" type="button">Login</button>
          </div>
      </Card>
    </div>
  )
}
