import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading contacts from ${PATH_DB}:', err);
    return [];
  }
};
