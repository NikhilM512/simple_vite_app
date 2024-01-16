// import React from 'react'
// import {Component} from 'react';

import { Component } from "react";

// class Counter extends Component{

//     constructor(){
//         super();

//         this.state = {
//             count: 0,
//           };

//     //    this.handleDecrease = this.handleDecrease.bind(this);
//     //    this.handleIncrease = this.handleIncrease.bind(this);
//     //    this.handleReset = this.handleReset.bind(this);
//     }

//     handleDecrease = ()=>{
//         console.log(this.state.count)
//         if (this.state.count>0){
//             this.setState({
//                 count:this.state.count-1
//               })
//         }
//       }
    
//       handleIncrease = ()=>{
//         console.log(this.state.count)
//         this.setState({
//           count:this.state.count+1
//         })
//       }
    
//       handleReset = ()=>{
//         this.setState({
//           count:0
//         })
//       }

//     // handleDecrease(){
//     //     this.setState((prevState)=>({
//     //         count:prevState.count-1
//     //     }))
//     // }

//     // handleIncrease(){
//     //     this.setState((prevState)=>({
//     //         count:prevState.count+1
//     //     }));
//     // }

//     // handleReset(){
//     //     this.setState((prevState)=>({
//     //         count:prevState-1
//     //     }));
//     // }

//     render(){
//         return(
//             <>
//             <h1>Counter App</h1>
//             <h2>{this.state.count}</h2>
//             <div className='button-div'>
//                 <button onClick={this.handleIncrease}>+</button>
//                 <button onClick={this.handleDecrease}>-</button>
//                 <button onClick={this.handleReset}>Reset</button>
//             </div>
//             </>
//         )
//     }
// }

// // const Counter = () => {
// //   return (
// //     <div>Counter</div>
// //   )
// // }

// export default Counter

// import { Component } from 'react';
// // import './App.css';

// export default class Counter extends Component{
//   constructor(){
//     super();

//     this.state = {
//       counter : 0,
//     }
//   }

//   handleDecrease = ()=>{
//     this.setState({
//       counter:this.state.counter-1
//     })
//   }

//   handleIncrease = ()=>{
//     this.setState({
//       counter:this.state.counter+1
//     })
//   }

//   handleReset = ()=>{
//     this.setState({
//       counter:0
//     })
//   }


//   render(){
//     return(
//       <div className="counter">
//       <h1>Counter App</h1>
//       <span className="counter__output">{this.state.counter}</span>
//       <div className="btn__container">
//         <button className="control__btn" onClick={this.handleIncrease}>+</button>
//         <button className="control__btn" onClick={this.handleDecrease}>-</button>
//         <button className="reset" onClick={this.handleReset}>Reset</button>
//       </div>
//     </div>
//     )
//   }
// }


export default class Counter extends Component{

    constructor(){
        super();
        this.state={
            count:0
        }
    }

    handleDecrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    handleReset=()=>{
        this.setState({
            count:0
        })
    }


    render(){
        return <>
         <h1>Counter App</h1>
         <h2>{this.state.count}</h2>
         <div>
            <button onClick={this.handleIncrement}>+</button>
            <button onClick={this.handleDecrement}>-</button>
            <button onClick={this.handleReset}>Reset</button>
         </div>
        </>
    }

}