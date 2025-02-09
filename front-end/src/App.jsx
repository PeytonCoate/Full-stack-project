import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage'
import AboutPage from './pages/About';
import ArticlesListPage from './pages/Articles';
import ArticlePage, {Loader as articleLoader} from './pages/ArticlePage';

import Layout from './Layout';
import NotFoundPage from './pages/Notfound';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';


const routes = [{
  path: '/',
  element: <Layout />,
  ErrorElement: <NotFoundPage />,

  children: [{
      path: '/',
      element: <HomePage/>  
    },
    {
      path: '/about',
      element: <AboutPage/> 
    },
    {
      path: '/articles',
      element: <ArticlesListPage/> 
    },
    {
      path: '/articles/:name',
      element: <ArticlePage/>, 
      loader: articleLoader,
    },
    {
      path: '/login',
      element: <LoginPage/>,
    },
    {
      path: 'create-account',
      element: <CreateAccountPage/>
    }]
}]



const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router = {router} />
  );
}

export default App
