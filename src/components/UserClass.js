import React from "react";

class UserClass extends React.Component{
constructor(props){
    super(props)
    this.state = {
        userInfo:"",
        followers:""
    }
}

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/PraveenReddyGudigopuram");
    const json = await data.json();
    this.setState({
        userInfo:json,
        followers:json
    })
    console.log(json);
}

    render(){
       const {name,followers} = this.state.userInfo;
        return(
            <div>
                <h1>{name}</h1>
                <h2>{followers}</h2>
            </div>
        )
    }
}

export default UserClass;