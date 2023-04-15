import React from "react";

class Forms extends React.Component {
  render() {
    const { name, email, onInputChange, onSaveButtonClick, password, image, isLoginPage, onUserLogin } = this.props;
    return(
      <form className="row g-3 LoginForms">
    
    { !isLoginPage ? (<div className="col-2">
    <label htmlFor="inputName" className="form-label">Nome</label>
    <input 
    type="text" className="form-control" 
    id="inputName" placeholder="Seu Nome Aqui" 
    value={ name } onChange={ onInputChange } name="name"></input>
  </div>) : null }
  <div className="col-md-2">
    <label htmlFor="inputPassword" className="form-label">Senha</label>
    <input 
    type="password" className="form-control" name="password"
    id="inputPassword" value={ password } onChange={ onInputChange }></input>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputEmail" className="form-label">Email</label>
    <input type="email" className="form-control" name="email"
    id="inputEmail" value={ email } onChange={ onInputChange }></input>
  </div>
  { !isLoginPage ? ( <><div className="col-md-1">
          <label htmlFor="inputImage" className="form-label">Foto de perfil</label>
          <input type="file" className="form-control" name="image"
            id="inputImage" accept=".jpg, .jpeg, .png" onChange={onInputChange} value={image}>
          </input>
        </div><div className="col-md-1">
            <img src="#" alt="" id="resultImage" style={{ height: '100px', width: '100px' }}></img>
          </div></>) : null}
  {/* <div className="col-md-2">
    <label htmlFor="inputImage" className="form-label">Foto de perfil</label>
    <input type="file" className="form-control" name="image"
    id="inputImage" accept=".jpg, .jpeg, .png" onChange={ onInputChange } value={ image } >
    </input>
  </div> */}

  { !isLoginPage ? (
    <div className="col-md-1">
    <button type="submit" className="btn btn-primary signUpButton" onClick={ onSaveButtonClick }>SignUp</button>
  </div>
  ) : (
    <div className="col-md-1">
    <button type="submit" className="btn btn-primary signUpButton" onClick={ onUserLogin }>Login</button>
  </div>
  ) }
</form>
    );
  }
}

export default Forms;