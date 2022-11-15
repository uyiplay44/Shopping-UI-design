import Collection from './components/Collection';
import { Routes, Route , Link} from 'react-router-dom';
import Customize from './components/Customize';
import Sale from './components/Sale';
import { BsCart } from 'react-icons/bs'
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <div className="logo_menu">
          <h1>Fable</h1>
        </div>
        <ul className='nav_list'>
          <Link to="/" className='link'>Collection</Link>
          <Link to="/customize" className='link'>Customize</Link>
          <Link to="/sale" className='link'>Sale</Link>
        </ul>
        <Link to="/profile" className='link'><span><BsCart /></span>ITEM</Link>
      </div>
     
      <Routes>
        <Route path='/' element={<Collection />} />
        <Route path='/customize' element={<Customize />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
