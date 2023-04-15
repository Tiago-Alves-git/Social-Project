import React from "react";
import UserContext from "../Contexts/userContext";
import HeaderIn from "../components/HeaderIn";
import Posts from "../components/Posts";
import Profile from "../components/Profile";
import Accordion from "../components/Accordion";
import Interests from "../components/Interests";
import AlertBox from "../components/AlertBox";
import Right from "../components/Direita";


class HomePage extends React.Component{
  constructor () {
    super()
    this.state = {
      loading: true,
      posts: [],
    }
  }
  static contextType = UserContext;


  componentDidMount () {
    const { user } = this.context;
    fetch('http://localhost:3001/post', {
        method: 'GET',
        headers: new Headers({
          "Content-Type": "application/json",
      "Authorization":`${user.token}`
      }),
      }).then(async(response)=>{
        const result = await response.json();
        console.log(result);
        this.setState({
          posts: result,
          loading: false,
        })
          });
        };

  render(){
    const { theme, changeTheme, myFunction } = this.props;
    const { posts, loading } = this.state;
    const { user } = this.context;
    return(
      <>
      { !loading ? (
       <>
       <HeaderIn changeTheme={changeTheme} theme={theme} image={ user.image } />
       <br></br>
       <div className="w3-container w3-content">
       <div className="w3-row">
       <div className="w3-col m3">
        <Profile image={ user.image }></Profile>
       <br></br>
       <Accordion myFunction={ myFunction }></Accordion>
       <br></br>
       <Interests></Interests>
       <br></br>
       <AlertBox></AlertBox>
       </div>
       <Posts posts={posts}></Posts>
       <Right></Right>
       </div>
       </div>
       </>
       ) : <div> Carregando... </div> }
       </>
      
    )
  }
}

export default HomePage;