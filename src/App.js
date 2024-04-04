import './App.css';
import NavBar from './components/navBar';
import Book from './pages/Book/inde';
import Main from './pages/main'
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <>
    <nav>
      <NavBar />
    </nav>
    <main>
      <Outlet />
    </main>
    </>
  );
}

export default App;
