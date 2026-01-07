'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Метод 'up' используется для вставки данных
  async up (queryInterface, Sequelize) {
    // Вставляем данные в таблицу 'Notes'
    await queryInterface.bulkInsert('Notes', [
      {
        title: 'План на неделю',
        content: 'Понедельник: встреча с командой. Среда: завершить отчет. Пятница: отладка новой функции.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Рецепт кофе',
        content: 'Эспрессо: 18г кофе, 36г воды, экстракция 28 секунд. Температура 92°C.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Изучение нового фреймворка',
        content: 'Начать с официальной документации. Посмотреть тьюториалы на YouTube. Создать мини-проект.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  // Метод 'down' используется для отката вставки данных (удаления)
  async down (queryInterface, Sequelize) {
    // Удаляем все записи из таблицы 'Notes'
    await queryInterface.bulkDelete('Notes', null, {});
  }
};