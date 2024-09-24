// export const getAllContacts = async () => {};

// console.log(await getAllContacts());

import { promises as fs } from 'fs'; // Імпортуємо промісну версію fs з ESM
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  // Read File logic
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
  }
};

//  async
const showContacts = async () => {
  console.log(await getAllContacts());
};

showContacts();
