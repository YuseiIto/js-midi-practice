import fs from 'fs';
import MidiWriter from 'midi-writer-js';

// Start with a new track
const track = new MidiWriter.Track();

// Define an instrument (optional):
track.addEvent(new MidiWriter.ProgramChangeEvent({instrument: 1}));

// Add some notes:
const note = new MidiWriter.NoteEvent({pitch: ['C4', 'D4', 'E4'], duration: '4'});
track.addEvent(note);

const write = new MidiWriter.Writer(track);
const buf = write.buildFile();
fs.writeFileSync('output.mid', buf, 'binary');
