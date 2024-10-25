import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the Flask backend route
    window.location.href = 'http://localhost:5000/test-page';
  };

  return (
    <div>
      <h1>Click the button to visit Flask Test Page</h1>
      <button onClick={handleClick}>Go to Flask Page</button>
    </div>
  );
}

export default App;
