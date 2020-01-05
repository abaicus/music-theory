import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      isStringNo,
      isRootNote,
      isFretNumber,
      isDotFret,
      children,
    } = this.props;
    const noteClasses = classnames([
      'note',
      {
        'string-no': isStringNo,
        'root-note': isRootNote,
        'fret-number': isFretNumber,
        'dot-fret': isDotFret,
      },
    ]);

    return (
      <td className={noteClasses}>
        <button className="btn btn-link note-wrap">{children}</button>
      </td>
    );
  }
}

Note.propTypes = {
  isStringNo: PropTypes.bool,
  isRootNote: PropTypes.bool,
  isFretNumber: PropTypes.bool,
  isDotFret: PropTypes.bool,
};
