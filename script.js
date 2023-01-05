function sendMessage() {
    // Get the name and message from the form
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    
    // Create a new paragraph element
    var p = document.createElement('p');
    
    // Add the name and message to the paragraph
    p.innerHTML = name + ' says: ' + message;
    
    // Add the paragraph to the messages div
    var messages = document.getElementById('messages');
    messages.appendChild(p);
  }
  