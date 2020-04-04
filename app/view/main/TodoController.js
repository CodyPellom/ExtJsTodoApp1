Ext.define('storeAdder.view.main.TodoController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.todocontroller',
    onItemSelected: function() {
        alert('Item selected!');
    },
    onButtonSelected: function(){
        var me = this;
        alert('Lets hide the button!');
    },
    addItem: function () {

        Ext.create({
            extend: 'Ext.window.Window',
            xtype: 'window',
            title: 'Submit a Todo',
            layout: 'vbox',
            scrollable: true,
            autoShow: true,
            frame: true,
            bodyPadding: 10, 
            width: 400,
            height: 650,
            
            items: [
                {
                    xtype: 'textfield', 
                    fieldLabel: 'Task Title',
                    name: 'taskTitle',
                    emptyText: 'Task Title Here',
                },
                {
                    xtype: 'textarea', 
                    fieldLabel: 'Task Comments',
                    name: 'taskComments',
                    emptyText: 'Task Comments Here',
                },
                {
                    xtype: 'datepicker',
                    fieldLabel: 'Task Due Date',
                    name: 'taskDueDate',
                    emptyText: 'Task Due Date Here',
                },
                {
                    xtype: 'checkbox', 
                    fieldLabel: 'Completed?',
                    name: 'taskCompletedStatus'
                },
                {
                    xtype: 'button',
                    text: 'Submit',
                    name: 'submitButton',
                    listeners: {
                        click: function(sender, record){
                            var me = this; 
                            var todoPanel = me.getView();
                            var todoStore = todoPanel.getStore();
                            // todoStore.insert(0, new Ext.data.Model({ todoTitle: me.taskTitle, todoComments: me.taskComments }));
                            // //Adding data//
                            record.set({
                                todoTitle: me.taskTitle,
                                todoComments:me.taskComments,
                                todoDate:me.taskDueDate,
                                completedStatus: me.taskCompletedStatus
                            });

                            // var todoModel = Ext.create('storeAdder.model.TodoModel');
                            // todoModel.set("todoTitle", "Todo Title");
                            // todoModel.set("todoComments", "Todo Comments");
                            // todoModel.set("todoDate", "Todo Date");
                            // todoModel.set("completedStatus", "Completed Status");

                            // todoStore.insert(0, todoModel);
                        }
                    }
                }
            ],
        })
 
    }
});