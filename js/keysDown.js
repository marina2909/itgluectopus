var keys = {
    37: 'left',
    39: 'right',
    38: 'up',
    40: 'down',
    32: 'space',
    65: 'a',
    83: 's',
    68: 'd',
    87: 'w'
};

class KeysDown {

    constructor () {
        this.kDown = {};
        addEventListener('keydown', e => {
            console.log('down');
    		this.kDown[keys[e.keyCode]] = true;
    	});
        addEventListener('keyup', e => {
            console.log('up');
    		this.kDown[keys[e.keyCode]] = false;
    	});
    }

	getKeys () {
		return this.kDown;
	}

};
