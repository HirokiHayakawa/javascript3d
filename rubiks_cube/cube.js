$(function() {
  let cam = {
    pos:{
      x:0,
      y:0,
      z:-10.0,
    },
    n:{
      x:1,
      y:0,
      z:0,
    },
  };
  let cube_size = 0.5;
  let black  = '#000000';
  let red    = '#FF0000';
  let green  = '#008000';
  let yellow = '#FFFF00';
  let white  = '#FFFFFF';
  let blue   = '#0000FF';
  let orange = '#FFA500';
  let rubiks_cube = init_rubiks_cube(cube_size, red, green, yellow, white, blue, orange);
  let canvas_id = '#cube';
  clear_canvas(canvas_id);
  render_rubiks_cube(canvas_id, rubiks_cube, cam);
  ////////////////////////////////////////////////
  let mouseRDown = false;
  let mouseLDown = false;
  let mousePos3d;
  let clickedMousePos3d;
  let move = null;
  ////////////////////////////////////////////////
  $(canvas_id).contextmenu(function(e){
    return false;
  });

  $(canvas_id).mousedown(function(e){
    if (e.which == 1) {
      mouseLDown = true;
      let mousePos = getMousePos(canvas_id, e);
      clickedMousePos3d = mousePosTo3d(cam, mousePos);
    } else if (e.which == 3) {
      mouseRDown = true;
    }
  });

  $(canvas_id).mouseup(function(e){
    if (e.which == 1) {
      mouseLDown = false;
      clickedMousePos3d = null;
      rubiks_cube.applyMove(move);
      clear_canvas(canvas_id);
      render_rubiks_cube(canvas_id, rubiks_cube, cam, move);
    } else if (e.which == 3) {
      mouseRDown = false;
    }
  });

  $(canvas_id).mousemove(function(e){
    let mousePos = getMousePos(canvas_id, e);
    if (mouseRDown){
      let prevPos = mousePos3d;
      let currPos = mousePosTo3d(cam, mousePos);
      rotate_cam_by_mouse(cam, prevPos, currPos);
      mousePos3d = mousePosTo3d(cam, mousePos);
    } else if (mouseLDown) {
      let currPos = mousePosTo3d(cam, mousePos);
      move = rubiks_cube.moveEvent(cam, clickedMousePos3d, currPos);
      clear_canvas(canvas_id);
      render_rubiks_cube(canvas_id, rubiks_cube, cam, move);
    }
    mousePos3d = mousePosTo3d(cam, mousePos);
  });

  ////////////////////////////////////////////////
  function rotate_cam(cam, axis, theta){
    cam.pos = rotate(cam.pos, axis, theta);
    cam.n = rotate(cam.n, axis, theta);
  }

  function rotate_cam_by_mouse(cam, prevPos, currPos){
    let nz = vec_div(cam.pos, norm(cam.pos));
    let p1 = vec_add(prevPos, vec_mul(nz, norm(cam.pos)));
    let p2 = vec_add(currPos, vec_mul(nz, norm(cam.pos)));
    let axis = v_product(p1, p2);
    if (norm(axis) > 0){
      let theta = Math.acos(d_product(p1, p2) / (norm(p1) * norm(p2)));
      rotate_cam(cam, axis, -theta * 15);
      clear_canvas(canvas_id);
      render_rubiks_cube(canvas_id, rubiks_cube, cam, move);
    }
  }
});
