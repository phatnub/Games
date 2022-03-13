'use strict';
const fs = require('fs').promises;
const SFILE = __dirname + '/../data/score.json';

module.exports = {
	async getPlayers() {
		let re = [];
		try {
			let data = await fs.readFile(SFILE);
			re = JSON.parse(data);
        } catch(e) {
            console.log(e.message);
        }
        return re;
    },
	
	async putPlayer(name, sum, time) {
		let dataP = [];
		try {
			let data = await fs.readFile(SFILE);
			dataP = JSON.parse(data);
			let user = {name: name, sum: sum, timeUsed: time};
			dataP.push(user);
			try {
				await fs.writeFile(SFILE, JSON.stringify(dataP)); 
			} catch(ee) {
				console.log(ee.message);
			}
		} catch(e) {
            console.log(e.message);
		}
	}
};
