import React from "react";

class UserClass extends React.Component{
constructor(props){
    super(props)
    this.state = {count:0}
}
    render(){
        const {name} = this.props;
        const {count} = this.state;
        return(
            <div>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count+1
                    })
                }}>Count : {count}</button>
            </div>
        )
    }
}

export default UserClass;