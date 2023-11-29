import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Users from "./components/Users"
import UserCreate from './components/UserCreate';
import { UserProvider } from "./components/userContext"
export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <TopBar />
                <div class="container-fluid">
                  <Switch>
                    <Route path="/" exact={true} component={Dashboard} />
                    <Route path="/users" exact={true} component={Users} />
                    <Route path="/user-create" exact={true} component={UserCreate} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  )
}


