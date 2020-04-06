Ext.define('storeAdder.model.TodoModel', {
    extend: 'Ext.data.Model',
    fields: [
        //This is defining one entry into the store
        //Simply a data model. 
        {name: 'todoTitle', type: 'string'},
        {name: 'todoComments', type: 'string'},
        {name: 'todoDate', type: 'string'},
        {name: 'completedStatus', type: 'string'},
        //Try out adding validations 
    ],
});

