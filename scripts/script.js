// Ex. 1 - Boas-vindas
const welcomeBtn = document.getElementById('welcomeBtn');
const welcomeMessage = document.getElementById('welcomeMessage');

welcomeBtn.addEventListener('click', function() {
    const nome = document.getElementById('userName').value || 'Visitante';
    const curso = "Front-End";
    welcomeMessage.textContent = `Bem-vindo, ${nome}! Você está no curso de ${curso}.`;
});

// Ex. 2 - Soma
const sumBtn = document.getElementById('sumBtn');
const sumResult = document.getElementById('sumResult');

sumBtn.addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    sumResult.textContent = num1 + num2;
});

// Ex. 3 - Mostrar/Esconder
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('click', function() {
    toggleText.classList.toggle('hidden');
});

// Ex. 4 - Mudança de Cor
const colorBox = document.getElementById('colorBox');

colorBox.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#4361ee';
});

colorBox.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#6c757d';
});

// Ex. 5 - Digitação em tempo real
const realTimeInput = document.getElementById('realTimeInput');
const realTimeOutput = document.getElementById('realTimeOutput');

realTimeInput.addEventListener('keyup', function() {
    realTimeOutput.textContent = this.value;
});

// Ex. 6 - Lista de Tarefas
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remover';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});

// Ex. 7 - Tema Escuro/Claro
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = '☀️ Modo Claro';
    } else {
        this.textContent = '🌙 Modo Escuro';
    }
});