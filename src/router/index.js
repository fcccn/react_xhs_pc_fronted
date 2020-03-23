import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"
import Login from '../pages/login/login'
import Index from '../pages/index'
import Test from '../pages/test/test'
class App extends Component{
    render(){
        return (
            <Router>
                <Route path="/login" exact component={Login} />
                <Route path="/" exact component={Index} />
                <Route path="/bytest" exact component={Test} />
            </Router>
        )
    }
}
export default App;
