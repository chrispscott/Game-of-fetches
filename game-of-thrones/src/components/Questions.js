import React from 'react';
class Questions extends Component {
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

    
    render() { 
        return ( 
            <h1>hello this is the questions Component</h1>
         );
    }
}
 
export default Questions;