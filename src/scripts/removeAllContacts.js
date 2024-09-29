import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await writeContacts(emptyContacts);
    console.log('Bci контакти були видалено');
  } catch (error) {
    console.log('Помилка видалення всіх контактів', error);
  }
};

removeAllContacts();
