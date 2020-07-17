import React from 'react';
import axios from 'axios';
import Axios from 'axios';

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
            
         }
    }
    
    // componentDidMount() {
    //     axios.get('http://anapioficeandfire.com/api/characters/16')
    //   .then(res => this.setState({ solution1: res.data.born }))
    //   .catch(e => console.error(e.message));
    // }

    async getsolution(){
        const res = await axios.get('http://anapioficeandfire.com/api/characters/16')
        const ans1 = res.data.born;
        this.setState({
            solution1: ans1
        })
        
    }
    async getsolution2(){
        const res = await axios.get('http://www.anapioficeandfire.com/api/houses/378')
        this.setState({
            solution2: res.data.region
        })
    }
    async getsolution3(){
        const res = await axios.get('http://www.anapioficeandfire.com/api/houses/229')
        this.setState({
            solution3: res.data.coatOfArms
        })
    }
    async getsolution4(){
        const res = await axios.get('http://www.anapioficeandfire.com/api/houses/17')
        this.setState({
            solution4: res.data.seats[1]
        })
    }
    async getsolution5(){
        const res = await axios.get('http://www.anapioficeandfire.com/api/characters/901')
        this.setState({
            solution5: res.data.aliases[1]
        })
    }
    async getsolution6(){
        const res = await axios.get('https://www.anapioficeandfire.com/api/characters/209')
        this.setState({
            solution6: res.data.name
        })
    }

    




    // ! this is a comment
    // * this is a comment
    // todo/ this is a comment
    //  ?  this is a comment
    //  this ia a comment

    componentDidMount() {
        this.getsolution()
        this.getsolution2();
        this.getsolution3();
        this.getsolution4();
        this.getsolution5();
        this.getsolution6();
       
    }

    render() { 
        return ( 
            <div>
                <h1>hello this is the questions Component</h1>
               <h1> '1 Where was Margaery Tyrell born? '</h1>  
                  <h1>  {this.state.solution1}   </h1>

               
               <h1>2 What region is House Targaryen in? </h1>
               <h1>  {this.state.solution2}   </h1>

               <h1>3 What's the coat of arms of House Lannister? </h1>
               <h1>  {this.state.solution3}   </h1>

               <h1>4 What is the second seat of House Baratheon? </h1>
               <h1>  {this.state.solution4}   </h1>

               <h1>5 What is Robert Baratheon's second alias? </h1>
               <h1>  {this.state.solution5}   </h1>

               <h1>6 What's the name of the founder of House Stark? </h1>
               <h1>  {this.state.solution6}   </h1>
            
 
            </div>
         );
    }
}
 
export default Questions;