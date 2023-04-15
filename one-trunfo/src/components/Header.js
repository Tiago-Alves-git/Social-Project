import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md"

class Header extends React.Component{
  render(){
    const { changeTheme, theme } = this.props;
    return(
      <div className="Header">
        <h1 className="fst-italic" style={ { color: "white" } }> Testando </h1>
        <button type="button" className="btn btn-primary" onClick={ changeTheme }>
          { theme === 'lightBody' ? <MdDarkMode viewTarget={ "false" }></MdDarkMode> : <MdLightMode viewTarget={ "false" }></MdLightMode>}
                
         </button>
      </div>
    );
  }
};

export default Header;