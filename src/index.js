import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Header from './components/header.jsx';
import App from './components/app.jsx';
import Controls from './components/controls.jsx';
import './scss/style.scss';

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: false,
      scaleType: 'major',
    };

    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.changeScaleType = this.changeScaleType.bind(this);
  }
  render() {
    return (
        <div
          className={classnames(['app-wrap', { dark: this.state.darkMode }])}
        >
          <Header onToggleDarkMode={this.toggleDarkMode} />
          <Controls
            scaleType={this.state.scaleType}
            changeScaleType={scaleType => this.changeScaleType(scaleType)}
          />
          <App />
        </div>
    );
  }

  toggleDarkMode() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  changeScaleType(type) {
    this.setState({ scaleType: type });
  }
}

ReactDOM.render(<Application />, document.getElementById('root'));
