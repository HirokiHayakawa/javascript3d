function getMousePos(selector, e){
  let canvas = $(selector);
  mx = e.pageX - canvas.position().left;
  my = e.pageY - canvas.position().top;
  let width_px = $(canvas).width();
  let height_px = $(canvas).height();
  let scale_px = width_px;
  if (scale_px > height_px){
    scale_px = height_px;
  }
  scale_px /= 2.0;
  let o_px_x = width_px / 2.0;
  let o_px_y = height_px / 2.0;
  let x = (mx - o_px_x) / scale_px;
  let y = (my - o_px_y) / scale_px;
  return {x:x, y:y};
}

function mousePosTo3d(cam, pos){
  let nx = cam.n;
  let ny = v_product(neg(cam.pos), nx);
  ny = vec_div(ny, norm(ny));
  return vec_add(vec_mul(nx, pos.x), vec_mul(ny, pos.y));
}

function MousePosToFacePos(cam, face, p){
  let fv1 = vec_sub(face.p1, face.p2);
  let fv2 = vec_sub(face.p3, face.p2);
  let fn = v_product(fv1, fv2);
  fn = vec_div(fn, norm(fn));
  fd = - d_product(face.p1, fn);
  let q = cam.pos;
  let v = vec_sub(p, q);
  let t = - (d_product(fn, q) + fd) / d_product(fn, v);
  let r = vec_add(q, vec_mul(v, t));
  return r;
}
