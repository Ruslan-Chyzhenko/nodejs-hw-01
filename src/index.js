// index.js

// import { getAllContacts } from './scripts/getAllContacts.js';
// import { addContact } from './scripts/addOneContact.js';
// import { removeLastContact } from './scripts/removeLastContact.js';
// import { removeAllContacts } from './scripts/removeAllContacts.js';
// import { countContacts } from './scripts/countContacts.js';

// setInterval(() => {
//   console.log('Hello world');
// }, 1000);

// import fs from 'node:fs';
// const fs = require('node:fs');

// const content = fs.readFileSync('test.txt');
// fs.writeFileSync('output.txt', content);
// const entry = JSON.parse(content.toString());
// console.log(entry.message);

// Щоб перевести з формату тексту в JS
// Використовуємо JSON
// Прочитати як набір байтів
// Перетворити в строку
// Далі потрібно розпарсити стороку та отримати об'єкт
// Далі працюємо як зі звичайним JS об'єктом.
// * Buffer - це масив байтів

// Callback

// import fs from 'node:fs';

// fs.readFile('test.json', (err, content) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   fs.writeFile('output.txt', content, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('write');
//   });
//   console.log('read');
// });
// console.log('finish');

// Порядок виведення в консолі:
// finish — це буде виведено одразу, оскільки асинхронні операції не блокують основний потік.
// read — після завершення читання файлу test.json.
// write — після успішного запису вмісту у файл output.txt.

// Async
// import fs from 'node:fs/promises';

// const content = await fs.readFile('test.json');
// await fs.writeFile('output.txt', content);

// const entry = JSON.parse(content.toString());
// console.log(entry.message);

// await fs.appendFile('output.txt', content); //add
// await fs.unlinkFile('output.txt', content); // delete
//const content = await fs.rename('test.json', 'new.json');

// import path from 'node:path';
// path - конструктор складання шляху/модуль для побудови шляхів в ОС(Windows, MacOs).
// console.log(path.parse('dir/test.json.dsh'));

// console.log(path.join(process.cwd(), 'test', 'testTest'));
// console.log(path.normalize(path.join(process.cwd(), '..', '///testTest')));

// -fs, -path - використовуються при роботі з файловою системою/робота із файлами.

// path.join([...paths])
// path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'
// path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'

// path.parse(path)
// path.parse('/home/user/dir/file.txt');
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
