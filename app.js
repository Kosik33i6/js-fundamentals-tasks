import AddressBook from './module-2/address-book/components/AddressBook';
import Group from './module-2/address-book/components/Group';
import Contact from './module-2/address-book/components/Contact';

const personsData = [
    {
      name: 'Krzysztof',
      surname: 'Kos',
      email: 'krzysztof.kos33@gmail.com',
      modificationDate: 'January 1th 2020, 1:08:15 pm',
      createDate: 'January 1th 2020, 1:08:15 pm',
      uuid: 'e2a6eb0e-878a-427b-ad99-333c05feb832'
    },
    {
      name: 'Michał',
      surname: 'Wegrzyn',
      email: 'michal.wegrzyn32141@gmail.com',
      modificationDate: 'September 7th 2021, 3:08:15 pm',
      createDate: 'September 7th 2021, 3:08:15 pm',
      uuid: '6759e7f9-84bd-4bc8-9a15-916375c9d464'
    }
  ];

const app = {
  initAddressBook() {
    // const addressBook = new AddressBook(personsData);
    const addressBook = new AddressBook();
    // addressBook.addContact('Krzysztof', 'Kos', 'krzysztof.kos33@gmail.com');
    // addressBook.addContact('Michał', 'Wegrzyn', 'michał.wegrzyn@gmail.com');
    // addressBook.addContact('Ewelina', 'Plech', 'ewelina.plech@gmail.com');
    // console.log('searching contact: ', addressBook.searchContact('Wegrzyn'));
    // console.log(addressBook);
    // addressBook.removeContact(0);
    // addressBook.changeContactData(0, 'email', 'michal.wegrzyn32141@gmail.com');
    // addressBook.displayContacts();
    // addressBook.addGroup('Group1');
    // addressBook.addGroup('Group2');
    // addressBook.renameGroup(1, 'Grupa numer 2')
    // console.log(addressBook);
    // console.log('filtered contact: ', addressBook.searchContact('Kos'));
  },

  initGroup() {
      const group = new Group(personsData, 'grupa-1', 'dsadsad');
      // console.log(group);
      group.renameGroup('grupa-321321123');
      // group.removeContact(1);
      // console.log(group);
      console.log(group.searchContact('kos'));
  },

  initContact() {
    const contact = new Contact({
      name: 'Krzysztof',
      surname: 'Kos',
      email: 'krzysztof.kos33@gmail.com',
      modificationDate: 'January 1th 2020, 1:08:15 pm',
      createDate: 'January 1th 2020, 1:08:15 pm',
      uuid: 'e2a6eb0e-878a-427b-ad99-333c05feb832'
    });
    contact.changeData('email', 'krzysztof.kos33i6@gmail.com')
    console.log('contact: ', contact);
  },

  init() {
    console.log('init app');
    // this.initAddressBook();
    // this.initGroup();
    this.initContact();
  }
};

app.init();
