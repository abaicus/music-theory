import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
export default class Controls extends React.Component {
  render() {
    const { scaleType } = this.props;
    return (
      <div className="container m-2">
        <div className="columns control-cols">
          <div className="col-6"><h5 className="s-subtitle m-0" id="buttons-sizes">Scale Type: </h5></div>
          <div className="btn-group col-6">
            <button
              className={classnames([
                'btn',
                'btn-sm',
                { active: scaleType === 'major' },
              ])}
              onClick={() => this.props.changeScaleType('major')}
            >
              Major
            </button>
            <button
              className={classnames([
                'btn',
                'btn-sm',
                { active: scaleType === 'minor' },
              ])}
              onClick={() => this.props.changeScaleType('minor')}
            >
              Minor
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  scaleType: PropTypes.string.isRequired,
  changeScaleType: PropTypes.func.isRequired,
};
