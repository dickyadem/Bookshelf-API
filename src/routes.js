const {
    addbookHandler,
    getAllbooksHandler,
    getSpecifiedBookHandler,
    editbookByIdHandler,
    deletebookByIdHandler,
    } = require('./handler');
    const routes = [
      {
          method: 'POST',
          path: '/books',
          handler: addbookHandler,
        },
        {
          method: 'GET',
          path: '/books',
          handler: getAllbooksHandler,
        },
        {
          method: 'GET',
          path: '/books/{bookId}',
          handler: getSpecifiedBookHandler,
        },
        {
          method: 'PUT',
          path: '/books/{bookId}',
          handler: editbookByIdHandler,
        },
        {
          method: 'DELETE',
          path: '/books/{bookId}',
          handler: deletebookByIdHandler,
        },
    ];
     
    module.exports = routes;