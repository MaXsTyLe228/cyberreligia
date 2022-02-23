import './App.css';
import Header from "./components/Header";
import {Switch, Route, Redirect} from "react-router-dom";
import Buddhism from "./pages/Buddhism";
import Christianity from "./pages/Christianity";
import Contacts from "./pages/Contacts";
import Islam from "./pages/Islam";
import Services from "./pages/Services";
import Deism from "./pages/Deism";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={"/buddhism"} component={Buddhism}/>
                <Route path={"/christianity"} component={Christianity}/>
                <Route path={"/contacts"} component={Contacts}/>
                <Route path={"/islam"} component={Islam}/>
                <Route path={"/deism"} component={Deism}/>
                <Route path={"/services"} component={Services}/>
                <Route path={"/"} component={Home}/>
                <Redirect from='*' to='/'/>
            </Switch>
        </div>
    );
}

export default App;
