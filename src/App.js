import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Feedback from './pages/Feedback';
import { Login } from './pages/Login';
import Register from './pages/Register';
import Result from './pages/Result';
import { AuthProvider, useAuth } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <AuthProvider>
    <Routes>
         <Route path="/login" element={<Login />} />
         <Route path='/register' element={<Register/>} />
      <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
    </AuthProvider>
  );
}

export default App;
