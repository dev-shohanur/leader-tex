import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
     <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
