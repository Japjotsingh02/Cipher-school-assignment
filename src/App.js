import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignPage from './pages/SignPage/SignPage';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SignPage/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
