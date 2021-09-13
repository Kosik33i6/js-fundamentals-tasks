import AddressBook from './components/AddressBook';

const addressBook = new AddressBook();

addressBook.addContact('Krzysztof', 'Kos', 'krzysztof.kos33@gmail.com');
addressBook.addContact('Michał', 'Wegrzyn', 'michał.wegrzyn@gmail.com');
// addressBook.addContact('Marek', 'Abramowicz', 'michał.wegrzyn@gmail.com');
// addressBook.addContact('Ewelina', 'Plech', 'ewelina.plech@gmail.com');
addressBook.addGroup('Gr1');
addressBook.addGroup('Gr2');
addressBook.addGroup('Gr3');
// addressBook.removeGroup(0)
addressBook.renameGroup(1, 'Friends')
console.log(addressBook);

// addressBook.removeContact(0);
// console.log(addressBook);

// console.log('Searching contact: ', addressBook.searchContact('M'));


