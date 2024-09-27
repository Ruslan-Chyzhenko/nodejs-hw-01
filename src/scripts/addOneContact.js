// export const addOneContact = async () => {};

// addOneContact();

import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {};

try {
  const contacts = await readContacts();
  const newContacts = createFakeContact();
  const updatedContacts = [...contacts, newContacts];
  await writeContacts(updatedContacts);
  console.log('New contact has been added successfully!');
} catch (error) {
  console.error('Error adding one contact:', error);
}

addOneContact();
