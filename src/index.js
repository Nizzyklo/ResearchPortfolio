
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PointTarget from 'react-point'




class Display extends React.Component {
  render() {
    const { display, props } = this.props
    return (
      <div {...props} className="display">
  {display}
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    const { onPress, className, ...props } = this.props
    return (
      <PointTarget onPoint={onPress}>
        <button className={`calc-input ${className}`} {...props}/>
      </PointTarget>
    )
  }
}

// Default Class that stores all of the variables 
class Calculator extends React.Component {
  state = {
    display: null,
    numStorage: [0]  //array to store numbers and operands 
  };
  
  
  //clears out the board
  performClearAll() {
    this.setState({
      display: null,
      numStorage: [0]
    })
  }

  
  
  //Sees if the number is prime 
  isPrime() {
    var { numStorage} = this.state
    var numberI= 0; 

    //To get number out of the array
for (var i=1; i<numStorage.length;i++ ){
  numberI= "" + numberI + numStorage[i];
  }

  //Checks if prime
  for(var i = 2; i < numberI; i++){
    

    if(numberI % i === 0) {numStorage= ['Yes']
  break}
    else{
    numStorage= ['No']
    break
    }
   

  
} 

if(numberI ==2||numberI ==0){
  numStorage= ['Yes']
}
if(numberI ==1){
  numStorage= ['No']
}
    this.setState({
      numStorage: numStorage
    })
  }
  

  //Factorial Function
  Factorial() {
    var { numStorage} = this.state
    var numberI= 0; 

    //To get number out of the array
for (var i=1; i<numStorage.length;i++ ){
numberI= "" + numberI + numStorage[i];
}

var  factSum = 1;
while (numberI>=2){
factSum= factSum*numberI;
numberI=numberI-1;
}
numStorage= [factSum ]
    this.setState({
     numStorage: numStorage
    })
  }
  

 //Factorial Function
 squareRoot() {
  var { numStorage} = this.state
  var numberI= 0; 

  //To get number out of the array
for (var i=1; i<numStorage.length;i++ ){
numberI= "" + numberI + numStorage[i];
}



numStorage= [Math.sqrt(numberI) ]

  this.setState({
   numStorage: numStorage
  })
}





   //Division Function
   performDivision() {
    const { numStorage } = this.state
    numStorage.push('/');
    this.setState({
   numStorage: numStorage
    })
  }

  //Multiplication Function
  performMultiplication() {
    const { numStorage } = this.state
   
    numStorage.push('*');
    
    this.setState({
   numStorage: numStorage
    })
  }

  //Subtraction Function
  performSubtraction() {
    const { numStorage } = this.state
   
    numStorage.push('-');
    this.setState({
   numStorage: numStorage
    })
  }

  //Addition Function
  performAddition() {
    var { numStorage } = this.state
   
    numStorage.push('+');
    this.setState({
   numStorage: numStorage
    })
  }



  //Equals Function
  performEquals() {
    var {numStorage } = this.state
    
    //I guess it starts at 1, not sure why 
   var indexCounter = 1 ;
   var firstNum=0;
   var secondNum=0;
   var output=0;



   //Find where sign is to seperate out first num from rest
while (numStorage[indexCounter] == 0 || numStorage[indexCounter] == 1 || numStorage[indexCounter] == 2 || numStorage[indexCounter] == 3 || numStorage[indexCounter] == 4 || numStorage[indexCounter] == 5 || numStorage[indexCounter] == 6 || numStorage[indexCounter] == 7 || numStorage[indexCounter] == 8 || numStorage[indexCounter] == 9 || numStorage[indexCounter] == '.') {
indexCounter = indexCounter +1

}

//To get number before operator 
for (var i=1; i<indexCounter;i++ ){
firstNum= "" + firstNum + numStorage[i];

}

//To get number after operator 
for (var i=indexCounter+1; i<numStorage.length;i++ ){
  secondNum = "" + secondNum + numStorage[i]
  
  }

  //If addition 
  if ( numStorage[indexCounter]=='+'){
  output= firstNum  + secondNum
  }
  
   //If Subtraction
   if ( numStorage[indexCounter]=='-'){
    output= firstNum  - secondNum
    }

    //If Multiplication
   if ( numStorage[indexCounter]=='*'){
    output= firstNum  * secondNum
    }

    //If division
   if ( numStorage[indexCounter]=='/'){
    output= firstNum  / secondNum
    }


    numStorage= [ output] 
    this.setState({
      
      numStorage: numStorage
       })
  }




//Places decimal
  inputDot() {
    const { display, numStorage } = this.state
    numStorage.push('.')
   
      this.setState({
        numStorage: numStorage
      })
    }

  
 

//Places numebers
  inputDigit(digit) {
    var {  numStorage } = this.state
    
   if (numStorage[0]== 0){  // If the first input a zero replace it with the input number 
    delete numStorage[0]  //Removes zero and replaces with input 
    numStorage.push(digit)
  } 
  else {
numStorage.push(digit)
   }

this.setState({   
  numStorage: numStorage
        })

  }
  
  

  
  

  

  render() {
    const { numStorage } = this.state

    return (
      <div className="calculator">
        <Display display={numStorage}/>
        
        <div className="calc-functions">
          <div className="input-keys">
            <div className="function-keys">
              <Input className="Input-clear" onPress={() => this.performClearAll()}>Clear</Input>
              <Input className="Input-isPrime" onPress={() => this.isPrime()}>Prime?</Input>
              <Input className="Input-Factorial" onPress={() => this.Factorial()}>!</Input>
              <Input className="Input-Root" onPress={() => this.squareRoot()}>Sqrt</Input>
             
            </div>
            <div className="calc-numbers">
              <Input className="Input-0" onPress={() => this.inputDigit(0)}>0</Input>
              <Input className="Input-1" onPress={() => this.inputDigit(1)}>1</Input>
              <Input className="Input-2" onPress={() => this.inputDigit(2)}>2</Input>
              <Input className="Input-3" onPress={() => this.inputDigit(3)}>3</Input>
              <Input className="Input-4" onPress={() => this.inputDigit(4)}>4</Input>
              <Input className="Input-5" onPress={() => this.inputDigit(5)}>5</Input>
              <Input className="Input-6" onPress={() => this.inputDigit(6)}>6</Input>
              <Input className="Input-7" onPress={() => this.inputDigit(7)}>7</Input>
              <Input className="Input-8" onPress={() => this.inputDigit(8)}>8</Input>
              <Input className="Input-9" onPress={() => this.inputDigit(9)}>9</Input>
              <Input className="Input-dot" onPress={() => this.inputDot()}>●</Input>
            </div>
          </div>
           <div className="calc-operators">
            <Input className="Input-divide" onPress={() => this.performDivision('/')}>÷</Input>
            <Input className="Input-multiply" onPress={() => this.performMultiplication('*')}>×</Input>
            <Input className="Input-subtract" onPress={() => this.performSubtraction('-')}>−</Input>
            <Input className="Input-add" onPress={() => this.performAddition('+')}>+</Input>
            <Input className="Input-equals" onPress={() => this.performEquals('=')}>=</Input>
          </div>
        </div>
      </div>
    )
  }
}

// Render the calculator 
ReactDOM.render(<Calculator />, document.getElementById("root"));

