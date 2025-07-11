import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './Pages/Dashoared/Dashoared.jsx';
import Notes from './Pages/Notes/Notes.jsx';
import ProjectMockep from './Pages/projectMockep/ProjectMockep.jsx';
import AuthFlow from './Pages/SignUPLogic/AuthFlow.jsx';
import TaskDashboared from './Pages/TaskDashbored/TaskDashboard.jsx';
import { useAuth } from './context/AuthContext'; // Make sure you have this context

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/auth" replace />;
}

function PublicRoute({ children }) {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <PublicRoute>
            <AuthFlow />
          </PublicRoute>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<ProjectMockep />} />
        <Route path="team" element={<TaskDashboared />} />
        <Route path="notes" element={<Notes />} />
      </Route>

      {/* Add a catch-all route for undefined paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;