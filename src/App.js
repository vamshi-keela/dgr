import './App.css';
import Header from './Header';
import Card from './Card';
import Form from './Form';
import MissionCard from './MissionCard';
import Specialists from './Specialists';
import Footer from './Footer';

function App() {
  return (
    <div className="flex flex-col items-center w-full max-w-8xl mx-auto">
      <Header />
      <Card />
      <Form />
      <MissionCard />
      <Specialists />
      <Footer />
    </div>
  );
}

export default App;
