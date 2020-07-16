import React from 'react';
import axios from 'axios';

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            solution1:'',
            solution2:'',
            solution3:'',
            solution4:'',
            solution5:'',
            solution6:'',
            solution7:'',
            solution8:'',
            solution9:'',
            solution10:'',
         }
    }
    componentDidMount() {
        axios.get('http://anapioficeandfire.com/api/characters/583')
      .then(res => this.setState({ solution1: res.data.aliases }))
      .catch(e => console.error(e.message));
    }

    // ! this is a comment
    // * this is a comment
    // todo/ this is a comment
    //  ?  this is a comment
    //  this ia a comment


    render() { 
        return ( 
            <div>
                <h1>hello this is the questions Component</h1>
                {this.state.solution1}
            </div>
         );
    }
}
 
export default Questions;