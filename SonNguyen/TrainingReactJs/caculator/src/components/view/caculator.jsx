import React, { Component } from "react";
import "../css/caculator.scss";
class Caculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      cal: "",
      number2: "",
    };
  }

  isNumber = (e) => {
    let { number, cal, number2 } = this.state;

    if (cal) {
      this.setState({
        result: number + cal + number2,
        number2: number2 + Number(e.target.value),
      });
    } else {
      this.setState({
        result: number + cal + number2,
        number: number + Number(e.target.value),
      });
    }
  };
  removeAll = () => {
    this.setState({
      number: "",
      cal: "",
      number2: "",
    });
  };
  remove = () => {
    let { number, cal, number2 } = this.state;
    if (!number2) {
      if (!cal) {
        if (number.length !== undefined) {
          let newRel = number.slice(0, -1);
          this.setState({
            number: newRel,
          });
        } else {
          this.setState({
            number: "",
          });
        }
      } else {
        let newRel = cal.slice(0, -1);
        this.setState({
          cal: newRel,
        });
      }
    } else {
      let newRel = number2.slice(0, -1);
      this.setState({
        number2: newRel,
      });
    }
  };
  caculation = (e) => {
    let { cal } = this.state;
    if (!cal) {
      this.setState({
        cal: e.target.value,
      });
    } else {
      return (
        this.rel(),
        this.setState({
          cal: e.target.value,
        })
      );
    }
  };
  rel = () => {
    let { number, cal, number2 } = this.state;
    switch (cal) {
      case "+":
        this.setState({
          number: Number(number) + Number(number2),
          cal: "",
          number2: "",
        });
        break;
      case "-":
        this.setState({
          number: Number(number) - Number(number2),
          cal: "",
          number2: "",
        });
        break;
      case "*":
        this.setState({
          number: Number(number) * Number(number2),
          cal: "",
          number2: "",
        });
        break;
      case "/":
        this.setState({
          number: Number(number) / Number(number2),
          cal: "",
          number2: "",
        });
        break;
      default:
        this.setState({
          number,
        });
    }
  };

  render() {
    let { number, cal, number2 } = this.state;
    return (
      <div className="caculator">
        <div className="screen">
          {number} {cal} {number2}
        </div>
        <div className="group">
          <button className="btn" onClick={this.removeAll}>
            C
          </button>

          <button className="btn" onClick={this.remove}>
            DEL
          </button>
          <button value="/" onClick={this.caculation}>
            /
          </button>
        </div>
        <div className="group">
          <button value={7} onClick={this.isNumber}>
            7
          </button>
          <button value={8} onClick={this.isNumber}>
            8
          </button>
          <button value={9} onClick={this.isNumber}>
            9
          </button>
          <button value="*" onClick={this.caculation}>
            *
          </button>
        </div>
        <div className="group">
          <button value={4} onClick={this.isNumber}>
            4
          </button>
          <button value={5} onClick={this.isNumber}>
            5
          </button>
          <button value={6} onClick={this.isNumber}>
            6
          </button>
          <button value="+" onClick={this.caculation}>
            +
          </button>
        </div>
        <div className="group">
          <button value={1} onClick={this.isNumber}>
            1
          </button>
          <button value={2} onClick={this.isNumber}>
            2
          </button>
          <button value={3} onClick={this.isNumber}>
            3
          </button>
          <button value="-" onClick={this.caculation}>
            -
          </button>
        </div>
        <div className="group">
          <button className="groupBot" value={0} onClick={this.isNumber}>
            0
          </button>
          <button className="groupBot" onClick={() => this.rel()}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Caculator;
