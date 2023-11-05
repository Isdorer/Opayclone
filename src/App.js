import Navbar from './components/Navbar';
import History from './components/History';
import './components/Myown.css';
import Payment from './components/Payment';
import Refer from './components/Refer';
import Rewards from './components/Rewards';
import Bonus from './components/Bonus';
import Getb from './components/Getb';




function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
    <History></History>
    <Payment></Payment>
    <Refer></Refer>
    <Rewards></Rewards>
    <Bonus></Bonus>
    <Getb></Getb>
    
    </div>
     
  );
}

export default App;
