import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import ThingDetail from "./screens/thing-detail/ThingDetail";
import MainScreen from "./screens/main/MainScreen";
import Login from './Login/Login'
import Cart from "./Cart/Cart";
import PaymentPage from "./Payment/PaymentPAge";

// Создаем компонент Router для настройки маршрутизации
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Маршрут для главной страницы */}

                <Route element={<MainScreen/>} path='/'/>
                <Route element={<Home />} path='/Home'/>
                <Route element={<Login />} path='/Login'/>
                <Route element={<Cart />} path='/cart'/>
                <Route element={<PaymentPage />} path='/payment'/>
                <Route element={<PaymentPage />} path='/payment'/>

                {/* Маршрут для страницы с деталями вещи, где :id - параметр маршрута */}
                <Route element={<ThingDetail />} path='/Home/thing/:id'/>

                {/* Маршрут для случая, если ни один из вышеперечисленных маршрутов не совпал */}
                <Route path='*' element={<div>Not found</div>}/>
            </Routes>
        </BrowserRouter>
    );
}

// Экспортируем компонент Router для использования в других частях приложения
export default Router;
