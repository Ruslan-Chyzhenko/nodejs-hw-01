// const generateContacts = async (number) => {};

// generateContacts(5);

import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
  try {
    // Reading contacts
    const contacts = await readContacts();

    // Generate newContacts with createFakeContact
    const newContacts = [];
    for (let i = 0; i < count; i++) {
      newContacts.push(createFakeContact());
    }

    // Add newContacts
    const updatedContacts = [...contacts, ...newContacts];

    // Write new Array []
    await writeContacts(updatedContacts);

    console.log(`${count} new contacts have been added successfully!`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

// generateContacts
const count = 5;
generateContacts(count);
