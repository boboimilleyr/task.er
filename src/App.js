import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import TasksLayout from './pages/TasksLayout';
import Tasks from './pages/Tasks';
import TasksCategory from './pages/TasksCategory';
import Error from './pages/Error';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='login' element={<Login setUser={setUser}/>}/>
        <Route path='tasks' element={<ProtectedRoute user={user}><TasksLayout /></ProtectedRoute>}>
          <Route index element={<Tasks />}/>
          <Route path=':taskCategory' element={<TasksCategory />}/>
        </Route>
        <Route path='*' element={<Error />}/>
      </Routes>
    </>
  );
}

export default App;
