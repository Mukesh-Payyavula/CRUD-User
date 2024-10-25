import './App.css';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/Dashboard';
import PostUser from './components/postUser/PostUser';
import UpdateUser from './components/updateUser/UpdateUser';
import NoMatch from './components/nomatch/NoMatch';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/user' element={<PostUser/>}></Route>
        <Route path='/user/:id' element={<UpdateUser/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
