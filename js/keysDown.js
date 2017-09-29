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
            e.preventDefault();
    		this.kDown[keys[e.keyCode]] = true;
    	});
        addEventListener('keyup', e => {
            e.preventDefault();
    		this.kDown[keys[e.keyCode]] = false;
    	});
    }

	getKeys () {
		return this.kDown;
	}

};
