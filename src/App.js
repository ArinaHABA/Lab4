import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux"
import Header from "./components/Header";
import Foodd from "./components/Foodd";
import FoodType from "./components/FoodType";
import Aboutt from "./components/Aboutt";
import Foddy from "./components/Foddy";
import {store} from "./components/store";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter basename="/">
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <h1>Мы накормим всех!</h1>
                        <h2>Любимая еда из любимого Вуза</h2>
                        <Foodd/>
                    </Route>

                    <Route exact path="/about">
                        <Aboutt/>
                    </Route>

                    <Route exact path="/food/:food_pk">
                        <Foddy/>
                    </Route>

                </Switch>
            </BrowserRouter>
        </Provider>

    );
}
export default App;

