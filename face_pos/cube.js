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
  let p1 = {
    x:-0.5,
    y:-0.5,
    z:-0.5,
  };
  let p2 = {
    x:0.5,
    y:-0.5,
    z:-0.5,
  };
  let p3 = {
    x:0.5,
    y:0.5,
    z:-0.5,
  };
  let p4 = {
    x:-0.5,
    y:0.5,
    z:-0.5,
  };
  let p5 = {
    x:-0.5,
    y:-0.5,
    z:0.5,
  };
  let p6 = {
    x:0.5,
    y:-0.5,
    z:0.5,
  };
  let p7 = {
    x:0.5,
    y:0.5,
    z:0.5,
  };
  let p8 = {
    x:-0.5,
    y:0.5,
    z:0.5,
  };
  let cube = {
    face:[],
  };
  cube.face[0] = {
    p1:p1,
    p2:p2,
    p3:p3,
    p4:p4,
    color:'#F00'
  };
  cube.face[1] = {
    p1:p5,
    p2:p6,
    p3:p7,
    p4:p8,
    color:'#0F0'
  };
  cube.face[2] = {
    p1:p1,
    p2:p5,
    p3:p8,
    p4:p4,
    color:'#00F'
  };
  cube.face[3] = {
    p1:p2,
    p2:p6,
    p3:p7,
    p4:p3,
    color:'#FF0'
  };
  cube.face[4] = {
    p1:p1,
    p2:p5,
    p3:p6,
    p4:p2,
    color:'#F0F'
  };
  cube.face[5] = {
    p1:p4,
    p2:p8,
    p3:p7,
    p4:p3,
    color:'#0FF'
  };
  ////////////////////////////////////////////////
  let axis = {
    x : 1,
    y : 0.8,
    z : 1
  }
  clear_canvas('#cube');
  render_cube('#cube', cube, cam);

  $('#cube').mousedown(function(e){
    rotate_cam(cam, axis, 0.05);
    clear_canvas('#cube');
    render_cube('#cube', cube, cam);
    show_mouse_pos_on_face(cube.face[0], e);
  });

  $('#cube').mousemove(function(e){
    show_mouse_pos_on_face(cube.face[0], e);
  });

  function show_mouse_pos_on_face(face, e){
    let mousePos = getMousePos('#cube', e);
    mousePos3d = mousePosTo3d(cam, mousePos);
    let f = mousePosToFacePos(cam, face, mousePos3d);
    $('#m_x').text('mouse.x' + mousePos3d.x);
    $('#m_y').text('mouse.y' + mousePos3d.y);
    $('#m_z').text('mouse.z' + mousePos3d.z);

    $('#f_x').text('face.x' + f.x);
    $('#f_y').text('face.y' + f.y);
    $('#f_z').text('face.z' + f.z);
  }
  ////////////////////////////////////////////////
  function clear_canvas(selector){
    let canvas = $(selector);
    let o = $(canvas).get(0);
    let width_px = $(canvas).width();
    let height_px = $(canvas).height();
    let c = o.getContext("2d");
    c.clearRect(0, 0, width_px, height_px);
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
    c.fillStyle = fillstyle;
    c.fill();
  }

  function neg(p){
    return {
      x: - p.x,
      y: - p.y,
      z: - p.z
    };
  }

  function vec_div(a, div){
    return {
      x:a.x / div,
      y:a.y / div,
      z:a.z / div
    };
  }

  function vec_mul(a, mul){
    return {
      x:a.x * mul,
      y:a.y * mul,
      z:a.z * mul
    };
  }
  function vec_add(a, b){
    return {
      x:a.x + b.x,
      y:a.y + b.y,
      z:a.z + b.z
    };
  }

  function vec_sub(a, b){
    return {
      x:a.x - b.x,
      y:a.y - b.y,
      z:a.z - b.z
    };
  }

  function d_product(a, b){
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }

  function v_product(a, b){
    return {
      x:a.y * b.z - a.z * b.y,
      y:a.z * b.x - a.x * b.z,
      z:a.x * b.y - a.y * b.x
    };
  }

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

  function mousePosToFacePos(cam, face, p){
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
      let av_a = {
        x : (a.p1.x + a.p2.x + a.p3.x + a.p4.x) / 4,
        y : (a.p1.y + a.p2.y + a.p3.y + a.p4.y) / 4,
        z : (a.p1.z + a.p2.z + a.p3.z + a.p4.z) / 4,
      };
      let av_b = {
        x : (b.p1.x + b.p2.x + b.p3.x + b.p4.x) / 4,
        y : (b.p1.y + b.p2.y + b.p3.y + b.p4.y) / 4,
        z : (b.p1.z + b.p2.z + b.p3.z + b.p4.z) / 4,
      };
      let da = Math.sqrt((cam.pos.x - av_a.x) * (cam.pos.x - av_a.x) + (cam.pos.y - av_a.y) * (cam.pos.y - av_a.y) + (cam.pos.z - av_a.z) * (cam.pos.z - av_a.z));
      let db = Math.sqrt((cam.pos.x - av_b.x) * (cam.pos.x - av_b.x) + (cam.pos.y - av_b.y) * (cam.pos.y - av_b.y) + (cam.pos.z - av_b.z) * (cam.pos.z - av_b.z));
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

  function norm(p){
    return Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z);
  }

  /* よくある3次元座標の回転変換 */
  function rotate(p, axis, theta){
    let a = vec_div(axis, norm(axis));
    let c = Math.cos(theta);
    let s = Math.sin(theta);
    let ret = {
      x : (c + a.x*a.x*(1 - c))*p.x + (a.x*a.y*(1 - c) - a.z*s)*p.y + (a.x*a.z*(1 - c) + a.y*s)*p.z,
      y : (a.x*a.y*(1 - c) + a.z*s)*p.x + (c + a.y*a.y*(1 - c))*p.y + (a.y*a.z*(1 - c) - a.x*s)*p.z,
      z : (a.x*a.z*(1 - c) - a.y*s)*p.x + (a.y*a.z*(1 - c) + a.x*s)*p.y + (c + a.z*a.z*(1 - c))*p.z
    }
    return ret;
  }

  function rotate_cam(cam, axis, theta){
    cam.pos = rotate(cam.pos, axis, theta);
    cam.n = rotate(cam.n, axis, theta);
  }
});
