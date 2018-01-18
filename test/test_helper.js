import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const {JSDOM} = jsdom;

const doc = new JSDOM('<!doctype html><html><body></body></html>');
const win = doc.defaultView;


// Jest needs a window and a dom to create/mock elements while testing
global.window = doc.window;
global.document = doc.window.document;

// This sets all the window attributes in the global context for testing purposes
Object.keys(window).forEach((key)=>{
	if(!(key in global)){
		global[key] = window[key];
	}
});

chai.use(chaiImmutable);

