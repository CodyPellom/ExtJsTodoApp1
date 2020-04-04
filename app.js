/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'storeAdder.Application',

    name: 'storeAdder',

    requires: [
        // This will automatically load all classes in the storeAdder namespace
        // so that application classes do not need to require each other.
        'storeAdder.*'
    ],

    // The name of the initial view to create.
    mainView: 'storeAdder.view.main.Main'
});
