import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

// export const writeContacts = async (updatedContacts) => {};

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('`Contacts have been successfully saved to ${PATH_DB}');
  } catch (err) {
    console.error('Error writing contacts to ${PATH_DB}:', err);
  }
};
