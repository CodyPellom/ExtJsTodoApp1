Ext.define('storeAdder.model.TodoModel', {
    extend: 'storeAdder.model.Base',

    fields: [
        'todoTitle', 'todoComments', 'todoDate', 'completedStatus'
    ]
});
