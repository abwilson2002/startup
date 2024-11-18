import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { MessageDialog } from './messageDialog';
import './unauthenticated.css'

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <>
      <div className="loginMainSection">
        <section className='input-group mb-3'>
          <span className='customInput input-group-text'>@</span>
          <input className='form-control customInput' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Your Username Here' /> 
        </section>
        <section className="input-group mb-3">
          <span className='input-group-text customInput'>🔒</span>
          {/*<label for="password">🔒</label>*/}
          <input className='form-control customInput' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password Here' />
        </section>
        <div>
        <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button>
        </div>
      </div>
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}