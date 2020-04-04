Ext.define('storeAdder.view.main.todoview.TodoView', {

    extend: 'Ext.grid.Panel',
    xtype: 'todoView',
    controller: 'todocontroller',

    store: {
        type: 'todostore'
    },

    requires: [
        'Ext.toolbar.Paging',
        'Ext.layout.container.Table',
        'Ext.container.Container',
        'storeAdder.store.TodoStore'

    ],
    
    columns: [{
            text: 'Todo Title',
            dataIndex: 'todoTitle'
        },
        {
            text: 'Todo Comments',
            dataIndex: 'todoComments',
            flex: 1
        },
        {
            text: 'Todo Date',
            dataIndex: 'todoDate',
            flex: 1
        },
        {
            text: 'Completed Status',
            dataIndex: 'completedStatus',
            flex: 1
        },

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",

        items: ['-',
            {
                xtype: 'button',
                title: 'Add Button',
                text: 'Add',
                enableToggle: false,
                listeners: {
                    click: 'addItem'
                }
            },
            {
                xtype: 'button',
                text: 'Remove',
                enableToggle: false,
            },
            {
                xtype: 'button',
                text: 'Edit',
                enableToggle: false,
            }

        ]
    },

    listeners: {
        select: 'onItemSelected'
    }

});
