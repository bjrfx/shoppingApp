import Home from './routes/home/home.component';
import {Routes, Route} from 'react-router-dom';
import TitleShop from './components/TitleShop.component';
import Appbar from './components/AppBar.component';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Appbar />}>
      <Route index element={<Home />} />
      <Route path='title' element={<TitleShop />}/>
      </Route>
    </Routes>
  );
}

export default App;
