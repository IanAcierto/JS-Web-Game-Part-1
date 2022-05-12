function newImage(image, left, bottom){
  let object = document.createElement('img')
  object.src = image
  object.style.position = 'fixed'
  object.style.left = left + 'px'
  object.style.bottom = bottom + 'px'
  document.body.append(object)
}
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', '450', '150')
newImage('assets/tree.png', '200', '300')
newImage('assets/pillar.png', '350', '100')
newImage('assets/well.png', '500', '425')
function newItem(newImage){
  let item = newImage();
  item.addEventListener(dbclick,function(){
    item.remove()
  });
  return item;
}

let sword = newItem(newImage('assets/sword.png', '500', '450'))
let shield = newItem(newImage('assets/shield.png', '165', '185'))
let staff = newItem(newImage('assets/staff.png', '600', '100'))
//i couldn't figure out newItem for the life of meuiylet sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

/*

newobjects
___________
assets/tree.png (200px from the left, 300px from the bottom)
assets/pillar.png (350px from the left, 100px from the bottom)
assets/crate.png (150px from the left, 200px from the bottom)
assets/well.png (500px from the left, 425px from the bottom)
new items
__________
assets/shield.png (165px from the left, 185px from the bottom)
assets/staff.png (600px from the left, 100px from the bottom)
*/