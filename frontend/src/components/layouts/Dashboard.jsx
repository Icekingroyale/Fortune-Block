import { useNavigate } from 'react-router-dom';
import '../../stylesheets/loggedinstyles/Dashboard.css'

function App() {
  const navigate = useNavigate();

    return (
    <div className='dashboard-container'>
      <h1>This is my Express backend</h1>
    </div>
  );
}

export default App;
    