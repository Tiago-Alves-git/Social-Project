import React from "react";
import Header from "../components/Header";
import Forms from "../components/Forms";
import UserContext from "../Contexts/userContext";
import FormData from "form-data";

class SignUp extends React.Component {
  static contextType = UserContext;
  
  constructor(){
    super();
    this.state = {
      name:'',
      email: '',
      password: '',
      profile: '',
      token: '',
    };
  };
  
  onInputChange = async (event) => {
    const { target } = event;
    const { name, type, checked } = event.target;
    if (target.files && target.files[0]){
      let file = document.querySelector('#resultImage');
      let reader = new FileReader();
      reader.onload = function(e) {
        file
        .src = (`${e.target.result}`)
      }
      reader.readAsDataURL(target.files[0]);
      this.setState({
        ...this.state,
        profile: target.files[0],
      })
    }
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };
  
  onSaveButtonClick = async (evt) => {
    evt.preventDefault();
    const { name, email, password, profile } = this.state;
    const formData = new FormData();
    formData.append('image', profile);
    formData.append('displayName', name);
    formData.append('email', email);
    formData.append('password', password);
    fetch('http://localhost:3001/user', {
      method: 'POST',
      body: formData
    }).then(async (response)=>{
      if (response.status === 201) {
        const { setUser, user } = this.context
        const result = await response.json();
        console.log(result);
        await setUser({
            ...user,
            token: `${result.token}`,
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