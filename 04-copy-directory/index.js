const fs = require('fs').promises;
const path = require('path');

async function copyDir() {
  const sourceDir = '04-copy-directory/files';
  const destinationDir = '04-copy-directory/files-copy';

  try {
    const files = await fs.readdir(sourceDir);

    for (const file of files) {
      const sourceFilePath = path.join(sourceDir, file);
      const destinationFilePath = path.join(destinationDir, file);

      await fs.copyFile(sourceFilePath, destinationFilePath);
      console.log(`Файл ${file} успешно скопирован.`);
    }

    console.log('Копирование завершено.');
  } catch (err) {
    console.error('Произошла ошибка при копировании:', err);
  }
}

copyDir();