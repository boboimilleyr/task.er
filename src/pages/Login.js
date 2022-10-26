import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../redux/userActions';

const Login = ({ setUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(store => store.user);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [inputIsNotValid, setInputIsNotValid] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();
    if(users.find(user => user.username === username && user.password === password)) {
      setInputIsNotValid(false);
      setUser({username, password});
      navigate('/tasks');
    } else {
      console.log('user does not exists');
      setInputIsNotValid(true);
    }
  }

  return (
    <div className='page'>
      <div className='login'>
        <h1>Task.er</h1>
        <p className='login_welcome'>
          <strong>Welcome!</strong> Please sign in to your account to get started.
        </p>
        <form className='login-form' onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" required/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
          <button type="submit" className='btn'>Login</button>
        </form>
        {
          inputIsNotValid && <p>Username/password is incorrect, please enter a valid username/password.</p>
        }
      </div>
    </div>
  )
}

export default Login