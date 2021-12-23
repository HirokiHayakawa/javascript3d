$(function() {
  var cam_z = 4.0;
  var p1 = {
    x:-0.5,
    y:-0.5,
    z:-0.5,
  };
  var p2 = {
    x:0.5,
    y:-0.5,
    z:-0.5,
  };
  var p3 = {
    x:0.5,
    y:0.5,
    z:-0.5,
  };
  var p4 = {
    x:-0.5,
    y:0.5,
    z:-0.5,
  };
  var p5 = {
    x:-0.5,
    y:-0.5,
    z:0.5,
  };
  var p6 = {
    x:0.5,
    y:-0.5,
    z:0.5,
  };
  var p7 = {
    x:0.5,
    y:0.5,
    z:0.5,
  };
  var p8 = {
    x:-0.5,
    y:0.5,
    z:0.5,
  };
  var cube = {
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
  var axis = {
    x : 1,
    y : 0.8,
    z : 1
  }
  function mainloop() {
    clear_canvas('#cube');
    render_cube('#cube', cube);
    rotate_cube(cube, axis, 0.005);
    setTimeout(mainloop, 3);
  }
  mainloop();
  ////////////////////////////////////////////////
  function clear_canvas(selector){
    var canvas = $(selector);
    var o = $(canvas).get(0);
    var width_px = $(canvas).width();
    var height_px = $(canvas).height();
    var c = o.getContext("2d");
    c.clearRect(0, 0, width_px, height_px);
  }
  /* 四角形を描画する(2次元座標) */
  function quadrangle_2d(selector, fillstyle, p1, p2, p3, p4){
    var canvas = $(selector);
    var width_px = $(canvas).width();
    var height_px = $(canvas).height();
    var scale_px = width_px;
    if (scale_px > height_px){
      scale_px = height_px;
    }
    scale_px /= 2.0;
    var o_px_x = width_px / 2.0;
    var o_px_y = height_px / 2.0;
    var o = $(canvas).get(0);
    var c = o.getContext("2d");
    c.beginPath();
    c.moveTo(p1.x * scale_px + o_px_x, p1.y * scale_px + o_px_y);
    c.lineTo(p2.x * scale_px + o_px_x, p2.y * scale_px + o_px_y);
    c.lineTo(p3.x * scale_px + o_px_x, p3.y * scale_px + o_px_y);
    c.lineTo(p4.x * scale_px + o_px_x, p4.y * scale_px + o_px_y);
    c.closePath();
    c.fillStyle = fillstyle;
    c.fill();
  }
  /* 四角形を描画する(3次元座標) */
  function quadrangle_3d(selector, fillstyle, p1, p2, p3, p4){
    p_2d_1 = {
      x : p1.x * cam_z / (cam_z + p1.z),
      y : p1.y * cam_z / (cam_z + p1.z)
    };
    p_2d_2 = {
      x : p2.x * cam_z / (cam_z + p2.z),
      y : p2.y * cam_z / (cam_z + p2.z)
    };
    p_2d_3 = {
      x : p3.x * cam_z / (cam_z + p3.z),
      y : p3.y * cam_z / (cam_z + p3.z)
    };
    p_2d_4 = {
      x : p4.x * cam_z / (cam_z + p4.z),
      y : p4.y * cam_z / (cam_z + p4.z)
    };
    quadrangle_2d(selector, fillstyle, p_2d_1, p_2d_2, p_2d_3, p_2d_4);
  }
  /* 立方体を描画する */
  /* カメラから近い順に3面描画すれば辻褄が合う */
  function render_cube(selector, cube) {
    cube.face.sort(function (a, b){
      var av_a = {
        x : (a.p1.x + a.p2.x + a.p3.x + a.p4.x) / 4,
        y : (a.p1.y + a.p2.y + a.p3.y + a.p4.y) / 4,
        z : (a.p1.z + a.p2.z + a.p3.z + a.p4.z) / 4,
      };
      var av_b = {
        x : (b.p1.x + b.p2.x + b.p3.x + b.p4.x) / 4,
        y : (b.p1.y + b.p2.y + b.p3.y + b.p4.y) / 4,
        z : (b.p1.z + b.p2.z + b.p3.z + b.p4.z) / 4,
      };
      var cam = {
        x:0,
        y:0,
        z:cam_z
      }
      var da = Math.sqrt((cam.x - av_a.x) * (cam.x - av_a.x) + (cam.y - av_a.y) * (cam.y - av_a.y) + (cam.z - av_a.z) * (cam.z - av_a.z));
      var db = Math.sqrt((cam.x - av_b.x) * (cam.x - av_b.x) + (cam.y - av_b.y) * (cam.y - av_b.y) + (cam.z - av_b.z) * (cam.z - av_b.z));
      return da - db;
    });
    for (var i = 3 ; i < 6 ; i++){
      e = cube.face[i];
      quadrangle_3d(selector, e.color, e.p1, e.p2, e.p3, e.p4);
    }
  }
  function norm(p){
    return Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z);
  }
  /* よくある3次元座標の回転変換 */
  function rotate(p, axis, theta){
    var n = norm(axis);
    var a = {
      x : axis.x / n,
      y : axis.y / n,
      z : axis.z / n,
    }
    var c = Math.cos(theta);
    var s = Math.sin(theta);
    var ret = {
      x : (c + a.x*a.x*(1 - c))*p.x + (a.x*a.y*(1 - c) - a.z*s)*p.y + (a.x*a.z*(1 - c) + a.y*s)*p.z,
      y : (a.x*a.y*(1 - c) + a.z*s)*p.x + (c + a.y*a.y*(1 - c))*p.y + (a.y*a.z*(1 - c) - a.x*s)*p.z,
      z : (a.x*a.z*(1 - c) - a.y*s)*p.x + (a.y*a.z*(1 - c) + a.x*s)*p.y + (c + a.z*a.z*(1 - c))*p.z
    }
    return ret;
  }
  function rotate_cube(cube, axis, theta){
    cube.face.forEach(function (e){
      e.p1 = rotate(e.p1, axis, theta);
      e.p2 = rotate(e.p2, axis, theta);
      e.p3 = rotate(e.p3, axis, theta);
      e.p4 = rotate(e.p4, axis, theta);
    });
  }
});
