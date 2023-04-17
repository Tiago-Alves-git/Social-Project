import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md"

class HeaderIn extends React.Component{
  render(){
    const { changeTheme, theme, image } = this.props;
    return(
      <div class="w3-top">
 <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
  <a href="https://localhost:3007/home" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right"></i>Logo</a>
  <button onClick={changeTheme} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Theme">
    {theme === 'lightBody' ? <MdDarkMode viewTarget={"false"}></MdDarkMode> : <MdLightMode viewTarget={"false"}></MdLightMode>}</button>
  <a href="https://localhost:3007/home" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings"><i class="fa fa-user"></i></a>
  <a href="https://localhost:3007/home" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i class="fa fa-envelope"></i></a>
  <div class="w3-dropdown-hover w3-hide-small">
    <button class="w3-button w3-padding-large" title="Notifications"><i class="fa fa-bell"></i><span class="w3-badge w3-right w3-small w3-green">3</span></button>     
    <div class="w3-dropdown-content w3-card-4 w3-bar-block" style={ { width: "300px" }}>
      <a href="https://localhost:3007/home" className="w3-bar-item w3-button">One new friend request</a>
      <a href="https://localhost:3007/home" className="w3-bar-item w3-button">John Doe posted on your wall</a>
      <a href="https://localhost:3007/home" className="w3-bar-item w3-button">Jane likes your post</a>
    </div>
  </div>
  <a href="https://localhost:3007/login" class="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
    <img src={ image } className="w3-circle profilePic" id="profilePic" style={{height: "30px", width:"30px"}} alt="Avatar" />
  </a>
 </div>
</div>
    );
  }
};

export default HeaderIn;