var path = require('path');

describe('Contacts', function() {
	browser.get('http://localhost:8080');
	it('should add a contact', function() {
		element(by.model('vm.name')).sendKeys('Gary');
		element(by.model('vm.phoneNumber')).sendKeys('0782837819');
		element(by.css('button')).click();

		var contactList = element.all(by.repeater('contact in vm.contacts'));
		expect(contactList.count()).toEqual(4);
		expect(contactList.get(3).element(by.css('h4')).getText()).toEqual('Name: Gary');
		expect(contactList.get(3).element(by.css('h6')).getText()).toEqual('Phone: 0782837819');
	});

	it('should delete a contact', function() {
		var contactList = element.all(by.repeater('contact in vm.contacts'));

		contactList.get(1).element(by.css('a')).click();
		expect(contactList.count()).toEqual(3);
	});

});
