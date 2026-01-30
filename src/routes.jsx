import { LoadingOverlay } from '@mantine/core';
import App from './App';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Post from './pages/Post/Post';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    HydrateFallback: () => <LoadingOverlay visible={true} />,
    children: [
      {
        index: true,
        loader: async () => {
          return await fetch(baseUrl + '/posts/');
        },
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'posts/:id',
        loader: async data => {
          return await fetch(baseUrl + '/posts/' + data.params.id)
        },
        element: <Post />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
];
