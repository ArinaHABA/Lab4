import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import Foodd from "./components/Foodd";
import FoodType from "./components/FoodType";

i

function App() {

    return (
        <BrowserRouter basename="/">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <h1>Мы накормим всех!</h1>
                    <h2>Любимая еда из любимого Вуза</h2>
                    <Foodd/>
                </Route>

                <Route path={'/food_type'}>
                    <FoodType/>
                </Route>


                <Route path="/меню">
                    <h1>Закажи доставку!</h1>
                </Route>

            </Switch>
        </BrowserRouter>
    );
}
export default App;
