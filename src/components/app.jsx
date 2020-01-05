import React from 'react';
import { notes, strings } from '../store/data.js';
import Note from './note.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.guitarStrings = strings.reverse();
  }

  render() {
    const { guitarStrings } = this;
    return (
      <table className="fretboard">
        <tbody>
          {this.renderNumberRow()}
          {guitarStrings.map((note, stringIndex) => {
            return (
              <tr className="string-wrap" key={stringIndex}>
                <Note isStringNo={true} key={stringIndex}>
                  {6 - stringIndex}
                </Note>
                <Note isRootNote={true} key={note}>
                  {note}
                </Note>
                {notes.map(item => {
                  if (item === note) {
                    const start = notes.indexOf(note),
                      remaining = notes.slice(start + 1),
                      newNotes = remaining.concat(notes),
                      final = newNotes.slice(0, 12);
                    return final.map((finalNote, indexInOctave) => {
                      return (
                        <Note
                          isDotFret={[2, 4, 6, 8].includes(indexInOctave)}
                          isRootNote={indexInOctave === 11}
                          key={indexInOctave + finalNote}
                        >
                          {finalNote}
                        </Note>
                      );
                    });
                  }
                })}
              </tr>
            );
          })}
          {this.renderNumberRow()}
        </tbody>
      </table>
    );
  }

  renderNumberRow() {
    const fretIndexes = [...Array(14).keys()];

    return (
      <tr className="string-wrap fret-numbers">
        {fretIndexes.map(index => {
          if (index === 0) return <Note className="note" key={index} />;
          return (
            <Note isFretNumber={true} key={index}>
              { [4, 6, 8, 10, 13].includes(index) ? index - 1 : ''}
            </Note>
          );
        })}
      </tr>
    );
  }
}
