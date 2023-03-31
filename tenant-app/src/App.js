import 'bulma/css/bulma.css'
import { Home,Navbar,Complaints,View,Signin,Signup } from './compnents/exports';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/complaint' element={<Complaints/>}/>
        <Route path='/view' element={<View />}/>
        <Route path='/Signin' element={<Signin />}/>
        <Route path='/Signup' element={<Signup />}/>
      </Routes>
    </>
  );
}

export default App;
