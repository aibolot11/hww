import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage';
import ErrorPage from './ErrorPage';

function App() {

const userName = prompt('Ur name')
const postName = prompt('Ur last name')

return(
<div>
      {userName === "John"  && postName ==="Johnson"  ? (
        <MainPage name={userName} lastName = {postName} />
      ) : (
        <ErrorPage  />
      )}
    </div>
  );
}

export default App;
