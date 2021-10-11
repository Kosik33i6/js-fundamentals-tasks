import { v4 as uuidv4 } from 'uuid';

const randomCountry = require('random-country');

const url = 'https://randomuser.me/api/?results=1';

const getPersonData = () => fetch(url)
    .then(response => response.json())
    .then(data => {
       return [...data.results].pop();
    })
    .catch(error => {
        throw new Error(error);
    });


async function generateHuman() {
    // TODO try / catch
    let data;
    try {
      data = await getPersonData();

    } catch(error) {
        throw new Error(error);
    }

    const name = data.name.first;
    const surname = data.name.last;
    const {age} = data.dob;
    const {email} = data;
    const phone = Math.floor(100000000 + Math.random() * 900000000);
    const country = randomCountry({ full: true });
    const id = uuidv4();

    const human = {
        name,
        surname,
        age,
        email,
        phone,
        country,
        id,
    };

    return human;
}

generateHuman();
