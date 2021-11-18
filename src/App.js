import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/homePage/homePage';
import "animate.css/animate.min.css";
import TermsPage from './pages/termsPage/termsPage';
import scrollToTop from './utility/scrollToTop';


function App() {
  return (
    <div className="font-plaid">
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/terms" element={<TermsPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
