
// Para poder pegar todos os cards
const cards = document.querySelectorAll('.card')

// Para poder pegar todos os lugares one eu vou poder soltar os cards
const dropZones = document.querySelectorAll('.cards')

cards.forEach(card =>{ 
  card.addEventListener('dragstart', handleDragStart)
  // card.addEventListener('drag', handleDrag)
  card.addEventListener('dragend', handleEndDrag)
})

dropZones.forEach(dropZone=>{
  // dropZone.addEventListener('dragenter', handleDragEnter)
  dropZone.addEventListener('dragover', handleDragOver)
  dropZone.addEventListener('dragleave', handleDragLeave)
  dropZone.addEventListener('drop', handleDrop)
})

function handleDragStart(){
  dropZones.forEach(dropZone=> dropZone.classList.add('highLight'))
  this.classList.add('isDragging')
}


function handleEndDrag(){
  dropZones.forEach(dropZone=> dropZone.classList.remove('highLight'))
  this.classList.remove('isDragging')
}


function handleDragOver(){
    // Pegar a dropZone
  this.classList.add('overDropZone')

  // Pegando o card que está sendo movido
  const cardIsDraggingNow = document.querySelector('.isDragging')
  // Pegar a dropZone
  this.appendChild(cardIsDraggingNow)
}

function handleDragLeave(){
  this.classList.remove('overDropZone')
}

function handleDrop(){
  this.classList.remove('overDropZone')
}