
function R3toR2(cam, p){
  let nx, ny, nz;
  let ret = {
    x: 0,
    y: 0
  };
  nx = cam.n;
  ny = v_product(neg(cam.pos), nx);
  ny = vec_div(ny, norm(ny));
  nz = vec_div(cam.pos, norm(cam.pos));
  pn = vec_sub(p, cam.pos);
  let ratio = norm(cam.pos) / d_product(pn, neg(nz));
  pn = vec_mul(pn, ratio);
  ret.x = d_product(nx, pn);
  ret.y = d_product(ny, pn);
  return ret;
}

function clear_canvas(selector){
  let canvas = $(selector);
  let o = $(canvas).get(0);
  let width_px = $(canvas).width();
  let height_px = $(canvas).height();
  let c = o.getContext("2d");
  c.clearRect(0, 0, width_px, height_px);
  c.beginPath();
  c.fillStyle = '#040';
  c.fillRect(0, 0, width_px, height_px);
}

/* 四角形を描画する(2次元座標) */
function quadrangle_2d(selector, fillstyle, p1, p2, p3, p4){
  let canvas = $(selector);
  let width_px = $(canvas).width();
  let height_px = $(canvas).height();
  let scale_px = width_px;
  if (scale_px > height_px){
    scale_px = height_px;
  }
  scale_px /= 2.0;
  let o_px_x = width_px / 2.0;
  let o_px_y = height_px / 2.0;
  let o = $(canvas).get(0);
  let c = o.getContext("2d");
  c.beginPath();
  c.moveTo(p1.x * scale_px + o_px_x, p1.y * scale_px + o_px_y);
  c.lineTo(p2.x * scale_px + o_px_x, p2.y * scale_px + o_px_y);
  c.lineTo(p3.x * scale_px + o_px_x, p3.y * scale_px + o_px_y);
  c.lineTo(p4.x * scale_px + o_px_x, p4.y * scale_px + o_px_y);
  c.closePath();
  c.strokeStyle = '#000';
  c.stroke();
  c.fillStyle = fillstyle;
  c.fill();
}

/* 四角形を描画する(3次元座標) */
function quadrangle_3d(selector, cam, fillstyle, p1, p2, p3, p4){
  p_2d_1 = R3toR2(cam, p1);
  p_2d_2 = R3toR2(cam, p2);
  p_2d_3 = R3toR2(cam, p3);
  p_2d_4 = R3toR2(cam, p4);
  quadrangle_2d(selector, fillstyle, p_2d_1, p_2d_2, p_2d_3, p_2d_4);
}

/* 立方体を描画する */
/* カメラから近い順に3面描画すれば辻褄が合う */
function render_cube(selector, cube, cam) {
  let bk = [];
  cube.face.forEach (function (e, i){
    bk[i] = e;
  });
  cube.face.sort(function (a, b){
    let da = distance(cam.pos, face_center(a));
    let db = distance(cam.pos, face_center(b));
    return da - db;
  });
  for (let i = 3 ; i >= 0 ; i--){
    e = cube.face[i];
    quadrangle_3d(selector, cam, e.color, e.p1, e.p2, e.p3, e.p4);
  }
  bk.forEach (function (e, i){
    cube.face[i] = e;
  });
}

/* カメラから遠い順に全てのキューブをレンダリングすれば辻褄が合う */
/*
function render_rubiks_cube(selector, rubiks_cube, cam){
  let bk = [];
  rubiks_cube.cube.forEach (function (e, i){
    bk[i] = e;
  });
  rubiks_cube.cube.sort(function (a, b){
    let da = distance(cam.pos, cube_center(a));
    let db = distance(cam.pos, cube_center(b));
    return db - da;
  });
  rubiks_cube.cube.forEach (function (e){
    render_cube(selector, e, cam);
  });
  bk.forEach (function (e, i){
    rubiks_cube.cube[i] = e;
  });
}
*/
function render_rubiks_cube(selector, rubiks_cube, cam, move = null){
  let bk = [];
  function render_block(block){
    block.cube.sort(function (a, b){
      let da = distance(cam.pos, cube_center(a));
      let db = distance(cam.pos, cube_center(b));
      return db - da;
    });
    block.cube.forEach (function (e){
      render_cube(selector, e, cam);
    });
  }
  rubiks_cube.cube.forEach (function (e, i){
    bk[i] = e;
  });
  if (move == null){
    render_block(rubiks_cube);
  } else {
    let slice_cube_ids = rubiks_cube.get_cubes_from_move(move);
    let slice_cubes = {cube:[]};
    let block_cubes = {cube:[]};
    rubiks_cube.cube.forEach (function (e, i){
      if (slice_cube_ids.includes(i)){
        slice_cubes.cube.push(e);
      } else {
        block_cubes.cube.push(e);
      }
    });
    let da = distance(cam.pos, block_center(slice_cubes));
    //let db = distance(cam.pos, block_center(block_cubes));
    if (da > 10) { // da - dbで評価したかったが、うまく描画できなかった
      render_block(slice_cubes);
      render_block(block_cubes);
    } else {
      render_block(block_cubes);
      render_block(slice_cubes);
    }
  }
  bk.forEach (function (e, i){
    rubiks_cube.cube[i] = e;
  });
}
