import React from 'react';
import { notes, strings } from '../store/data.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.guitarStrings = strings.reverse();
  }

  render() {
    const { guitarStrings } = this;
    return (
      <section className="fretboard">
        {this.renderNumberRow()}
        {guitarStrings.map((note, stringIndex) => {
          return (
            <div className="string-wrap" key={stringIndex}>
              <span className="note string-no">{6 - stringIndex}</span>
              <span className="root-note note">{note}</span>
              {notes.map(item => {
                if (item === note) {
                  const start = notes.indexOf(note),
                    remaining = notes.slice(start + 1),
                    newNotes = remaining.concat(notes),
                    final = newNotes.slice(0, 12);
                  return final.map((finalNote, indexInOctave) => {
                    return (
                      <span className="note" key={indexInOctave}>
                        {finalNote}
                        {/*{stringIndex}|{indexInOctave}*/}
                      </span>
                    );
                  });
                }
              })}
            </div>
          );
        })}
        {this.renderNumberRow()}
      </section>
    );
  }

  renderNumberRow() {
    const fretIndexes = [...Array(14).keys()];

    return (
      <div className="string-wrap fret-numbers">
        {fretIndexes.map(index => {
          if (index === 0) return <span className="note" />;
          return (
            <span className="note fret-number" key={index}>
              {index - 1}
            </span>
          );
        })}
      </div>
    );
  }
}
