import React from "react";

class Posts extends React.Component{
  render(){
    const { posts } = this.props;
    return(
      <div class="w3-col m7">
    
      <div class="w3-row-padding">
        <div class="w3-col m12">
          <div class="w3-card w3-round w3-white">
            <div class="w3-container w3-padding">
              <h6 class="w3-opacity">Social Media template by w3.css</h6>
              <p contentditable="true" class="w3-border w3-padding">Status: Feeling Blue</p>
              <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Post</button> 
            </div>
          </div>
        </div>
      </div>
        { posts.map((post) => (
          <div className="w3-container w3-card w3-white w3-round w3-margin">
            <br></br>
          <img src={ post.user.image } alt="" style={{ height: '60px', width: '60px' }} className="w3-left w3-circle w3-margin-right"></img>
          <span class="w3-right w3-opacity">{ post.published }</span>
          <h4> { post.user.displayName } </h4>
          <br></br>
          <hr className="w3-clear"></hr>
          <p> { post.content } </p>
          <div className="w3-row-padding" style={ { margin: "0 -16px" }}> 
          { post.image ? (
            <div className="w3-half"> 
          <img src={ post.image } alt="" className="w3-margin-bottom"></img>
          </div>
          ) : null }
          </div>
          <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i> Like</button> 
        <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i> Comment</button> 
          </div>
        )
        )}
     </div>
    );
  }
}

export default Posts;