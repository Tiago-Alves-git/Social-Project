import React from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Contexts/userContext';

class App extends React.Component {
  constructor(){
    super();
      this.state = {
        theme: 'darkBody',
        user: {
          token: null,
          loggedIn: false,
          email: '',
          password: '',
          name: '',
          image: ''
        }
      };
    };
    setUser = (user) => {
      this.setState((prevState) => ({ user }))
    }

    myFunction = () => {
      var x = document.getElementById('Demo1');
      if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
      } else { 
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-theme-d1", "");
      }
    }

    changeTheme = () => {
      const { theme } = this.state;
      if(theme === 'darkBody'){
        this.setState({
          theme: 'lightBody'
        });
      } else
      this.setState({
        theme: 'darkBody'
      });
    };

  render() {
    const {  theme, user } = this.state;
    const { setUser, changeTheme } = this;

    return (
      <BrowserRouter>
      <Switch>
        <UserProvider value={ { user, setUser } }>
          { user.loggedIn === true ? (
          <Route
          path="/home"
          render={ (props)=> <HomePage
          changeTheme={ changeTheme }
          theme={ theme }
          myFunction={ this.myFunction }
          {...props}
          />
          }
          />
           ) :
          <Route
          exact
          path="/" 
          render={(props) => <SignUp 
            theme={  theme }
            changeTheme={ changeTheme }
            useHistory={ useHistory }
            {...props} 
            />} 
            />
          }
        <Route
          exact
          path="/login" 
          render={(props) => <Login 
            theme={  theme }
            changeTheme={ changeTheme }
            {...props} 
            />} 
            />
        </UserProvider>
      </Switch>
    </BrowserRouter>
    )
  }
};

export default App;