import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Header from './components/header.jsx';
import App from './components/app.jsx';
import './scss/style.scss';

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: false,
    };

    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }
  render() {
    return (
      <div className={classnames(['app-wrap', { dark: this.state.darkMode }])}>
        <Header onToggleDarkMode={this.toggleDarkMode} />
        <App />
      </div>
    );
  }

  toggleDarkMode() {
    this.setState({ darkMode: !this.state.darkMode });
  }
}

ReactDOM.render(<Application />, document.getElementById('root'));
