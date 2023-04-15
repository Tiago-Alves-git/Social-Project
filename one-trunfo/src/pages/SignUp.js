import React from "react";
import Header from "../components/Header";
import Forms from "../components/Forms";
import UserContext from "../Contexts/userContext";

class SignUp extends React.Component {
  static contextType = UserContext;

  constructor(){
    super();
      this.state = {
        name:'',
        email: '',
        password: '',
        image: '',
        token: '',
      };
    };

  onInputChange = async (event) => {
    const { target } = event;
    const { name, type, checked } = event.target;
    const { setUser, user } = this.context
    if (target.files && target.files[0]){
      let file = document.querySelector('#resultImage');
      let reader = new FileReader();
      reader.onload = function(e) {
        file
        .src = (`${e.target.result}`)
      }
      reader.readAsDataURL(target.files[0]);

      reader.addEventListener('load', () => {
        setUser({
          ...user,
          image: reader.result,
        });
        localStorage.setItem('profile', reader.result)
      });
    }
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = async (evt) => {
    evt.preventDefault();
    const { name, email, password, image } = this.state;
    const body = { displayName: name, email: email, password: password, image: image };
    fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(async (response)=>{
      if (response.status === 201) {
        const { setUser, user } = this.context
        const result = await response.json();
        await setUser({
            ...user,
            token: `${result.token}`,
            loggedIn: false,
            name: name,
            email: email,
            password: password,
        });
        this.props.history.push('/login');
      }
    })
  };
  render(){
    const { theme, changeTheme } = this.props;
    const {  name, email, password,image } = this.state;
    return (
      <div className={ theme } >
        <Header changeTheme={ changeTheme } theme={ theme }/>
        <Forms 
        name={ name }
        email={ email }
        onInputChange={ this.onInputChange }
        onSaveButtonClick={ this.onSaveButtonClick }
        password={ password }
        image={ image }
        ></Forms>
      </div>
    );
  }
}

export default SignUp;