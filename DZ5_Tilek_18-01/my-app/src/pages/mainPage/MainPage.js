import React, {Component} from 'react';

class MainPage extends Component {
    constructor(props) {

        super(props);
        this.state = {title: "Старый текст"}
    }

    changeTitle = () =>{
        this.setState({title:"Новый текст"})
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.changeTitle}>change title</button>
            </div>
        );
    }
}

export default MainPage;