import './App.css';

import Header from './UI/Header';
import Footer from './UI/Footer';
import StudentEntryForm from './Components/StudentEntry';
import Card from './Cards/Card';

function App() {
  return (
    <div className="App">
      <Header />    
      <StudentEntryForm />
      <Footer />
    </div>
  );
}

export default App;
