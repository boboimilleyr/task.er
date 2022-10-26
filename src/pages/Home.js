import { useNavigate } from 'react-router-dom';

const Home = ({user}) => {
  const navigate = useNavigate();

  function handleClick() {
    if(!user) {
      navigate('/login');
    } else {
      navigate('/tasks');
    }
  }

  return (
    <div className='page'>
      <div className='home'>
        <h1>Task.er</h1>
        <p>
          Get things done by managing your everyday tasks from different aspects of your life.
        </p>
        <button className='btn' onClick={handleClick}>Get started</button>
      </div>
    </div>
  )
}

export default Home