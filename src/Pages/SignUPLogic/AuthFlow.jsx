import { Routes, Route } from 'react-router-dom';
import Login from './LoginPage';
import SignUp from './SignUPage';

export default function AuthFlow() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}
