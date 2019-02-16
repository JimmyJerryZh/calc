import React from 'react';
import ReactDOM from 'react-dom';
import math from 'mathjs'
import './index.css';

function Button(props){
  return(
    <button className="square" onClick={props.onClick} value={props.label}>
      {props.value}
    </button>
  );
}


function Screen(props){
  return(
    <div className="square"> {props.value} </div>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      input: '',
      condition: false
    }
  }

  renderSquare(i) {
    return (
      <Button
        label={i}
        value={i}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  renderUScreen() {
    return <Screen value={this.state.answer} />
  }

  renderLScreen(){
    return <Screen value={this.state.input} />
  }

  // onClick = (e) =>{
  //   const id = e.target.getAttribute("id");
  //   console.log(id);
  // }

  handleClick(i){
    //console.log(this)
    //console.log("hello")
    //console.log(i)
    const value = i

    if(i==='='){
      console.log('input is')
      console.log(this.state.input)
      try {
        var ans = eval(this.state.input)
        console.log("ans is ")
        console.log(ans)
        var old = this.state.input
        ans.toString()
        this.setState({input:ans,answer:old})
        }
      catch (e) {
        if (e) {
          console.log(e)
          this.setState({ input: 'error',condition:true})

        }
      }
    }
    else if (i==='CE')
    {
      console.log('condition is')
      console.log(this.state.condition)
      console.log('input is')
      console.log(this.state.input)
      if(this.state.condition || this.state.input.toString()==='NaN'){
        this.setState({input:''})
      }
      else{
        var temp = this.state.input.toString()
        temp = temp.slice(0,-1)
        this.setState({ input: temp})
      }
      
    }
    else if (i==='AC'){
      this.setState({ input: '',answer:''})
    }
    else{
      //console.log(this.state.input += value)
      if(this.state.condition || this.state.input.toString()==='NaN'){
        this.setState({input:value,condition:false})
      }
      else{
        this.setState({ input: this.state.input += value})
      }

    }
    //console.log(this.state.value)

  }

  render() {
    return (
      <div className="board">
        <div className="board-row">
          {this.renderUScreen()}
        </div>
        <div className="board-row">
          {this.renderLScreen()}
        </div>
        <div className="board-row">
          {this.renderSquare('(')}
          {this.renderSquare(')')}
          {this.renderSquare('AC')}
          {this.renderSquare('CE')}
        </div>
        <div className="board-row">
          {this.renderSquare('7')}
          {this.renderSquare('8')}
          {this.renderSquare('9')}
          {this.renderSquare('/')}
        </div>
        <div className="board-row">
          {this.renderSquare('4')}
          {this.renderSquare('5')}
          {this.renderSquare('6')}
          {this.renderSquare('*')}
        </div>
        <div className="board-row">
          {this.renderSquare('1')}
          {this.renderSquare('2')}
          {this.renderSquare('3')}
          {this.renderSquare('-')}
        </div>
        <div className="board-row">
          {this.renderSquare('0')}
          {this.renderSquare('.')}
          {this.renderSquare('=')}
          {this.renderSquare('+')}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
