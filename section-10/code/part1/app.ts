// declare var $: any; // define the variable $ manually but doesn't provide intellisense. Poor way to define it

// this will throw an error if run tsc without have previously know what the dollar sign is
$('button').click(function() {
    console.log('Button was clicked');
});
