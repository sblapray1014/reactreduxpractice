import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
