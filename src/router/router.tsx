import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../component/Header';
import AddChedule from '../component/Schedule/AddSchedule';
import Main from '../pages/Main';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
