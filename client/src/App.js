import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Navbar from "./Component/Navbar";

const App = () => (
	<Route>
		<Navbar />
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/calendar">
				<Calendar />
			</Route>
		</Switch>
	</Route>
);

export default App;
