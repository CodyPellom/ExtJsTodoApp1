Ext.define('storeAdder.store.TodoStore', {
    extend: 'Ext.data.Store',
    alias: 'store.todostore',
    model: 'storeAdder.model.TodoModel',
    data: {
        items: [

            {
                todoTitle: 'Walk the dog',
                todoComments: 'Done it',
                todoDate: '03/03/2003',
                completedStatus: 'done'
            },
            {
                todoTitle: 'take out the trash',
                todoComments: 'no',
                todoDate: '03/04/2003',
                completedStatus: 'not done'
            },
            {
                todoTitle: 'Do your homework',
                todoComments: 'after dinner',
                todoDate: '03/05/2003',
                completedStatus: 'not done'
            },

        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json', //When you get data, this is how to interperet it 
            rootProperty: 'items'
        },
        writer: {
            type: 'json'
        }
    },
    autoLoad: true

    //either a proxy with a reader or just load/add functions on your stores//

});