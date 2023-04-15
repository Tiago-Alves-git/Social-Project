import React from "react";
import UserContext from "../Contexts/userContext";
import Forms from "../components/Forms";
import Header from "../components/Header";


class Login extends React.Component {
  static contextType = UserContext;

  constructor () {
    super()
    this.state = {
      posts: [],
      email: '',
      password: '',
      isLoginPage: true,
    }
  }

  onInputChange = (event) => {
    const { target } = event;
    const { name, type, checked } = event.target;
    if (target.files && target.files[0]){
      let file = document.querySelector('#resultImage');
      console.log(file);
      let reader = new FileReader();
      reader.onload = function(e) {
        file
        .src = (`${e.target.result}`)
      }
      reader.readAsDataURL(target.files[0]);
      this.setState({
        [name]: target.files[0],
      });
    }
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  onUserLogin = async (evt) => {
    evt.preventDefault();
    const { setUser, user } = this.context;
    const { email, password } = this.state;
    const body = { email: email, password: password };
    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
      }).then(async(response)=>{
        if (response.status === 200) {
          const image = localStorage.getItem('profile')
          const result = await response.json();
          console.log(result, 'afterlogin');
          await setUser({
              ...user,
              image: image,
              loggedIn: true,
              token: `${result.token}`,
          });
          this.props.history.push('/home');
        }
      })
  }
  render() {
    const { theme, changeTheme } = this.props;
    const { name, email, password, isLoginPage } = this.state;
    return(
      <div className={theme}>
        <Header changeTheme={ changeTheme } theme={ theme }></Header>
       <Forms 
        name={ name }
        email={ email }
        onInputChange={ this.onInputChange }
        onUserLogin={ this.onUserLogin }
        password={ password }
        isLoginPage={ isLoginPage }
        ></Forms>
      </div>
    )
  }
}

export default Login;