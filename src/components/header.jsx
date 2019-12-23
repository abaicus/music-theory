import React from 'react';
import PropTypes from 'prop-types';
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="navbar container">
          <section className="navbar-section">Guitar Notes</section>
          <section className="navbar-section">
            <label className="form-switch">
              <input type="checkbox" onChange={this.props.onToggleDarkMode} />
              <i className="form-icon"></i> Dark mode
            </label>
            <a href="#" className="btn btn-link">
              GitHub
            </a>
          </section>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  onToggleDarkMode: PropTypes.func.isRequired,
};
