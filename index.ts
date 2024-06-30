import fs from 'fs';
import MidiWriter from 'midi-writer-js';

// Start with a new track
const track = new MidiWriter.Track();

// Define an instrument (optional):
track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 1 }));

const notes = ['C4', 'D4', 'E4', 'F4', 'E4', 'D4', 'C4',
	'E4X', 'F4', 'G4', 'A4', 'G4', 'F4', 'E4',
	'C4X', 'C4X', 'C4X', 'C4X',
	'C4SX', 'C4S', 'D4S', 'D4S', 'E4S', 'E4S', 'F4S', 'F4S',
	'E4', 'D4', 'C4'];


for (const p of notes) {
	let wait = null;
	if (p.includes('X')) {
		wait = '4';
	}

	let duration = '4';
	if (p.includes('S')) {
		duration = '8';
	}

	const pitch = [p.replace(/X|S/g, '')];

	const event = new MidiWriter.NoteEvent({ pitch, duration, wait });
	track.addEvent(event);
}

const write = new MidiWriter.Writer(track);
const buf = write.buildFile();
fs.writeFileSync('output.mid', buf, 'binary');
