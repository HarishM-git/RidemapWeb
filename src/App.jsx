import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
