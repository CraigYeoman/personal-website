import './App.css';
import Index from './components/Index';
import About from './components/About'
import CV from './components/CV'
import YeomanWebsite from './components/projects/YeomanWebsite';
import WorkOrderApp from './components/projects/WorkOrderApp';
import HRManagement from './components/projects/HRManagement';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={<Index />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/CV" element={<CV />}></Route>
          <Route path="/YeomanWebsite" element={<YeomanWebsite />}></Route>
          <Route path="/WorkOrderApp" element={<WorkOrderApp />}></Route>
          <Route path="/HRManagement" element={<HRManagement />}></Route>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
