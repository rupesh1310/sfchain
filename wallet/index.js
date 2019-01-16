const { INITIAL_BALANCE } = require('../config');

class Wallet {
	constructor() {
		this.balance = INITIAL_BALANCE;
		this.keypair = null;
		this.publickey = null;
	}

toString() {
	return `Wallet - 
	publickey: ${this.publickey.toString()}
	balance  : ${this.balance}`
 }
}

module.exports = Wallet;
