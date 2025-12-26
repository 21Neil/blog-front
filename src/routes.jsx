import App from './App';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    Children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
];
