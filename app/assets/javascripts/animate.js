function animate() {

  requestAnimationFrame(animate);

  // for(var i = 0; i < boxes.length; i++) {
  //   console.log(boxes[i].scale.z );
  //   //this one does a thing!
  //   boxes[i].scale.y = 2;
  // }

  //begin here
  // for(var i =0; i<boxes.length; i++){
  //   boxes[i].rotation.x += (Math.random() * 0.01 + 0.00005);
  //   boxes[i].rotation.y += (Math.random() * 0.01 + 0.00001);
  //
  //   if(boxes[i].position.y < -1000){
  //     boxes[i].position.y = 1000;
  //   } else {
  //       boxes[i].position.y -= (Math.random() * 3);
  //     }
  //
  // }
  if (flyActive) {
    render();
    console.log(controls.object.position)
    if (controls.object.position.x >= 5300) {
      console.log("hit the x if")
      controls.object.position.x = -5000
    } else if (controls.object.position.x <= -5300) {
      controls.object.position.x = 5000
    } else if (controls.object.position.z >= 5300) {
      controls.object.position.z = -5000
    } else if (controls.object.position.z <= -5300) {
      controls.object.position.z = 5000
    } else if (controls.object.position.y <= 0) {
      controls.object.position.y = 2000
    } else if (controls.object.position.y >= 6500) {
      controls.object.position.y = 1
    }
  }

  renderer.render(scene, camera);
}

function render() {
  var delta = clock.getDelta();
  controls.update( delta );
}
