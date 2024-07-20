document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todoForm');
    const projectInput = document.getElementById('projectInput');
    const deadlineInput = document.getElementById('deadlineInput');
    const nameInput = document.getElementById('nameInput');
    const surnameInput = document.getElementById('surnameInput');
    const todoList = document.getElementById('todoList');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const project = projectInput.value.trim();
      const deadline = deadlineInput.value.trim();
      const name = nameInput.value.trim();
      const surname = surnameInput.value.trim();
  
      if (project === '' || deadline === '' || name === '' || surname === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      const newItem = document.createElement('li');
      newItem.innerHTML = `
        <span><strong>Project:</strong> ${project}</span><br>
        <span><strong>Deadline:</strong> ${deadline}</span><br>
        <span><strong>Name:</strong> ${name}</span><br>
        <span><strong>Surname:</strong> ${surname}</span>
      `;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.addEventListener('click', function() {
        todoList.removeChild(newItem);
      });
  
      newItem.appendChild(deleteBtn);
      todoList.appendChild(newItem);
  
      // Clear input fields after adding item
      projectInput.value = '';
      deadlineInput.value = '';
      nameInput.value = '';
      surnameInput.value = '';
    });
  });
  