import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import OpenRoute from './components/auth/OpenRoute';
import Analytics from './components/dashboard/analytics/Analytics'
import Auth from './pages/Auth';
import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './pages/Dashboard';
import AddTeacher from './components/dashboard/addteacher/AddTeacher';
import AddStudent from './components/dashboard/addstudent/AddStudent';
import AddClass from './components/dashboard/addClass/AddClass';

import Error from './pages/Error';
import HomePage from './components/dashboard/HomePage';
import ClassAnalytic from './components/dashboard/analytics/ClassAnalytic';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<OpenRoute><Auth/></OpenRoute>}/>
      <Route element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
              <Route path='/dashboard' element={<HomePage/>}></Route>
              <Route path='/dashboard/analytics' element={<Analytics/>}></Route>
              <Route path='/dashboard/addTeacher'element={<AddTeacher/>}></Route>
              <Route path='/dashboard/addStudent' element={<AddStudent/>}></Route>
              <Route path='/dashboard/addClass' element={<AddClass/>}></Route>
              <Route path='/dashboard/analytics/:id' element={<ClassAnalytic/>}></Route>
      </Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    </>
  );
}

export default App;
