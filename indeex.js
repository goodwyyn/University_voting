const Submit = document.getElementById('Submit');

// original
Submit.addEventListener('click', function() {
    alert('Submitted.This can only be done once');

})

//binds an event listener in addingEventListener()

function addingEventListener (){
    Submit.addEventListener('click', function() {
        alert('Submitted.This can only be done once');
    
    })
    
}

console.log ('addingEventListener')
