import { Route, Routes } from 'react-router-dom';
import FoodForm from './components/FoodForm/FoodForm';
import FoodList from './components/FoodList/FoodList';
import FoodListController from "./controllers/FoodListController";

const AppRoutes = [
  {
    path: '/',
    element:<FoodListController></FoodListController> ,
    index: true,
  },
  {
    path: '/food-list',
    element: <FoodList></FoodList> ,
  },
  {
    path: '/add-food',
    element: <FoodForm/>,
  },
];

function App() {
  return (
      <Routes>
        {AppRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
  );
}

export default App;