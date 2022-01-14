/* 四角形の重心 */
function face_center(face){
  let center = {x:0, y:0, z:0};
  center = vec_add(center, face.p1);
  center = vec_add(center, face.p2);
  center = vec_add(center, face.p3);
  center = vec_add(center, face.p4);
  return vec_div(center, 4);
}

/* 立方体の重心 */
function cube_center(cube){
  let center = {x:0, y:0, z:0};
  let cnt = 0;
  cube.face.forEach(function(e){
    center = vec_add(center, face_center(e));
    cnt ++;
  });
  return vec_div(center, cnt);
}

/* 立方体のあつまりの重心 */
function block_center(block){
  let center = {x:0, y:0, z:0};
  let cnt = 0;
  block.cube.forEach(function(e){
    center = vec_add(center, cube_center(e));
    cnt ++;
  });
  return vec_div(center, cnt);
}
