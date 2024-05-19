function showModels(brand) {
    const modelsDiv = document.getElementById('models');
    modelsDiv.style.display = 'block';
    modelsDiv.innerHTML = '';
  
    let models = [];
    if (brand === 'playstation') {
      models = ['PS1', 'PS2', 'PS3', 'PS4', 'PS5'];
    } else if (brand === 'xbox') {
      models = ['Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series X'];
    } else if (brand === 'nintendo') {
      models = ['Nintendo Switch', 'Nintendo Switch Lite', 'Nintendo Switch OLED'];
    }
  
    models.forEach(model => {
      const modelElement = document.createElement('div');
      modelElement.className = 'model';
      modelElement.textContent = model;
      modelsDiv.appendChild(modelElement);
    });
  }
  