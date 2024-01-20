// const fs = require('fs')
// const path = require('path')
// fs.readdir('secret-folder', (err, data) => {
//     console.log(data);
//     data.forEach( file => {
//         console.log(file+" "+ "-" +" "+path.extname(file)+" "+"-"+" "+(fs.statSync("secret-folder/"+file).size+" "+'byte'));
//     });
// });


const fs = require('fs').promises;
const path = require('path');

async function printFileInfo() {
  const folderPath = '03-files-in-folder/secret-folder';

  try {
    const files = await fs.readdir(folderPath);
    
    console.log('Информация о файлах в папке "secret-folder":');

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const stats = await fs.stat(filePath);

      console.log(`${file}:`);
      console.log(`  Размер: ${stats.size} байт`);
      console.log(`  Создан: ${stats.birthtime}`);
      console.log(`  Последнее изменение: ${stats.mtime}`);
      console.log('-------------------------');
    }
  } catch (err) {
    console.error('Произошла ошибка:', err);
  }
}


printFileInfo();