import { NodeEditor } from './node_editor.mjs';
import MockBrowser from 'mock-browser'

/*
	TODO: Make a reasonable DOM system to make it easy to define HTML doms
	Try to find the other implementation where this was already done and see if we can use it or relearn from it

*/


class Tree {
	set(path, value) {
		console.log(`Tree.set(${path}, ${value})`);
	}
}


class DOMRef {
	constructor(document) {
		this.tree = new Tree();
		this.elements = new Array();
		this.document = document;
	}

	create_element(name, settings) {
		const element = this.document.createElement(name);
		if (element.id) {
			this.tree.set(element.id, element);
		}
		return element;
	}

	create_text(name, text) {
		return this.document.createTextNode(text);
	}

}

const mockument = MockBrowser.mocks.MockBrowser.createDocument();
const result = new DOMRef(mockument);

var ne = new NodeEditor({width: 800, height: 600});
var r = ne.implement_into(result);

console.log(r);
