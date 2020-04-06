Ext.define('storeAdder.view.main.TodoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.todocontroller',
    onItemSelected: function () {
        alert('Item selected!');
    },
    onButtonSelected: function () {
        var me = this;
        alert('Lets hide the button!');
    },
    addItem: function () {
/**When creating no need for xtype in config */
/**Define this in a seperate file 
 * Use a form instead of window
 * Grid.getStore() to get the store 
 * Could pass ref to store, 
*/

        var window = Ext.create('Ext.form.Panel',{
            //xtype: 'window',
            floating: true, 
            itemId: 'fpanel',
            title: 'Submit a Todo',
            layout: 'vbox',
            scrollable: true,
            autoShow: true,
            frame: true,
            bodyPadding: 10,
            width: 400,
            height: 400,
            store: this.getView().getStore(),
            items: [{
                /**Don't use id use itemId and you 
                 * can access with itemId instead with 
                 * a hash
                 * This is a simple way to add to stores
                 * using a memory proxy; 
                 * Check out different proxies such
                 * as buffer etc. look up Infinite scrolling examples. 
                 */
                    xtype: 'textfield',
                    fieldLabel: 'Task Title',
                    name: 'taskTitle',
                    // id: 'taskTitle',
                    itemId: 'taskTitle'
                    //Refs are more efficient for fields
                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'Task Comments',
                    name: 'taskComments',
                    itemId: 'taskComments',
                    
                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'Todo Date',
                    name: 'todoDate',
                    itemId: 'todoDate',
                    
                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'Completed Status',
                    name: 'completedStatus',
                    itemId: 'completedStatus',
                    
                },
                {
                    xtype: 'button',
                    text: 'Submit',
                    name: 'submitButton',
                    listeners: {
                        //either a proxy with a reader or just load/add functions on your stores//
                        click: function () {
                            var me = this;
                            var parent = me.up('#fpanel');
                            var store = parent.store;
                            var task = Ext.create('storeAdder.model.TodoModel', {
                                todoDate: parent.down('#todoDate').getValue(),
                                // todoDate: parent.down('#todoDate').getValue(),
                            })
                            store.add(task);
                        }
                    }
                }
            ],
        })
    }
});
