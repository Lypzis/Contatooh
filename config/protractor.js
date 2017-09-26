// config/protractor.js

//passo a passo do teste de ponta a ponta automatizado
exports.config = {
	specs: ['../test/e2e/**/*.js'],
	onPrepare: function(){
		browser.get('http://localhost:3000/#/auth'); //passo 1 acessar página inicial
		browser.driver.findElement(by.id('entrar')).click();
		browser.driver.findElement(by.id('login_field'))
			.sendKeys('victorvp1995@hotmail.com');
		browser.driver.findElement(by.id('password'))
			.sendKeys('testeLogin@25');
		browser.driver.findElement(by.name('commit')).click();
	}
};

