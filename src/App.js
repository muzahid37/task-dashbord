
import './App.css';
import MainContent from './Components/MainContent/MainContent';
import Navbar from './Components/Sheared/Navbar';
import Sidebar from './Components/Sheared/Sidebar';

export default function App() {
  return (
   <div className='App'>
    <div className='appGlass'>
      {/* <Navbar></Navbar> */}
      <Sidebar></Sidebar>
      <MainContent></MainContent>
      </div>
   </div>
  )
}


