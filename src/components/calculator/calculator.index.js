import React, { Component } from "react";
import "./calculator.styles.scss";
import Button from "../button/button.index";
import Calculate from "../calculations/calculation";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: "0",
      calculate: new Calculate(),
    };
  }
  isButtonClick = (targetValue) => {
    this.setState({ display: this.state.calculate.calc(targetValue) });
  };
  render() {
    console.log("this.state.calculate :", this.state.calculate);
    return (
      <React.Fragment>
        <h1>Do your Math</h1>
        <div className="mainWrap">
          <div className="calculatorContainer">
            <div className="calcScreen">
              <div className="screenView">{this.state.display}</div>
            </div>
            <div className="calcButtons">
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="%"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="&plusmn;"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="&divide;"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="&times;"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="7"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="8"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="9"
              />
              <Button
                className={`button`}
                onClick={this.isButtonClick}
                value="&minus;"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="4"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="5"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="6"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="+"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="1"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="2"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="3"
              />
              <Button
                className="button button_equal"
                onClick={this.isButtonClick}
                value="="
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="0"
              />
              <Button
                className="button"
                onClick={this.isButtonClick}
                value="."
              />
              <Button
                className="button button_allClear"
                onClick={this.isButtonClick}
                value={this.state.calculate.isCAC ? "C" : "AC"}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
