'use strict';

class ComponentBase {
	constructor(id) {
		this.container = document.getElementById(id);
	}
	show () {
		this.container.style.display = 'block';
	}
	hide () {
		delete this.container.style.display;
	}
}

export default ComponentBase
