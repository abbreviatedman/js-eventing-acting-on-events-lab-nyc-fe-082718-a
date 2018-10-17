const dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = 'pink'

document.addEventListener('keydown', function(event) {
  if (event.which === 37) {
    moveDodgerLeft()
  } else if (event.which === 39) {
    moveDodgerRight()
  }
})

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  const rightNumbers = dodger.style.right.replace('px', '')
  console.log(rightNumbers)
}
























// const dodger = document.querySelector('#dodger')

// const getLeft = () => dodger.style.left.replace('px', '')

// const getNewPosition = (leftSide, xChange) => parseInt(leftSide, 10) + xChange


// dodger.style.backgroundColor = 'red'

// document.addEventListener('keydown', handleKey)

// function handleKey(event) {
//   const key = event.which
//   switch(key) {
//     case 37:
//       moveDodgerLeft()
//       break;
//     case 39:
//       moveDodgerRight()
//       break;
//   }
// }

// function moveDodgerLeft() {
//   const left = getLeft()
//   const newPosition = getNewPosition(left, -1)
  
//   if (left >= 0) {
//     dodger.style.left = newPosition + 'px'
//   }
// }

// function moveDodgerRight() {
//   const left = getLeft()
//   const newPosition = getNewPosition(left, +1)
  
//   if (left <= 360) {
//     dodger.style.left = newPosition + 'px'
//   }
// }


