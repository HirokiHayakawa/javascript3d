function init_rubiks_cube(cube_size, red, green, yellow, white, blue, orange) {
  let black = '#000';
  function mouseLMoved(cam, face, clickedMousePos3d, mousePos3d) {
    let mouseMoveThreshold = 0.05;
    if (clickedMousePos3d == null || !face.mouseOn(cam, clickedMousePos3d)) {
      return false;
    }
    let mp1 = MousePosToFacePos(cam, face, clickedMousePos3d);
    let mp2 = MousePosToFacePos(cam, face, mousePos3d);
    let d = distance(mp1, mp2);
    if (d < mouseMoveThreshold) {
      return false;
    }
    return true;
  }
  let p1 = {x:-cube_size, y:-cube_size, z:-cube_size};
  let p2 = {x:cube_size,  y:-cube_size, z:-cube_size};
  let p3 = {x:cube_size,  y:cube_size,  z:-cube_size};
  let p4 = {x:-cube_size, y:cube_size,  z:-cube_size};
  let p5 = {x:-cube_size, y:-cube_size, z:cube_size};
  let p6 = {x:cube_size,  y:-cube_size, z:cube_size};
  let p7 = {x:cube_size,  y:cube_size,  z:cube_size};
  let p8 = {x:-cube_size, y:cube_size,  z:cube_size};
  let p000 = p1;
  let p100 = vec_add(p1, vec_mul(vec_div(vec_sub(p2, p1), 3), 1));
  let p200 = vec_add(p1, vec_mul(vec_div(vec_sub(p2, p1), 3), 2));
  let p300 = p2;
  let p010 = vec_add(p1, vec_mul(vec_div(vec_sub(p4, p1), 3), 1));
  let p020 = vec_add(p1, vec_mul(vec_div(vec_sub(p4, p1), 3), 2));
  let p030 = p4;
  let p001 = vec_add(p1, vec_mul(vec_div(vec_sub(p5, p1), 3), 1));
  let p002 = vec_add(p1, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p003 = p5;
  let p110 = vec_add(p100, vec_mul(vec_div(vec_sub(p4, p1), 3), 1));
  let p120 = vec_add(p100, vec_mul(vec_div(vec_sub(p4, p1), 3), 2));
  let p130 = vec_add(p100, vec_sub(p4, p1));
  let p011 = vec_add(p001, vec_mul(vec_div(vec_sub(p4, p1), 3), 1));
  let p111 = vec_add(p011, vec_mul(vec_div(vec_sub(p2, p1), 3), 1));
  let p101 = vec_add(p100, vec_mul(vec_div(vec_sub(p5, p1), 3), 1));
  let p210 = vec_add(p010, vec_mul(vec_div(vec_sub(p2, p1), 3), 2));
  let p230 = vec_add(p030, vec_mul(vec_div(vec_sub(p2, p1), 3), 2));
  let p211 = vec_add(p011, vec_mul(vec_div(vec_sub(p2, p1), 3), 2));
  let p201 = vec_add(p001, vec_mul(vec_div(vec_sub(p2, p1), 3), 2));
  let p310 = vec_add(p010, vec_sub(p2, p1));
  let p311 = vec_add(p011, vec_sub(p2, p1));
  let p301 = vec_add(p001, vec_sub(p2, p1));
  let p021 = vec_add(p001, vec_mul(vec_div(vec_sub(p4, p1), 3), 2));
  let p031 = vec_add(p001, vec_sub(p4, p1));
  let p231 = vec_add(p031, vec_mul(vec_div(vec_sub(p2, p1), 3), 2));
  let p121 = vec_add(p101, vec_mul(vec_div(vec_sub(p4, p1), 3), 2));
  let p131 = vec_add(p101, vec_sub(p4, p1));
  let p220 = vec_add(p020, vec_mul(vec_div(vec_sub(p2, p1), 3), 2));
  let p221 = vec_add(p021, vec_mul(vec_div(vec_sub(p2, p1), 3), 2));
  let p320 = vec_add(p020, vec_sub(p2, p1));
  let p330 = vec_add(p030, vec_sub(p2, p1));
  let p321 = vec_add(p021, vec_sub(p2, p1));
  let p331 = vec_add(p031, vec_sub(p2, p1));
  let p012 = vec_add(p010, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p112 = vec_add(p110, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p102 = vec_add(p100, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p212 = vec_add(p210, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p202 = vec_add(p200, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p312 = vec_add(p310, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p302 = vec_add(p300, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p022 = vec_add(p020, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p122 = vec_add(p120, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p222 = vec_add(p220, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p322 = vec_add(p320, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p032 = vec_add(p030, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p132 = vec_add(p130, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p232 = vec_add(p230, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p332 = vec_add(p330, vec_mul(vec_div(vec_sub(p5, p1), 3), 2));
  let p013 = vec_add(p010,vec_sub(p5, p1));
  let p113 = vec_add(p110,vec_sub(p5, p1));
  let p103 = vec_add(p100,vec_sub(p5, p1));
  let p213 = vec_add(p210,vec_sub(p5, p1));
  let p203 = vec_add(p200,vec_sub(p5, p1));
  let p313 = vec_add(p310,vec_sub(p5, p1));
  let p303 = vec_add(p300,vec_sub(p5, p1));
  let p023 = vec_add(p020,vec_sub(p5, p1));
  let p123 = vec_add(p120,vec_sub(p5, p1));
  let p223 = vec_add(p220,vec_sub(p5, p1));
  let p323 = vec_add(p320,vec_sub(p5, p1));
  let p033 = vec_add(p030,vec_sub(p5, p1));
  let p133 = vec_add(p130,vec_sub(p5, p1));
  let p233 = vec_add(p230,vec_sub(p5, p1));
  let p333 = vec_add(p330,vec_sub(p5, p1));

  let frame = {
    face:[],
  };
  frame.face[0] = {
    p1:p1,
    p2:p2,
    p3:p3,
    p4:p4,
    label:'F',
    mouseOn:function(cam, mousePos3d) {
      let p = MousePosToFacePos(cam, this, mousePos3d);
      if (p.x >= this.p1.x && p.x <= this.p2.x
       && p.y >= this.p1.y && p.y <= this.p4.y
      ) {
        return true;
      }
      return false;
    },
    faceEvent:function(cam, clickedMousePos3d, mousePos3d) {
      if (!mouseLMoved(cam, this, clickedMousePos3d, mousePos3d)) {
        return null;
      }
      let mp1 = MousePosToFacePos(cam, this, clickedMousePos3d);
      let mp2 = MousePosToFacePos(cam, this, mousePos3d);
      let dx = Math.abs(mp1.x - mp2.x);
      let dy = Math.abs(mp1.y - mp2.y);
      let slice;
      if (dx > dy) {
        if (mp1.y < (this.p1.y + (this.p4.y - this.p1.y) / 3)) {
          slice = "U";
          return slice;
        }
        if (mp1.y > (this.p1.y + (this.p4.y - this.p1.y) * 2 / 3)) {
          slice = "D";
          return slice;
        }
      } else {
        if (mp1.x < (this.p1.x + (this.p2.x - this.p1.x) / 3)) {
          slice = "L";
          return slice;
        }
        if (mp1.x > (this.p1.x + (this.p2.x - this.p1.x) * 2 / 3)) {
          slice = "R";
          return slice;
        }
      }
      return null;
    },
  };
  frame.face[1] = {
    p1:p5,
    p2:p8,
    p3:p7,
    p4:p6,
    label:'B',
    mouseOn:function(cam, mousePos3d) {
      let p = MousePosToFacePos(cam, this, mousePos3d);
      if (p.x >= this.p1.x && p.x <= this.p4.x
       && p.y >= this.p1.y && p.y <= this.p2.y
      ) {
        return true;
      }
      return false;
    },
    faceEvent:function(cam, clickedMousePos3d, mousePos3d) {
      if (!mouseLMoved(cam, this, clickedMousePos3d, mousePos3d)) {
        return null;
      }
      let mp1 = MousePosToFacePos(cam, this, clickedMousePos3d);
      let mp2 = MousePosToFacePos(cam, this, mousePos3d);
      let dx = Math.abs(mp1.x - mp2.x);
      let dy = Math.abs(mp1.y - mp2.y);
      let slice;
      if (dx > dy) {
        if (mp1.y < (this.p1.y + (this.p2.y - this.p1.y) / 3)) {
          slice = "U";
          return slice;
        }
        if (mp1.y > (this.p1.y + (this.p2.y - this.p1.y) * 2 / 3)) {
          slice = "D";
          return slice;
        }
      } else {
        if (mp1.x < (this.p1.x + (this.p4.x - this.p1.x) / 3)) {
          slice = "L";
          return slice;
        }
        if (mp1.x > (this.p1.x + (this.p4.x - this.p1.x) * 2 / 3)) {
          slice = "R";
          return slice;
        }
      }
      return null;
    },
  };
  frame.face[2] = {
    p1:p1,
    p2:p4,
    p3:p8,
    p4:p5,
    label:'L',
    mouseOn:function(cam, mousePos3d) {
      let p = MousePosToFacePos(cam, this, mousePos3d);
      if (p.y >= this.p1.y && p.y <= this.p2.y
       && p.z >= this.p1.z && p.z <= this.p4.z
      ) {
        return true;
      }
      return false;
    },
    faceEvent:function(cam, clickedMousePos3d, mousePos3d) {
      if (!mouseLMoved(cam, this, clickedMousePos3d, mousePos3d)) {
        return null;
      }
      let mp1 = MousePosToFacePos(cam, this, clickedMousePos3d);
      let mp2 = MousePosToFacePos(cam, this, mousePos3d);
      let dy = Math.abs(mp1.y - mp2.y);
      let dz = Math.abs(mp1.z - mp2.z);
      let slice;
      if (dz > dy) {
        if (mp1.y < (this.p1.y + (this.p2.y - this.p1.y) / 3)) {
          slice = "U";
          return slice;
        }
        if (mp1.y > (this.p1.y + (this.p2.y - this.p1.y) * 2 / 3)) {
          slice = "D";
          return slice;
        }
      } else {
        if (mp1.z < (this.p1.z + (this.p4.z - this.p1.z) / 3)) {
          slice = "F";
          return slice;
        }
        if (mp1.z > (this.p1.z + (this.p4.z - this.p1.z) * 2 / 3)) {
          slice = "B";
          return slice;
        }
      }
      return null;
    },
  };
  frame.face[3] = {
    p1:p2,
    p2:p6,
    p3:p7,
    p4:p3,
    label:'R',
    mouseOn:function(cam, mousePos3d) {
      let p = MousePosToFacePos(cam, this, mousePos3d);
      if (p.y >= this.p1.y && p.y <= this.p4.y
       && p.z >= this.p1.z && p.z <= this.p2.z
      ) {
        return true;
      }
      return false;
    },
    faceEvent:function(cam, clickedMousePos3d, mousePos3d) {
      if (!mouseLMoved(cam, this, clickedMousePos3d, mousePos3d)) {
        return null;
      }
      let mp1 = MousePosToFacePos(cam, this, clickedMousePos3d);
      let mp2 = MousePosToFacePos(cam, this, mousePos3d);
      let dy = Math.abs(mp1.y - mp2.y);
      let dz = Math.abs(mp1.z - mp2.z);
      let slice;
      if (dz > dy) {
        if (mp1.y < (this.p1.y + (this.p4.y - this.p1.y) / 3)) {
          slice = "U";
          return slice;
        }
        if (mp1.y > (this.p1.y + (this.p4.y - this.p1.y) * 2 / 3)) {
          slice = "D";
          return slice;
        }
      } else {
        if (mp1.z < (this.p1.z + (this.p2.z - this.p1.z) / 3)) {
          slice = "F";
          return slice;
        }
        if (mp1.z > (this.p1.z + (this.p2.z - this.p1.z) * 2 / 3)) {
          slice = "B";
          return slice;
        }
      }
      return null;
    },
  };
  frame.face[4] = {
    p1:p1,
    p2:p5,
    p3:p6,
    p4:p2,
    label:'U',
    mouseOn:function(cam, mousePos3d) {
      let p = MousePosToFacePos(cam, this, mousePos3d);
      if (p.x >= this.p1.x && p.x <= this.p4.x
       && p.z >= this.p1.z && p.z <= this.p2.z
      ) {
        return true;
      }
      return false;
    },
    faceEvent:function(cam, clickedMousePos3d, mousePos3d) {
      if (!mouseLMoved(cam, this, clickedMousePos3d, mousePos3d)) {
        return null;
      }
      let mp1 = MousePosToFacePos(cam, this, clickedMousePos3d);
      let mp2 = MousePosToFacePos(cam, this, mousePos3d);
      let dx = Math.abs(mp1.x - mp2.x);
      let dz = Math.abs(mp1.z - mp2.z);
      let slice;
      if (dz > dx) {
        if (mp1.x < (this.p1.x + (this.p4.x - this.p1.x) / 3)) {
          slice = "L";
          return slice;
        }
        if (mp1.x > (this.p1.x + (this.p4.x - this.p1.x) * 2 / 3)) {
          slice = "R";
          return slice;
        }
      } else {
        if (mp1.z < (this.p1.z + (this.p2.z - this.p1.z) / 3)) {
          slice = "F";
          return slice;
        }
        if (mp1.z > (this.p1.z + (this.p2.z - this.p1.z) * 2 / 3)) {
          slice = "B";
          return slice;
        }
      }
      return null;
    },
  };
  frame.face[5] = {
    p1:p4,
    p2:p3,
    p3:p7,
    p4:p8,
    label:'D',
    mouseOn:function(cam, mousePos3d) {
      let p = MousePosToFacePos(cam, this, mousePos3d);
      if (p.x >= this.p1.x && p.x <= this.p2.x
       && p.z >= this.p1.z && p.z <= this.p4.z
      ) {
        return true;
      }
      return false;
    },
    faceEvent:function(cam, clickedMousePos3d, mousePos3d) {
      if (!mouseLMoved(cam, this, clickedMousePos3d, mousePos3d)) {
        return null;
      }
      let mp1 = MousePosToFacePos(cam, this, clickedMousePos3d);
      let mp2 = MousePosToFacePos(cam, this, mousePos3d);
      let dx = Math.abs(mp1.x - mp2.x);
      let dz = Math.abs(mp1.z - mp2.z);
      let slice;
      if (dz > dx) {
        if (mp1.x < (this.p1.x + (this.p2.x - this.p1.x) / 3)) {
          slice = "L";
          return slice;
        }
        if (mp1.x > (this.p1.x + (this.p2.x - this.p1.x) * 2 / 3)) {
          slice = "R";
          return slice;
        }
      } else {
        if (mp1.z < (this.p1.z + (this.p4.z - this.p1.z) / 3)) {
          slice = "F";
          return slice;
        }
        if (mp1.z > (this.p1.z + (this.p4.z - this.p1.z) * 2 / 3)) {
          slice = "B";
          return slice;
        }
      }
      return null;
    },
  };

  let cube = [];
  cube[0] = {
    face:[],
  };
  cube[0].face[0] = {p1:p000,p2:p100,p3:p110,p4:p010,
    color:red,
  };
  cube[0].face[1] = {p1:p001,p2:p011,p3:p111,p4:p101,
    color:black,
  };
  cube[0].face[2] = {p1:p000,p2:p010,p3:p011,p4:p001,
    color:green,
  };
  cube[0].face[3] = {p1:p100,p2:p101,p3:p111,p4:p110,
    color:black,
  };
  cube[0].face[4] = {p1:p000,p2:p001,p3:p101,p4:p100,
    color:white,
  };
  cube[0].face[5] = {p1:p010,p2:p110,p3:p111,p4:p011,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[1] = {
    face:[],
  };
  cube[1].face[0] = {p1:p100,p2:p200,p3:p210,p4:p110,
    color:red,
  };
  cube[1].face[1] = {p1:p101,p2:p111,p3:p211,p4:p201,
    color:black,
  };
  cube[1].face[2] = {p1:p100,p2:p110,p3:p111,p4:p101,
    color:black,
  };
  cube[1].face[3] = {p1:p200,p2:p201,p3:p211,p4:p210,
    color:black,
  };
  cube[1].face[4] = {p1:p100,p2:p101,p3:p201,p4:p200,
    color:white,
  };
  cube[1].face[5] = {p1:p110,p2:p210,p3:p211,p4:p111,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[2] = {
    face:[],
  };
  cube[2].face[0] = {p1:p200,p2:p300,p3:p310,p4:p210,
    color:red,
  };
  cube[2].face[1] = {p1:p201,p2:p211,p3:p311,p4:p301,
    color:black,
  };
  cube[2].face[2] = {p1:p200,p2:p210,p3:p211,p4:p201,
    color:black,
  };
  cube[2].face[3] = {p1:p300,p2:p301,p3:p311,p4:p310,
    color:yellow,
  };
  cube[2].face[4] = {p1:p200,p2:p201,p3:p301,p4:p300,
    color:white,
  };
  cube[2].face[5] = {p1:p210,p2:p310,p3:p311,p4:p211,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[3] = {
    face:[],
  };
  cube[3].face[0] = {p1:p010,p2:p110,p3:p120,p4:p020,
    color:red,
  };
  cube[3].face[1] = {p1:p011,p2:p021,p3:p121,p4:p111,
    color:black,
  };
  cube[3].face[2] = {p1:p010,p2:p020,p3:p021,p4:p011,
    color:green,
  };
  cube[3].face[3] = {p1:p110,p2:p111,p3:p121,p4:p120,
    color:black,
  };
  cube[3].face[4] = {p1:p010,p2:p011,p3:p111,p4:p110,
    color:black,
  };
  cube[3].face[5] = {p1:p020,p2:p120,p3:p121,p4:p021,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[4] = {
    face:[],
  };
  cube[4].face[0] = {p1:p110,p2:p210,p3:p220,p4:p120,
    color:red,
  };
  cube[4].face[1] = {p1:p111,p2:p121,p3:p221,p4:p211,
    color:black,
  };
  cube[4].face[2] = {p1:p110,p2:p120,p3:p121,p4:p111,
    color:black,
  };
  cube[4].face[3] = {p1:p210,p2:p211,p3:p221,p4:p220,
    color:black,
  };
  cube[4].face[4] = {p1:p110,p2:p111,p3:p211,p4:p210,
    color:black,
  };
  cube[4].face[5] = {p1:p120,p2:p220,p3:p221,p4:p121,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[5] = {
    face:[],
  };
  cube[5].face[0] = {p1:p210,p2:p310,p3:p320,p4:p220,
    color:red,
  };
  cube[5].face[1] = {p1:p211,p2:p221,p3:p321,p4:p311,
    color:black,
  };
  cube[5].face[2] = {p1:p210,p2:p220,p3:p221,p4:p211,
    color:black,
  };
  cube[5].face[3] = {p1:p310,p2:p311,p3:p321,p4:p320,
    color:yellow,
  };
  cube[5].face[4] = {p1:p210,p2:p211,p3:p311,p4:p310,
    color:black,
  };
  cube[5].face[5] = {p1:p220,p2:p320,p3:p321,p4:p221,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[6] = {
    face:[],
  };
  cube[6].face[0] = {p1:p020,p2:p120,p3:p130,p4:p030,
    color:red,
  };
  cube[6].face[1] = {p1:p021,p2:p031,p3:p131,p4:p121,
    color:black,
  };
  cube[6].face[2] = {p1:p020,p2:p030,p3:p031,p4:p021,
    color:green,
  };
  cube[6].face[3] = {p1:p120,p2:p121,p3:p131,p4:p130,
    color:black,
  };
  cube[6].face[4] = {p1:p020,p2:p021,p3:p121,p4:p120,
    color:black,
  };
  cube[6].face[5] = {p1:p030,p2:p130,p3:p131,p4:p031,
    color:blue,
  };
  ////////////////////////////////////////////////////////////////////
  cube[7] = {
    face:[],
  };
  cube[7].face[0] = {p1:p120,p2:p220,p3:p230,p4:p130,
    color:red,
  };
  cube[7].face[1] = {p1:p121,p2:p131,p3:p231,p4:p221,
    color:black,
  };
  cube[7].face[2] = {p1:p120,p2:p130,p3:p131,p4:p121,
    color:black,
  };
  cube[7].face[3] = {p1:p220,p2:p221,p3:p231,p4:p230,
    color:black,
  };
  cube[7].face[4] = {p1:p120,p2:p121,p3:p221,p4:p220,
    color:black,
  };
  cube[7].face[5] = {p1:p130,p2:p230,p3:p231,p4:p131,
    color:blue,
  };
  ////////////////////////////////////////////////////////////////////
  cube[8] = {
    face:[],
  };
  cube[8].face[0] = {p1:p220,p2:p320,p3:p330,p4:p230,
    color:red,
  };
  cube[8].face[1] = {p1:p221,p2:p231,p3:p331,p4:p321,
    color:black,
  };
  cube[8].face[2] = {p1:p220,p2:p230,p3:p231,p4:p221,
    color:black,
  };
  cube[8].face[3] = {p1:p320,p2:p321,p3:p331,p4:p330,
    color:yellow,
  };
  cube[8].face[4] = {p1:p220,p2:p221,p3:p321,p4:p320,
    color:black,
  };
  cube[8].face[5] = {p1:p230,p2:p330,p3:p331,p4:p231,
    color:blue,
  };
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  cube[9] = {
    face:[],
  };
  cube[9].face[0] = {p1:p001,p2:p101,p3:p111,p4:p011,
    color:black,
  };
  cube[9].face[1] = {p1:p002,p2:p012,p3:p112,p4:p102,
    color:black,
  };
  cube[9].face[2] = {p1:p001,p2:p011,p3:p012,p4:p002,
    color:green,
  };
  cube[9].face[3] = {p1:p101,p2:p102,p3:p112,p4:p111,
    color:black,
  };
  cube[9].face[4] = {p1:p001,p2:p002,p3:p102,p4:p101,
    color:white,
  };
  cube[9].face[5] = {p1:p011,p2:p111,p3:p112,p4:p012,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[10] = {
    face:[],
  };
  cube[10].face[0] = {p1:p101,p2:p201,p3:p211,p4:p111,
    color:black,
  };
  cube[10].face[1] = {p1:p102,p2:p112,p3:p212,p4:p202,
    color:black,
  };
  cube[10].face[2] = {p1:p101,p2:p111,p3:p112,p4:p102,
    color:black,
  };
  cube[10].face[3] = {p1:p201,p2:p202,p3:p212,p4:p211,
    color:black,
  };
  cube[10].face[4] = {p1:p101,p2:p102,p3:p202,p4:p201,
    color:white,
  };
  cube[10].face[5] = {p1:p111,p2:p211,p3:p212,p4:p112,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[11] = {
    face:[],
  };
  cube[11].face[0] = {p1:p201,p2:p301,p3:p311,p4:p211,
    color:black,
  };
  cube[11].face[1] = {p1:p202,p2:p212,p3:p312,p4:p302,
    color:black,
  };
  cube[11].face[2] = {p1:p201,p2:p211,p3:p212,p4:p202,
    color:black,
  };
  cube[11].face[3] = {p1:p301,p2:p302,p3:p312,p4:p311,
    color:yellow,
  };
  cube[11].face[4] = {p1:p201,p2:p202,p3:p302,p4:p301,
    color:white,
  };
  cube[11].face[5] = {p1:p211,p2:p311,p3:p312,p4:p212,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[12] = {
    face:[],
  };
  cube[12].face[0] = {p1:p011,p2:p111,p3:p121,p4:p021,
    color:black,
  };
  cube[12].face[1] = {p1:p012,p2:p022,p3:p122,p4:p112,
    color:black,
  };
  cube[12].face[2] = {p1:p011,p2:p021,p3:p022,p4:p012,
    color:green,
  };
  cube[12].face[3] = {p1:p111,p2:p112,p3:p122,p4:p121,
    color:black,
  };
  cube[12].face[4] = {p1:p011,p2:p012,p3:p112,p4:p111,
    color:black,
  };
  cube[12].face[5] = {p1:p021,p2:p121,p3:p122,p4:p022,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[13] = {
    face:[],
  };
  cube[13].face[0] = {p1:p211,p2:p311,p3:p321,p4:p221,
    color:black,
  };
  cube[13].face[1] = {p1:p212,p2:p222,p3:p322,p4:p312,
    color:black,
  };
  cube[13].face[2] = {p1:p211,p2:p221,p3:p222,p4:p212,
    color:black,
  };
  cube[13].face[3] = {p1:p311,p2:p312,p3:p322,p4:p321,
    color:yellow,
  };
  cube[13].face[4] = {p1:p211,p2:p212,p3:p312,p4:p311,
    color:black,
  };
  cube[13].face[5] = {p1:p221,p2:p321,p3:p322,p4:p222,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[14] = {
    face:[],
  };
  cube[14].face[0] = {p1:p021,p2:p121,p3:p131,p4:p031,
    color:black,
  };
  cube[14].face[1] = {p1:p022,p2:p032,p3:p132,p4:p122,
    color:black,
  };
  cube[14].face[2] = {p1:p021,p2:p031,p3:p032,p4:p022,
    color:green,
  };
  cube[14].face[3] = {p1:p121,p2:p122,p3:p132,p4:p131,
    color:black,
  };
  cube[14].face[4] = {p1:p021,p2:p022,p3:p122,p4:p121,
    color:black,
  };
  cube[14].face[5] = {p1:p031,p2:p131,p3:p132,p4:p032,
    color:blue,
  };
  ////////////////////////////////////////////////////////////////////
  cube[15] = {
    face:[],
  };
  cube[15].face[0] = {p1:p121,p2:p221,p3:p231,p4:p131,
    color:black,
  };
  cube[15].face[1] = {p1:p122,p2:p132,p3:p232,p4:p222,
    color:black,
  };
  cube[15].face[2] = {p1:p121,p2:p131,p3:p132,p4:p122,
    color:black,
  };
  cube[15].face[3] = {p1:p221,p2:p222,p3:p232,p4:p231,
    color:black,
  };
  cube[15].face[4] = {p1:p121,p2:p122,p3:p222,p4:p221,
    color:black,
  };
  cube[15].face[5] = {p1:p131,p2:p231,p3:p232,p4:p132,
    color:blue,
  };
  ////////////////////////////////////////////////////////////////////
  cube[16] = {
    face:[],
  };
  cube[16].face[0] = {p1:p221,p2:p321,p3:p331,p4:p231,
    color:black,
  };
  cube[16].face[1] = {p1:p222,p2:p232,p3:p332,p4:p322,
    color:black,
  };
  cube[16].face[2] = {p1:p221,p2:p231,p3:p232,p4:p222,
    color:black,
  };
  cube[16].face[3] = {p1:p321,p2:p322,p3:p332,p4:p331,
    color:yellow,
  };
  cube[16].face[4] = {p1:p221,p2:p222,p3:p322,p4:p321,
    color:black,
  };
  cube[16].face[5] = {p1:p231,p2:p331,p3:p332,p4:p232,
    color:blue,
  };
  ////////////////////////////////////////////////////////////////////
  cube[17] = {
    face:[],
  };
  cube[17].face[0] = {p1:p002,p2:p102,p3:p112,p4:p012,
    color:black,
  };
  cube[17].face[1] = {p1:p003,p2:p013,p3:p113,p4:p103,
    color:orange,
  };
  cube[17].face[2] = {p1:p002,p2:p012,p3:p013,p4:p003,
    color:green,
  };
  cube[17].face[3] = {p1:p102,p2:p103,p3:p113,p4:p112,
    color:black,
  };
  cube[17].face[4] = {p1:p002,p2:p003,p3:p103,p4:p102,
    color:white,
  };
  cube[17].face[5] = {p1:p012,p2:p112,p3:p113,p4:p013,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[18] = {
    face:[],
  };
  cube[18].face[0] = {p1:p102,p2:p202,p3:p212,p4:p112,
    color:black,
  };
  cube[18].face[1] = {p1:p103,p2:p113,p3:p213,p4:p203,
    color:orange,
  };
  cube[18].face[2] = {p1:p102,p2:p112,p3:p113,p4:p103,
    color:black,
  };
  cube[18].face[3] = {p1:p202,p2:p203,p3:p213,p4:p212,
    color:black,
  };
  cube[18].face[4] = {p1:p102,p2:p103,p3:p203,p4:p202,
    color:white,
  };
  cube[18].face[5] = {p1:p112,p2:p212,p3:p213,p4:p113,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[19] = {
    face:[],
  };
  cube[19].face[0] = {p1:p202,p2:p302,p3:p312,p4:p212,
    color:black,
  };
  cube[19].face[1] = {p1:p203,p2:p213,p3:p313,p4:p303,
    color:orange,
  };
  cube[19].face[2] = {p1:p202,p2:p212,p3:p213,p4:p203,
    color:black,
  };
  cube[19].face[3] = {p1:p302,p2:p303,p3:p313,p4:p312,
    color:yellow,
  };
  cube[19].face[4] = {p1:p202,p2:p203,p3:p303,p4:p302,
    color:white,
  };
  cube[19].face[5] = {p1:p212,p2:p312,p3:p313,p4:p213,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[20] = {
    face:[],
  };
  cube[20].face[0] = {p1:p012,p2:p112,p3:p122,p4:p022,
    color:black,
  };
  cube[20].face[1] = {p1:p013,p2:p023,p3:p123,p4:p113,
    color:orange,
  };
  cube[20].face[2] = {p1:p012,p2:p022,p3:p023,p4:p013,
    color:green,
  };
  cube[20].face[3] = {p1:p112,p2:p113,p3:p123,p4:p122,
    color:black,
  };
  cube[20].face[4] = {p1:p012,p2:p013,p3:p113,p4:p112,
    color:black,
  };
  cube[20].face[5] = {p1:p022,p2:p122,p3:p123,p4:p023,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[21] = {
    face:[],
  };
  cube[21].face[0] = {p1:p112,p2:p212,p3:p222,p4:p122,
    color:black,
  };
  cube[21].face[1] = {p1:p113,p2:p123,p3:p223,p4:p213,
    color:orange,
  };
  cube[21].face[2] = {p1:p112,p2:p122,p3:p123,p4:p113,
    color:black,
  };
  cube[21].face[3] = {p1:p212,p2:p213,p3:p223,p4:p222,
    color:black,
  };
  cube[21].face[4] = {p1:p112,p2:p113,p3:p213,p4:p212,
    color:black,
  };
  cube[21].face[5] = {p1:p122,p2:p222,p3:p223,p4:p123,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[22] = {
    face:[],
  };
  cube[22].face[0] = {p1:p212,p2:p312,p3:p322,p4:p222,
    color:black,
  };
  cube[22].face[1] = {p1:p213,p2:p223,p3:p323,p4:p313,
    color:orange,
  };
  cube[22].face[2] = {p1:p212,p2:p222,p3:p223,p4:p213,
    color:black,
  };
  cube[22].face[3] = {p1:p312,p2:p313,p3:p323,p4:p322,
    color:yellow,
  };
  cube[22].face[4] = {p1:p212,p2:p213,p3:p313,p4:p312,
    color:black,
  };
  cube[22].face[5] = {p1:p222,p2:p322,p3:p323,p4:p223,
    color:black,
  };
  ////////////////////////////////////////////////////////////////////
  cube[23] = {
    face:[],
  };
  cube[23].face[0] = {p1:p022,p2:p122,p3:p132,p4:p032,
    color:black,
  };
  cube[23].face[1] = {p1:p023,p2:p033,p3:p133,p4:p123,
    color:orange,
  };
  cube[23].face[2] = {p1:p022,p2:p032,p3:p033,p4:p023,
    color:green,
  };
  cube[23].face[3] = {p1:p122,p2:p123,p3:p133,p4:p132,
    color:black,
  };
  cube[23].face[4] = {p1:p022,p2:p023,p3:p123,p4:p122,
    color:black,
  };
  cube[23].face[5] = {p1:p032,p2:p132,p3:p133,p4:p033,
    color:blue,
  };
  ////////////////////////////////////////////////////////////////////
  cube[24] = {
    face:[],
  };
  cube[24].face[0] = {p1:p122,p2:p222,p3:p232,p4:p132,
    color:black,
  };
  cube[24].face[1] = {p1:p123,p2:p133,p3:p233,p4:p223,
    color:orange,
  };
  cube[24].face[2] = {p1:p122,p2:p132,p3:p133,p4:p123,
    color:black,
  };
  cube[24].face[3] = {p1:p222,p2:p223,p3:p233,p4:p232,
    color:black,
  };
  cube[24].face[4] = {p1:p122,p2:p123,p3:p223,p4:p222,
    color:black,
  };
  cube[24].face[5] = {p1:p132,p2:p232,p3:p233,p4:p133,
    color:blue,
  };
  ////////////////////////////////////////////////////////////////////
  cube[25] = {
    face:[],
  };
  cube[25].face[0] = {p1:p222,p2:p322,p3:p332,p4:p232,
    color:black,
  };
  cube[25].face[1] = {p1:p223,p2:p233,p3:p333,p4:p323,
    color:orange,
  };
  cube[25].face[2] = {p1:p222,p2:p232,p3:p233,p4:p223,
    color:black,
  };
  cube[25].face[3] = {p1:p322,p2:p323,p3:p333,p4:p332,
    color:yellow,
  };
  cube[25].face[4] = {p1:p222,p2:p223,p3:p323,p4:p322,
    color:black,
  };
  cube[25].face[5] = {p1:p232,p2:p332,p3:p333,p4:p233,
    color:blue,
  };
  let cube_init_pos = [];
  cube.forEach (function (c, i){
    cube_init_pos[i] = {};
    cube_init_pos[i].face = [];
    c.face.forEach (function (f, j){
      cube_init_pos[i].face[j] = {
        p1: {x:f.p1.x, y:f.p1.y, z:f.p1.z},
        p2: {x:f.p2.x, y:f.p2.y, z:f.p2.z},
        p3: {x:f.p3.x, y:f.p3.y, z:f.p3.z},
        p4: {x:f.p4.x, y:f.p4.y, z:f.p4.z},
      }
    });
  });
  let move_cubes = {};
  move_cubes.u = [0, 1, 2, 9, 10, 11, 17, 18, 19];
  move_cubes.d = [6, 7, 8, 14, 15, 16, 23, 24, 25];
  move_cubes.l = [0, 3, 6, 9, 12, 14, 17, 20, 23];
  move_cubes.r = [2, 5, 8, 11, 13, 16, 19, 22, 25];
  move_cubes.f = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  move_cubes.b = [17, 18, 19, 20, 21, 22, 23, 24, 25];
  ////////////////////////////////////////////////////////////////////
  let rubiks_cube = {
    cube:[],
    frame:[],
    cube_init_pos:[],
    move_cubes:{},
  };
  rubiks_cube.cube = cube;
  rubiks_cube.frame = frame;
  rubiks_cube.cube_init_pos = cube_init_pos;
  rubiks_cube.move_cubes = move_cubes;
  rubiks_cube.get_cubes_from_move = function (move){
    switch (move){
      case 'F0':
      case 'F1':
      case 'F2':
      case 'F3':
      case 'F':
        return rubiks_cube.move_cubes.f;
      break;
      case 'B0':
      case 'B1':
      case 'B2':
      case 'B3':
      case 'B':
        return rubiks_cube.move_cubes.b;
      break;
      case 'U0':
      case 'U1':
      case 'U2':
      case 'U3':
      case 'U':
        return rubiks_cube.move_cubes.u;
      break;
      case 'D0':
      case 'D1':
      case 'D2':
      case 'D3':
      case 'D':
        return rubiks_cube.move_cubes.d;
      break;
      case 'L0':
      case 'L1':
      case 'L2':
      case 'L3':
      case 'L':
        return rubiks_cube.move_cubes.l;
      break;
      case 'R0':
      case 'R1':
      case 'R2':
      case 'R3':
      case 'R':
        return rubiks_cube.move_cubes.r;
      break;
    }
  }
  rubiks_cube.init_pos = function (){
    cube_init_pos.forEach (function (c, i){
      c.face.forEach (function (f, j){
        cube[i].face[j].p1 = {x:f.p1.x, y:f.p1.y, z:f.p1.z};
        cube[i].face[j].p2 = {x:f.p2.x, y:f.p2.y, z:f.p2.z};
        cube[i].face[j].p3 = {x:f.p3.x, y:f.p3.y, z:f.p3.z};
        cube[i].face[j].p4 = {x:f.p4.x, y:f.p4.y, z:f.p4.z};
      });
    });
  }
  rubiks_cube.mouseOnFace = function(cam, mousePos3d){
    let label = null;
    let min_d = 1000;
    this.frame.face.forEach (function (e){
      if (e.mouseOn(cam, mousePos3d)) {
        let d = distance(cam.pos, face_center(e));
        if (d < min_d){
          min_d = d;
          label = e.label;
        }
      }
    });
    return label;
  }
  rubiks_cube.faceEvent = function(cam, clickedMousePos3d, mousePos3d){
    let min_d = 1000;
    let event = null;
    if (clickedMousePos3d == null) {
      return null;
    }
    this.frame.face.forEach (function (e){
      if (e.mouseOn(cam, clickedMousePos3d)) {
        let d = distance(cam.pos, face_center(e));
        if (d < min_d){
          min_d = d;
          event = {
            f:e.label,
            mp1: MousePosToFacePos(cam, e, clickedMousePos3d),
            mp2: MousePosToFacePos(cam, e, mousePos3d),
            move: e.faceEvent(cam, clickedMousePos3d, mousePos3d),
          }
        }
      }
    });
    return event;
  }
  function rotate_cube(cube, a, t) {
    cube.face.forEach(function(f){
      f.p1 = rotate(f.p1, a, t);
      f.p2 = rotate(f.p2, a, t);
      f.p3 = rotate(f.p3, a, t);
      f.p4 = rotate(f.p4, a, t);
    });
  }
  rubiks_cube.move_slice = function (slice, a, t) {
    slice.forEach(function (e){
      rotate_cube(rubiks_cube.cube[e], a, t);
    });
  }
  rubiks_cube.moveEvent = function(cam, clickedMousePos3d, mousePos3d){
    function th2m(t) {
      while (t < 0) {
        t += Math.PI * 2;
      }
      t += Math.PI * 0.25;
      t /= Math.PI * 0.5;
      return String(Math.floor(t) % 4);
    }

    let e = this.faceEvent(cam, clickedMousePos3d, mousePos3d);
    let move = null;
    this.init_pos();
    if (e != null && e.move != null) {
      let mag = 2.5;
      let ax = {x:1, y:0, z:0};
      let ay = {x:0, y:1, z:0};
      let az = {x:0, y:0, z:1};
      let tx = (e.mp1.x - e.mp2.x) * mag;
      let ty = (e.mp1.y - e.mp2.y) * mag;
      let tz = (e.mp1.z - e.mp2.z) * mag;
      switch (e.f){
        case 'F':
          switch (e.move){
            case 'U':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ay, tx);
              move = e.move + th2m(tx);
            break;
            case 'D':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ay, tx);
              move = e.move + th2m(-tx);
            break;
            case 'L':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ax, -ty);
              move = e.move + th2m(-ty);
            break;
            case 'R':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ax, -ty);
              move = e.move + th2m(ty);
            break;
          }
        break;
        case 'B':
          switch (e.move){
            case 'U':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ay, -tx);
              move = e.move + th2m(-tx);
            break;
            case 'D':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ay, -tx);
              move = e.move + th2m(tx);
            break;
            case 'L':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ax, ty);
              move = e.move + th2m(ty);
            break;
            case 'R':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ax, ty);
              move = e.move + th2m(-ty);
            break;
          }
        break;
        case 'R':
          switch (e.move){
            case 'U':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ay, tz);
              move = e.move + th2m(tz);
            break;
            case 'D':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ay, tz);
              move = e.move + th2m(-tz);
            break;
            case 'F':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), az, -ty);
              move = e.move + th2m(-ty);
            break;
            case 'B':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), az, -ty);
              move = e.move + th2m(ty);
            break;
          }
        break;
        case 'L':
          switch (e.move){
            case 'U':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ay, -tz);
              move = e.move + th2m(-tz);
            break;
            case 'D':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ay, -tz);
              move = e.move + th2m(tz);
            break;
            case 'F':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), az, ty);
              move = e.move + th2m(ty);
            break;
            case 'B':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), az, ty);
              move = e.move + th2m(-ty);
            break;
          }
        break;
        case 'U':
          switch (e.move){
            case 'L':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ax, tz);
              move = e.move + th2m(tz);
            break;
            case 'R':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ax, tz);
              move = e.move + th2m(-tz);
            break;
            case 'F':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), az, -tx);
              move = e.move + th2m(-tx);
            break;
            case 'B':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), az, -tx);
              move = e.move + th2m(tx);
            break;
          }
        break;
        case 'D':
          switch (e.move){
            case 'L':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ax, -tz);
              move = e.move + th2m(-tz);
            break;
            case 'R':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), ax, -tz);
              move = e.move + th2m(tz);
            break;
            case 'F':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), az, tx);
              move = e.move + th2m(tx);
            break;
            case 'B':
              rubiks_cube.move_slice(rubiks_cube.get_cubes_from_move(e.move), az, tx);
              move = e.move + th2m(-tx);
            break;
          }
        break;
      }
    }
    return move;
  }
  rubiks_cube.applyMove = function(move){
    this.init_pos();
    function replacement(f1, f2, f3, f4) {
      let tmp = f4.color;
      f4.color = f3.color;
      f3.color = f2.color;
      f2.color = f1.color;
      f1.color = tmp;
    }
    function replacementU1(){
      replacement(rubiks_cube.cube[0].face[2], rubiks_cube.cube[17].face[1], rubiks_cube.cube[19].face[3], rubiks_cube.cube[2].face[0]);
      replacement(rubiks_cube.cube[9].face[2], rubiks_cube.cube[18].face[1], rubiks_cube.cube[11].face[3], rubiks_cube.cube[1].face[0]);
      replacement(rubiks_cube.cube[17].face[2], rubiks_cube.cube[19].face[1], rubiks_cube.cube[2].face[3], rubiks_cube.cube[0].face[0]);
      replacement(rubiks_cube.cube[0].face[4], rubiks_cube.cube[17].face[4], rubiks_cube.cube[19].face[4], rubiks_cube.cube[2].face[4]);
      replacement(rubiks_cube.cube[9].face[4], rubiks_cube.cube[18].face[4], rubiks_cube.cube[11].face[4], rubiks_cube.cube[1].face[4]);
    }
    function replacementD1(){
      replacement(rubiks_cube.cube[23].face[2], rubiks_cube.cube[6].face[0], rubiks_cube.cube[8].face[3], rubiks_cube.cube[25].face[1]);
      replacement(rubiks_cube.cube[14].face[2], rubiks_cube.cube[7].face[0], rubiks_cube.cube[16].face[3], rubiks_cube.cube[24].face[1]);
      replacement(rubiks_cube.cube[6].face[2], rubiks_cube.cube[8].face[0], rubiks_cube.cube[25].face[3], rubiks_cube.cube[23].face[1]);
      replacement(rubiks_cube.cube[23].face[5], rubiks_cube.cube[6].face[5], rubiks_cube.cube[8].face[5], rubiks_cube.cube[25].face[5]);
      replacement(rubiks_cube.cube[14].face[5], rubiks_cube.cube[7].face[5], rubiks_cube.cube[16].face[5], rubiks_cube.cube[24].face[5]);
    }
    function replacementR1(){
      replacement(rubiks_cube.cube[2].face[0], rubiks_cube.cube[19].face[4], rubiks_cube.cube[25].face[1], rubiks_cube.cube[8].face[5]);
      replacement(rubiks_cube.cube[5].face[0], rubiks_cube.cube[11].face[4], rubiks_cube.cube[22].face[1], rubiks_cube.cube[16].face[5]);
      replacement(rubiks_cube.cube[8].face[0], rubiks_cube.cube[2].face[4], rubiks_cube.cube[19].face[1], rubiks_cube.cube[25].face[5]);
      replacement(rubiks_cube.cube[2].face[3], rubiks_cube.cube[19].face[3], rubiks_cube.cube[25].face[3], rubiks_cube.cube[8].face[3]);
      replacement(rubiks_cube.cube[5].face[3], rubiks_cube.cube[11].face[3], rubiks_cube.cube[22].face[3], rubiks_cube.cube[16].face[3]);
    }
    function replacementL1(){
      replacement(rubiks_cube.cube[0].face[0], rubiks_cube.cube[6].face[5], rubiks_cube.cube[23].face[1], rubiks_cube.cube[17].face[4]);
      replacement(rubiks_cube.cube[3].face[0], rubiks_cube.cube[14].face[5], rubiks_cube.cube[20].face[1], rubiks_cube.cube[9].face[4]);
      replacement(rubiks_cube.cube[6].face[0], rubiks_cube.cube[23].face[5], rubiks_cube.cube[17].face[1], rubiks_cube.cube[0].face[4]);
      replacement(rubiks_cube.cube[0].face[2], rubiks_cube.cube[6].face[2], rubiks_cube.cube[23].face[2], rubiks_cube.cube[17].face[2]);
      replacement(rubiks_cube.cube[3].face[2], rubiks_cube.cube[14].face[2], rubiks_cube.cube[20].face[2], rubiks_cube.cube[9].face[2]);
    }
    function replacementF1(){
      replacement(rubiks_cube.cube[0].face[4], rubiks_cube.cube[2].face[3], rubiks_cube.cube[8].face[5], rubiks_cube.cube[6].face[2]);
      replacement(rubiks_cube.cube[1].face[4], rubiks_cube.cube[5].face[3], rubiks_cube.cube[7].face[5], rubiks_cube.cube[3].face[2]);
      replacement(rubiks_cube.cube[2].face[4], rubiks_cube.cube[8].face[3], rubiks_cube.cube[6].face[5], rubiks_cube.cube[0].face[2]);
      replacement(rubiks_cube.cube[0].face[0], rubiks_cube.cube[2].face[0], rubiks_cube.cube[8].face[0], rubiks_cube.cube[6].face[0]);
      replacement(rubiks_cube.cube[1].face[0], rubiks_cube.cube[5].face[0], rubiks_cube.cube[7].face[0], rubiks_cube.cube[3].face[0]);
    }
    function replacementB1(){
      replacement(rubiks_cube.cube[19].face[4], rubiks_cube.cube[17].face[2], rubiks_cube.cube[23].face[5], rubiks_cube.cube[25].face[3]);
      replacement(rubiks_cube.cube[18].face[4], rubiks_cube.cube[20].face[2], rubiks_cube.cube[24].face[5], rubiks_cube.cube[22].face[3]);
      replacement(rubiks_cube.cube[17].face[4], rubiks_cube.cube[23].face[2], rubiks_cube.cube[25].face[5], rubiks_cube.cube[19].face[3]);
      replacement(rubiks_cube.cube[19].face[1], rubiks_cube.cube[17].face[1], rubiks_cube.cube[23].face[1], rubiks_cube.cube[25].face[1]);
      replacement(rubiks_cube.cube[18].face[1], rubiks_cube.cube[20].face[1], rubiks_cube.cube[24].face[1], rubiks_cube.cube[22].face[1]);
    }

    switch (move) {
      case 'U1':
        replacementU1();
      break;
      case 'U2':
        replacementU1();
        replacementU1();
      break;
      case 'U3':
        replacementU1();
        replacementU1();
        replacementU1();
      break;
      case 'D1':
        replacementD1();
      break;
      case 'D2':
        replacementD1();
        replacementD1();
      break;
      case 'D3':
        replacementD1();
        replacementD1();
        replacementD1();
      break;
      case 'R1':
        replacementR1();
      break;
      case 'R2':
        replacementR1();
        replacementR1();
      break;
      case 'R3':
        replacementR1();
        replacementR1();
        replacementR1();
      break;
      case 'L1':
        replacementL1();
      break;
      case 'L2':
        replacementL1();
        replacementL1();
      break;
      case 'L3':
        replacementL1();
        replacementL1();
        replacementL1();
      break;
      case 'F1':
        replacementF1();
      break;
      case 'F2':
        replacementF1();
        replacementF1();
      break;
      case 'F3':
        replacementF1();
        replacementF1();
        replacementF1();
      break;
      case 'B1':
        replacementB1();
      break;
      case 'B2':
        replacementB1();
        replacementB1();
      break;
      case 'B3':
        replacementB1();
        replacementB1();
        replacementB1();
      break;
    }
  }
  rubiks_cube.applyMoveR = function(move){
    this.init_pos();
    switch (move) {
      case 'U1':
        rubiks_cube.applyMove('U3');
      break;
      case 'U2':
        rubiks_cube.applyMove('U2');
      break;
      case 'U3':
        rubiks_cube.applyMove('U1');
      break;
      case 'D1':
        rubiks_cube.applyMove('D3');
      break;
      case 'D2':
        rubiks_cube.applyMove('D2');
      break;
      case 'D3':
        rubiks_cube.applyMove('D1');
      break;
      case 'R1':
        rubiks_cube.applyMove('R3');
      break;
      case 'R2':
        rubiks_cube.applyMove('R2');
      break;
      case 'R3':
        rubiks_cube.applyMove('R1');
      break;
      case 'L1':
        rubiks_cube.applyMove('L3');
      break;
      case 'L2':
        rubiks_cube.applyMove('L2');
      break;
      case 'L3':
        rubiks_cube.applyMove('L1');
      break;
      case 'F1':
        rubiks_cube.applyMove('F3');
      break;
      case 'F2':
        rubiks_cube.applyMove('F2');
      break;
      case 'F3':
        rubiks_cube.applyMove('F1');
      break;
      case 'B1':
        rubiks_cube.applyMove('B3');
      break;
      case 'B2':
        rubiks_cube.applyMove('B2');
      break;
      case 'B3':
        rubiks_cube.applyMove('B1');
      break;
    }
  }

  rubiks_cube.shuffle = function(){
    let moves = ['U1', 'U2', 'U3', 'D1', 'D2', 'D3', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'F1', 'F2', 'F3', 'B1', 'B2', 'B3'];
    let max = moves.length - 1;
    let len = Math.floor(Math.random() * (100 + 1)) + 50;
    for (let i = 0 ; i < len ; i++){
      let r = Math.floor(Math.random() * (max + 1));
      rubiks_cube.applyMove(moves[r]);
    }
  }

  //LBL方式のソルバー
  rubiks_cube.solve_moves = function(){
    let result = [];
    function solver_apply(move) {
      if (Array.isArray(move)) {
        move.forEach(function(m){
          solver_apply(m);
        })
        return;
      }
      rubiks_cube.applyMove(move);
      result.push(move);
    }
    function face_color(i, f){
      let fid;
      switch (f){
        case 'f':
          fid = 0;
        break;
        case 'b':
          fid = 1;
        break;
        case 'u':
          fid = 4;
        break;
        case 'd':
          fid = 5;
        break;
        case 'l':
          fid = 2;
        break;
        case 'r':
          fid = 3;
        break;
      }
      return rubiks_cube.cube[i].face[fid].color
    }
    //1面 青
    //1面 クロス 赤
    if (face_color(1, 'f') == red && face_color(1, 'u') == blue) {
      solver_apply('F2');
    }
    if (face_color(1, 'f') == blue && face_color(1, 'u') == red) {
      solver_apply(['U3', 'R3', 'F1']);
    }
    if (face_color(11, 'r') == red && face_color(11, 'u') == blue) {
      solver_apply(['U1', 'F2']);
    }
    if (face_color(11, 'r') == blue && face_color(11, 'u') == red) {
      solver_apply(['R3', 'F1']);
    }
    if (face_color(18, 'b') == red && face_color(18, 'u') == blue) {
      solver_apply(['U2', 'F2']);
    }
    if (face_color(18, 'b') == blue && face_color(18, 'u') == red) {
      solver_apply(['U1', 'R3', 'F1']);
    }
    if (face_color(9, 'l') == red && face_color(9, 'u') == blue) {
      solver_apply(['U3', 'F2']);
    }
    if (face_color(9, 'l') == blue && face_color(9, 'u') == red) {
      solver_apply(['L1', 'F3']);
    }
    if (face_color(5, 'f') == red && face_color(5, 'r') == blue) {
      solver_apply('F1');
    }
    if (face_color(5, 'f') == blue && face_color(5, 'r') == red) {
      solver_apply(['R3', 'D3']);
    }
    if (face_color(3, 'f') == red && face_color(3, 'l') == blue) {
      solver_apply('F3');
    }
    if (face_color(3, 'f') == blue && face_color(3, 'l') == red) {
      solver_apply(['L1', 'D1']);
    }
    if (face_color(22, 'b') == blue && face_color(22, 'r') == red) {
      solver_apply(['R1', 'D3']);
    }
    if (face_color(22, 'b') == red && face_color(22, 'r') == blue) {
      solver_apply(['R2', 'F1']);
    }
    if (face_color(20, 'b') == blue && face_color(20, 'l') == red) {
      solver_apply(['L3', 'D1']);
    }
    if (face_color(20, 'b') == red && face_color(20, 'l') == blue) {
      solver_apply(['L2', 'F3']);
    }
    if (face_color(7, 'd') == red && face_color(7, 'f') == blue) {
      solver_apply(['D1', 'R1', 'F1']);
    }
    if (face_color(16, 'd') == red && face_color(16, 'r') == blue) {
      solver_apply(['R1', 'F1']);
    }
    if (face_color(24, 'd') == red && face_color(24, 'b') == blue) {
      solver_apply(['B1', 'R1', 'D3']);
    }
    if (face_color(14, 'd') == red && face_color(14, 'l') == blue) {
      solver_apply(['L3', 'F3']);
    }
    if (face_color(16, 'd') == blue && face_color(16, 'r') == red) {
      solver_apply('D3');
    }
    if (face_color(24, 'd') == blue && face_color(24, 'b') == red) {
      solver_apply('D2');
    }
    if (face_color(14, 'd') == blue && face_color(14, 'l') == red) {
      solver_apply('D1');
    }
    //1面 クロス 黄
    if (face_color(11, 'u') == blue && face_color(11, 'r') == yellow) {
      solver_apply('R2');
    }
    if (face_color(11, 'u') == yellow && face_color(11, 'r') == blue) {
      solver_apply(['U3', 'B3', 'R1']);
    }
    if (face_color(18, 'u') == blue && face_color(18, 'b') == yellow) {
      solver_apply(['U1', 'R2']);
    }
    if (face_color(18, 'u') == yellow && face_color(18, 'b') == blue) {
      solver_apply(['B3', 'R1']);
    }
    if (face_color(1, 'u') == blue && face_color(1, 'f') == yellow) {
      solver_apply(['U3', 'R2']);
    }
    if (face_color(1, 'u') == yellow && face_color(1, 'f') == blue) {
      solver_apply(['U2', 'B3', 'R1']);
    }
    if (face_color(9, 'u') == blue && face_color(9, 'l') == yellow) {
      solver_apply(['U2', 'R2']);
    }
    if (face_color(9, 'u') == yellow && face_color(9, 'l') == blue) {
      solver_apply(['U1', 'B3', 'R1']);
    }
    if (face_color(5, 'f') == blue && face_color(5, 'r') == yellow) {
      solver_apply('R3');
    }
    if (face_color(5, 'f') == yellow && face_color(5, 'r') == blue) {
      solver_apply(['D3', 'F1', 'D1']);
    }
    if (face_color(22, 'b') == blue && face_color(22, 'r') == yellow) {
      solver_apply('R1');
    }
    if (face_color(22, 'b') == yellow && face_color(22, 'r') == blue) {
      solver_apply(['D1', 'B3', 'D3']);
    }
    if (face_color(3, 'f') == blue && face_color(3, 'l') == yellow) {
      solver_apply(['D2', 'L1', 'D2']);
    }
    if (face_color(3, 'f') == yellow && face_color(3, 'l') == blue) {
      solver_apply(['D3', 'F3', 'D1']);
    }
    if (face_color(20, 'b') == yellow && face_color(20, 'l') == blue) {
      solver_apply(['D1', 'B1', 'D3']);
    }
    if (face_color(20, 'b') == blue && face_color(20, 'l') == yellow) {
      solver_apply(['D2', 'L3', 'D2']);
    }
    if (face_color(16, 'd') == yellow && face_color(16, 'r') == blue) {
      solver_apply(['R1', 'D3', 'F1', 'D1']);
    }
    if (face_color(24, 'd') == blue && face_color(24, 'b') == yellow) {
      solver_apply(['B2', 'U1', 'R2']);
    }
    if (face_color(24, 'd') == yellow && face_color(24, 'b') == blue) {
      solver_apply(['B1', 'R1']);
    }
    if (face_color(14, 'd') == blue && face_color(14, 'l') == yellow) {
      solver_apply(['L2', 'U2', 'R2']);
    }
    if (face_color(14, 'd') == yellow && face_color(14, 'l') == blue) {
      solver_apply(['L1', 'D1', 'B1', 'D3']);
    }
    //1面 クロス オレンジ
    if (face_color(18, 'b') == orange && face_color(18, 'u') == blue) {
      solver_apply('B2');
    }
    if (face_color(18, 'b') == blue && face_color(18, 'u') == orange) {
      solver_apply(['B3', 'D3', 'R1', 'D1']);
    }
    if (face_color(11, 'u') == blue && face_color(11, 'r') == orange) {
      solver_apply(['U3', 'B2']);
    }
    if (face_color(11, 'u') == orange && face_color(11, 'r') == blue) {
      solver_apply(['U3', 'B3', 'D3', 'R1', 'D1']);
    }
    if (face_color(1, 'u') == blue && face_color(1, 'f') == orange) {
      solver_apply(['U2', 'B2']);
    }
    if (face_color(1, 'u') == orange && face_color(1, 'f') == blue) {
      solver_apply(['U2', 'B3', 'D3', 'R1', 'D1']);
    }
    if (face_color(9, 'u') == blue && face_color(9, 'l') == orange) {
      solver_apply(['U1', 'B2']);
    }
    if (face_color(9, 'u') == orange && face_color(9, 'l') == blue) {
      solver_apply(['L3', 'B1']);
    }
    if (face_color(20, 'b') == orange && face_color(20, 'l') == blue) {
      solver_apply('B1');
    }
    if (face_color(20, 'b') == blue && face_color(20, 'l') == orange) {
      solver_apply(['D1', 'L3', 'D3']);
    }
    if (face_color(22, 'b') == orange && face_color(22, 'r') == blue) {
      solver_apply('B3');
    }
    if (face_color(22, 'b') == blue && face_color(22, 'r') == orange) {
      solver_apply(['D3', 'R1', 'D1']);
    }
    if (face_color(5, 'f') == blue && face_color(5, 'r') == orange) {
      solver_apply(['D3', 'R3', 'D1']);
    }
    if (face_color(5, 'f') == orange && face_color(5, 'r') == blue) {
      solver_apply(['D2', 'F1', 'D2']);
    }
    if (face_color(3, 'f') == blue && face_color(3, 'l') == orange) {
      solver_apply(['D1', 'L1', 'D3']);
    }
    if (face_color(3, 'f') == orange && face_color(3, 'l') == blue) {
      solver_apply(['D2', 'F3', 'D2']);
    }
    if (face_color(24, 'd') == orange && face_color(24, 'b') == blue) {
      solver_apply(['B1', 'D3', 'R1', 'D1']);
    }
    if (face_color(14, 'd') == blue && face_color(14, 'l') == orange) {
      solver_apply(['L1', 'D1', 'L3', 'D3']);
    }
    if (face_color(14, 'd') == orange && face_color(14, 'l') == blue) {
      solver_apply(['L1', 'B1']);
    }
    //1面 クロス 緑
    if (face_color(9, 'l') == green && face_color(9, 'u') == blue) {
      solver_apply('L2');
    }
    if (face_color(9, 'l') == blue && face_color(9, 'u') == green) {
      solver_apply(['L1', 'D1', 'F3', 'D3']);
    }
    if (face_color(1, 'f') == green && face_color(1, 'u') == blue) {
      solver_apply(['U1', 'L2']);
    }
    if (face_color(1, 'f') == blue && face_color(1, 'u') == green) {
      solver_apply(['U1', 'L1', 'D1', 'F3', 'D3']);
    }
    if (face_color(11, 'r') == green && face_color(11, 'u') == blue) {
      solver_apply(['U2', 'L2']);
    }
    if (face_color(11, 'r') == blue && face_color(11, 'u') == green) {
      solver_apply(['U2', 'L1', 'D1', 'F3', 'D3']);
    }
    if (face_color(18, 'b') == green && face_color(18, 'u') == blue) {
      solver_apply(['U3', 'L2']);
    }
    if (face_color(18, 'b') == blue && face_color(18, 'u') == green) {
      solver_apply(['U3', 'L1', 'D1', 'F3', 'D3']);
    }
    if (face_color(3, 'l') == green && face_color(3, 'f') == blue) {
      solver_apply('L1');
    }
    if (face_color(3, 'l') == blue && face_color(3, 'f') == green) {
      solver_apply(['D1', 'F3', 'D3']);
    }
    if (face_color(5, 'f') == blue && face_color(5, 'r') == green) {
      solver_apply(['D2', 'R3', 'D2']);
    }
    if (face_color(5, 'f') == green && face_color(5, 'r') == blue) {
      solver_apply(['D1', 'F1', 'D3']);
    }
    if (face_color(20, 'l') == green && face_color(20, 'b') == blue) {
      solver_apply('L3');
    }
    if (face_color(20, 'l') == blue && face_color(20, 'b') == green) {
      solver_apply(['D3', 'B1', 'D1']);
    }
    if (face_color(22, 'b') == blue && face_color(22, 'r') == green) {
      solver_apply(['D2', 'R1', 'D2']);
    }
    if (face_color(22, 'b') == green && face_color(22, 'r') == blue) {
      solver_apply(['D3', 'B3', 'D1']);
    }
    if (face_color(14, 'd') == green && face_color(14, 'l') == blue) {
      solver_apply(['L3', 'D1', 'F3', 'D3']);
    }
    //1面 コーナー 赤 黄
    if (face_color(8, 'd') == red && face_color(8, 'f') == yellow && face_color(8, 'r') == blue) {
      solver_apply(['R1', 'U1', 'R3']);
    }
    if (face_color(8, 'd') == yellow && face_color(8, 'f') == blue && face_color(8, 'r') == red) {
      solver_apply(['R1', 'U1', 'R3']);
    }
    if (face_color(25, 'r') == red && face_color(25, 'b') == yellow && face_color(25, 'd') == blue) {
      solver_apply(['B1', 'U1', 'B3']);
    }
    if (face_color(25, 'r') == yellow && face_color(25, 'b') == blue && face_color(25, 'd') == red) {
      solver_apply(['B1', 'U1', 'B3']);
    }
    if (face_color(25, 'r') == blue && face_color(25, 'b') == red && face_color(25, 'd') == yellow) {
      solver_apply(['B1', 'U1', 'B3']);
    }
    if (face_color(23, 'b') == red && face_color(23, 'l') == yellow && face_color(23, 'd') == blue) {
      solver_apply(['L1', 'U1', 'L3']);
    }
    if (face_color(23, 'b') == yellow && face_color(23, 'l') == blue && face_color(23, 'd') == red) {
      solver_apply(['L1', 'U1', 'L3']);
    }
    if (face_color(23, 'b') == blue && face_color(23, 'l') == red && face_color(23, 'd') == yellow) {
      solver_apply(['L1', 'U1', 'L3']);
    }
    if (face_color(6, 'l') == red && face_color(6, 'f') == yellow && face_color(6, 'd') == blue) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    if (face_color(6, 'l') == yellow && face_color(6, 'f') == blue && face_color(6, 'd') == red) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    if (face_color(6, 'l') == blue && face_color(6, 'f') == red && face_color(6, 'd') == yellow) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    if (face_color(2, 'u') == red && face_color(2, 'f') == blue && face_color(2, 'r') == yellow) {
      solver_apply('U1');
    }
    if (face_color(19, 'u') == red && face_color(19, 'r') == blue && face_color(19, 'b') == yellow) {
      solver_apply('U2');
    }
    if (face_color(17, 'u') == red && face_color(17, 'b') == blue && face_color(17, 'l') == yellow) {
      solver_apply('U3');
    }
    if (face_color(0, 'u') == red && face_color(0, 'l') == blue && face_color(0, 'f') == yellow) {
      solver_apply(['R1', 'U3', 'R3']);
    }
    if (face_color(17, 'u') == yellow && face_color(17, 'b') == red && face_color(17, 'l') == blue) {
      solver_apply('U2');
    }
    if (face_color(0, 'u') == yellow && face_color(0, 'l') == red && face_color(0, 'f') == blue) {
      solver_apply('U3');
    }
    if (face_color(19, 'u') == yellow && face_color(19, 'r') == red && face_color(19, 'b') == blue) {
      solver_apply('U1');
    }
    if (face_color(17, 'u') == blue && face_color(17, 'b') == yellow && face_color(17, 'l') == red) {
      solver_apply('U2');
    }
    if (face_color(0, 'u') == blue && face_color(0, 'l') == yellow && face_color(0, 'f') == red) {
      solver_apply('U3');
    }
    if (face_color(19, 'u') == blue && face_color(19, 'r') == yellow && face_color(19, 'b') == red) {
      solver_apply('U1');
    }
    if (face_color(2, 'u') == blue && face_color(2, 'f') == yellow && face_color(2, 'r') == red) {
      solver_apply(['R1', 'U3', 'R3', 'U2']);
    }
    if (face_color(2, 'u') == yellow && face_color(2, 'f') == red && face_color(2, 'r') == blue) {
      solver_apply(['R1', 'U1', 'R3']);
    }
    //1面 コーナー 黄 オレンジ
    if (face_color(25, 'r') == orange && face_color(25, 'b') == blue && face_color(25, 'd') == yellow) {
      solver_apply(['B1', 'U1', 'B3']);
    }
    if (face_color(25, 'r') == blue && face_color(25, 'b') == yellow && face_color(25, 'd') == orange) {
      solver_apply(['B1', 'U1', 'B3']);
    }
    if (face_color(23, 'b') == orange && face_color(23, 'l') == blue && face_color(23, 'd') == yellow) {
      solver_apply(['L1', 'U1', 'L3']);
    }
    if (face_color(23, 'b') == blue && face_color(23, 'l') == yellow && face_color(23, 'd') == orange) {
      solver_apply(['L1', 'U1', 'L3']);
    }
    if (face_color(23, 'b') == yellow && face_color(23, 'l') == orange && face_color(23, 'd') == blue) {
      solver_apply(['L1', 'U1', 'L3']);
    }
    if (face_color(6, 'l') == orange && face_color(6, 'f') == blue && face_color(6, 'd') == yellow) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    if (face_color(6, 'l') == blue && face_color(6, 'f') == yellow && face_color(6, 'd') == orange) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    if (face_color(6, 'l') == yellow && face_color(6, 'f') == orange && face_color(6, 'd') == blue) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    if (face_color(19, 'u') == yellow && face_color(19, 'r') == blue && face_color(19, 'b') == orange) {
      solver_apply('U1');
    }
    if (face_color(17, 'u') == yellow && face_color(17, 'b') == blue && face_color(17, 'l') == orange) {
      solver_apply('U2');
    }
    if (face_color(0, 'u') == yellow && face_color(0, 'l') == blue && face_color(0, 'f') == orange) {
      solver_apply('U3');
    }
    if (face_color(2, 'u') == yellow && face_color(2, 'f') == blue && face_color(2, 'r') == orange) {
      solver_apply(['B1', 'U3', 'B3']);
    }
    if (face_color(17, 'u') == orange && face_color(17, 'b') == yellow && face_color(17, 'l') == blue) {
      solver_apply('U1');
    }
    if (face_color(0, 'u') == orange && face_color(0, 'l') == yellow && face_color(0, 'f') == blue) {
      solver_apply('U2');
    }
    if (face_color(2, 'u') == orange && face_color(2, 'f') == yellow && face_color(2, 'r') == blue) {
      solver_apply('U3');
    }
    if (face_color(17, 'u') == blue && face_color(17, 'b') == orange && face_color(17, 'l') == yellow) {
      solver_apply('U1');
    }
    if (face_color(0, 'u') == blue && face_color(0, 'l') == orange && face_color(0, 'f') == yellow) {
      solver_apply('U2');
    }
    if (face_color(2, 'u') == blue && face_color(2, 'f') == orange && face_color(2, 'r') == yellow) {
      solver_apply('U3');
    }
    if (face_color(19, 'u') == blue && face_color(19, 'r') == orange && face_color(19, 'b') == yellow) {
      solver_apply(['B1', 'U3', 'B3', 'U2']);
    }
    if (face_color(19, 'u') == orange && face_color(19, 'r') == yellow && face_color(19, 'b') == blue) {
      solver_apply(['B1', 'U1', 'B3']);
    }
    //1面 コーナー オレンジ 緑
    if (face_color(23, 'b') == green && face_color(23, 'l') == blue && face_color(23, 'd') == orange) {
      solver_apply(['L1', 'U1', 'L3']);
    }
    if (face_color(23, 'b') == blue && face_color(23, 'l') == orange && face_color(23, 'd') == green) {
      solver_apply(['L1', 'U1', 'L3']);
    }
    if (face_color(6, 'l') == orange && face_color(6, 'f') == green && face_color(6, 'd') == blue) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    if (face_color(6, 'l') == green && face_color(6, 'f') == blue && face_color(6, 'd') == orange) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    if (face_color(6, 'l') == blue && face_color(6, 'f') == orange && face_color(6, 'd') == green) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    if (face_color(17, 'u') == orange && face_color(17, 'b') == blue && face_color(17, 'l') == green) {
      solver_apply('U1');
    }
    if (face_color(0, 'u') == orange && face_color(0, 'l') == blue && face_color(0, 'f') == green) {
      solver_apply('U2');
    }
    if (face_color(2, 'u') == orange && face_color(2, 'f') == blue && face_color(2, 'r') == green) {
      solver_apply('U3');
    }
    if (face_color(19, 'u') == orange && face_color(19, 'r') == blue && face_color(19, 'b') == green) {
      solver_apply(['L1', 'U3', 'L3']);
    }
    if (face_color(0, 'u') == green && face_color(0, 'l') == orange && face_color(0, 'f') == blue) {
      solver_apply('U1');
    }
    if (face_color(2, 'u') == green && face_color(2, 'f') == orange && face_color(2, 'r') == blue) {
      solver_apply('U2');
    }
    if (face_color(19, 'u') == green && face_color(19, 'r') == orange && face_color(19, 'b') == blue) {
      solver_apply('U3');
    }
    if (face_color(0, 'u') == blue && face_color(0, 'l') == green && face_color(0, 'f') == orange) {
      solver_apply('U1');
    }
    if (face_color(2, 'u') == blue && face_color(2, 'f') == green && face_color(2, 'r') == orange) {
      solver_apply('U2');
    }
    if (face_color(19, 'u') == blue && face_color(19, 'r') == green && face_color(19, 'b') == orange) {
      solver_apply('U3');
    }
    if (face_color(17, 'u') == blue && face_color(17, 'b') == green && face_color(17, 'l') == orange) {
      solver_apply(['L1', 'U3', 'L3', 'U2']);
    }
    if (face_color(17, 'u') == green && face_color(17, 'b') == orange && face_color(17, 'l') == blue) {
      solver_apply(['L1', 'U1', 'L3']);
    }
    //1面 コーナー 緑 赤
    if (face_color(6, 'l') == red && face_color(6, 'f') == blue && face_color(6, 'd') == green) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    if (face_color(6, 'l') == blue && face_color(6, 'f') == green && face_color(6, 'd') == red) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    if (face_color(0, 'u') == green && face_color(0, 'l') == blue && face_color(0, 'f') == red) {
      solver_apply('U1');
    }
    if (face_color(2, 'u') == green && face_color(2, 'f') == blue && face_color(2, 'r') == red) {
      solver_apply('U2');
    }
    if (face_color(19, 'u') == green && face_color(19, 'r') == blue && face_color(19, 'b') == red) {
      solver_apply('U3');
    }
    if (face_color(17, 'u') == green && face_color(17, 'b') == blue && face_color(17, 'l') == red) {
      solver_apply(['F1', 'U3', 'F3']);
    }
    if (face_color(2, 'u') == red && face_color(2, 'f') == green && face_color(2, 'r') == blue) {
      solver_apply('U1');
    }
    if (face_color(19, 'u') == red && face_color(19, 'r') == green && face_color(19, 'b') == blue) {
      solver_apply('U2');
    }
    if (face_color(17, 'u') == red && face_color(17, 'b') == green && face_color(17, 'l') == blue) {
      solver_apply('U3');
    }
    if (face_color(2, 'u') == blue && face_color(2, 'f') == red && face_color(2, 'r') == green) {
      solver_apply('U1');
    }
    if (face_color(19, 'u') == blue && face_color(19, 'r') == red && face_color(19, 'b') == green) {
      solver_apply('U2');
    }
    if (face_color(17, 'u') == blue && face_color(17, 'b') == red && face_color(17, 'l') == green) {
      solver_apply('U3');
    }
    if (face_color(0, 'u') == blue && face_color(0, 'l') == red && face_color(0, 'f') == green) {
      solver_apply(['F1', 'U3', 'F3', 'U2']);
    }
    if (face_color(0, 'u') == red && face_color(0, 'l') == green && face_color(0, 'f') == blue) {
      solver_apply(['F1', 'U1', 'F3']);
    }
    // 2段目 赤 黄
    if (face_color(5, 'f') == yellow && face_color(5, 'r') == red) {
      solver_apply(['U1', 'R1', 'U3', 'R3', 'U3', 'F3', 'U1', 'F1']);
    }
    if (face_color(22, 'r') == red && face_color(22, 'b') == yellow) {
      solver_apply(['U1', 'B1', 'U3', 'B3', 'U3', 'R3', 'U1', 'R1']);
    }
    if (face_color(22, 'r') == yellow && face_color(22, 'b') == red) {
      solver_apply(['U1', 'B1', 'U3', 'B3', 'U3', 'R3', 'U1', 'R1']);
    }
    if (face_color(20, 'b') == red && face_color(20, 'l') == yellow) {
      solver_apply(['U1', 'L1', 'U3', 'L3', 'U3', 'B3', 'U1', 'B1']);
    }
    if (face_color(20, 'b') == yellow && face_color(20, 'l') == red) {
      solver_apply(['U1', 'L1', 'U3', 'L3', 'U3', 'B3', 'U1', 'B1']);
    }
    if (face_color(3, 'l') == red && face_color(3, 'f') == yellow) {
      solver_apply(['U1', 'F1', 'U3', 'F3', 'U3', 'L3', 'U1', 'L1']);
    }
    if (face_color(3, 'l') == yellow && face_color(3, 'f') == red) {
      solver_apply(['U1', 'F1', 'U3', 'F3', 'U3', 'L3', 'U1', 'L1']);
    }
    if (face_color(1, 'u') == red && face_color(1, 'f') == yellow) {
      solver_apply('U3');
    }
    if (face_color(9, 'u') == red && face_color(9, 'l') == yellow) {
      solver_apply('U2');
    }
    if (face_color(18, 'u') == red && face_color(18, 'b') == yellow) {
      solver_apply('U1');
    }
    if (face_color(11, 'u') == red && face_color(11, 'r') == yellow) {
      solver_apply(['U3', 'F3', 'U1', 'F1', 'U1', 'R1', 'U3', 'R3']);
    }
    if (face_color(11, 'u') == yellow && face_color(11, 'r') == red) {
      solver_apply('U1');
    }
    if (face_color(18, 'u') == yellow && face_color(18, 'b') == red) {
      solver_apply('U2');
    }
    if (face_color(9, 'u') == yellow && face_color(9, 'l') == red) {
      solver_apply('U3');
    }
    if (face_color(1, 'u') == yellow && face_color(1, 'f') == red) {
      solver_apply(['U1', 'R1', 'U3', 'R3', 'U3', 'F3', 'U1', 'F1']);
    }
    // 2段目 黄 オレンジ
    if (face_color(22, 'r') == orange && face_color(22, 'b') == yellow) {
      solver_apply(['U1', 'B1', 'U3', 'B3', 'U3', 'R3', 'U1', 'R1']);
    }
    if (face_color(20, 'b') == yellow && face_color(20, 'l') == orange) {
      solver_apply(['U1', 'L1', 'U3', 'L3', 'U3', 'B3', 'U1', 'B1']);
    }
    if (face_color(20, 'b') == orange && face_color(20, 'l') == yellow) {
      solver_apply(['U1', 'L1', 'U3', 'L3', 'U3', 'B3', 'U1', 'B1']);
    }
    if (face_color(3, 'l') == orange && face_color(3, 'f') == yellow) {
      solver_apply(['U1', 'F1', 'U3', 'F3', 'U3', 'L3', 'U1', 'L1']);
    }
    if (face_color(3, 'l') == yellow && face_color(3, 'f') == orange) {
      solver_apply(['U1', 'F1', 'U3', 'F3', 'U3', 'L3', 'U1', 'L1']);
    }
    if (face_color(1, 'u') == yellow && face_color(1, 'f') == orange) {
      solver_apply('U2');
    }
    if (face_color(9, 'u') == yellow && face_color(9, 'l') == orange) {
      solver_apply('U1');
    }
    if (face_color(11, 'u') == yellow && face_color(11, 'r') == orange) {
      solver_apply('U3');
    }
    if (face_color(18, 'u') == yellow && face_color(18, 'b') == orange) {
      solver_apply(['U3', 'R3', 'U1', 'R1', 'U1', 'B1', 'U3', 'B3']);
    }
    if (face_color(1, 'u') == orange && face_color(1, 'f') == yellow) {
      solver_apply('U3');
    }
    if (face_color(18, 'u') == orange && face_color(18, 'b') == yellow) {
      solver_apply('U1');
    }
    if (face_color(9, 'u') == orange && face_color(9, 'l') == yellow) {
      solver_apply('U2');
    }
    if (face_color(11, 'u') == orange && face_color(11, 'r') == yellow) {
      solver_apply(['U1', 'B1', 'U3', 'B3', 'U3', 'R3', 'U1', 'R1']);
    }
    // 2段目 オレンジ 緑
    if (face_color(20, 'b') == green && face_color(20, 'l') == orange) {
      solver_apply(['U1', 'L1', 'U3', 'L3', 'U3', 'B3', 'U1', 'B1']);
    }
    if (face_color(3, 'l') == orange && face_color(3, 'f') == green) {
      solver_apply(['U1', 'F1', 'U3', 'F3', 'U3', 'L3', 'U1', 'L1']);
    }
    if (face_color(3, 'l') == green && face_color(3, 'f') == orange) {
      solver_apply(['U1', 'F1', 'U3', 'F3', 'U3', 'L3', 'U1', 'L1']);
    }
    if (face_color(1, 'u') == orange && face_color(1, 'f') == green) {
      solver_apply('U1');
    }
    if (face_color(18, 'u') == orange && face_color(18, 'b') == green) {
      solver_apply('U3');
    }
    if (face_color(11, 'u') == orange && face_color(11, 'r') == green) {
      solver_apply('U2');
    }
    if (face_color(9, 'u') == orange && face_color(9, 'l') == green) {
      solver_apply(['U3', 'B3', 'U1', 'B1', 'U1', 'L1', 'U3', 'L3']);
    }
    if (face_color(1, 'u') == green && face_color(1, 'f') == orange) {
      solver_apply('U2');
    }
    if (face_color(11, 'u') == green && face_color(11, 'r') == orange) {
      solver_apply('U3');
    }
    if (face_color(9, 'u') == green && face_color(9, 'l') == orange) {
      solver_apply('U1');
    }
    if (face_color(18, 'u') == green && face_color(18, 'b') == orange) {
      solver_apply(['U1', 'L1', 'U3', 'L3', 'U3', 'B3', 'U1', 'B1']);
    }
    // 2段目 緑 赤
    if (face_color(3, 'l') == red && face_color(3, 'f') == green) {
      solver_apply(['U1', 'F1', 'U3', 'F3', 'U3', 'L3', 'U1', 'L1']);
    }
    if (face_color(9, 'u') == green && face_color(9, 'l') == red) {
      solver_apply('U3');
    }
    if (face_color(18, 'u') == green && face_color(18, 'b') == red) {
      solver_apply('U2');
    }
    if (face_color(11, 'u') == green && face_color(11, 'r') == red) {
      solver_apply('U1');
    }
    if (face_color(1, 'u') == green && face_color(1, 'f') == red) {
      solver_apply(['U3', 'L3', 'U1', 'L1', 'U1', 'F1', 'U3', 'F3']);
    }
    if (face_color(1, 'u') == red && face_color(1, 'f') == green) {
      solver_apply('U1');
    }
    if (face_color(11, 'u') == red && face_color(11, 'r') == green) {
      solver_apply('U2');
    }
    if (face_color(18, 'u') == red && face_color(18, 'b') == green) {
      solver_apply('U3');
    }
    if (face_color(9, 'u') == red && face_color(9, 'l') == green) {
      solver_apply(['U1', 'F1', 'U3', 'F3', 'U3', 'L3', 'U1', 'L1']);
    }
    //上面クロス
    while (face_color(1, 'u') != white ||
           face_color(11, 'u') != white ||
           face_color(18, 'u') != white ||
           face_color(9, 'u') != white) {
      if (face_color(1, 'u') == white &&
          face_color(11, 'u') == white &&
          face_color(18, 'u') != white &&
          face_color(9, 'u') != white) {
        solver_apply('U2');
      }
      if (face_color(1, 'u') != white &&
          face_color(11, 'u') == white &&
          face_color(18, 'u') == white &&
          face_color(9, 'u') != white) {
        solver_apply('U3');
      }
      if (face_color(1, 'u') == white &&
          face_color(11, 'u') != white &&
          face_color(18, 'u') != white &&
          face_color(9, 'u') == white) {
        solver_apply('U1');
      }
      solver_apply(['F1', 'R1', 'U1', 'R3', 'U3', 'F3']);
    }
    //上面コーナー
    function OLL(){
      solver_apply(['R1', 'U2', 'R3', 'U3', 'R1', 'U3', 'R3']);
    }
    if (face_color(0, 'l') == white &&
        face_color(2, 'u') == white &&
        face_color(19, 'b') == white &&
        face_color(17, 'u') == white) {
      OLL();
    }
    if (face_color(0, 'f') == white &&
        face_color(2, 'u') == white &&
        face_color(19, 'r') == white &&
        face_color(17, 'u') == white) {
      solver_apply('U2');
      OLL();
    }
    if (face_color(0, 'u') == white &&
        face_color(2, 'f') == white &&
        face_color(19, 'u') == white &&
        face_color(17, 'l') == white) {
      solver_apply('U1');
      OLL();
    }
    if (face_color(0, 'u') == white &&
        face_color(2, 'r') == white &&
        face_color(19, 'u') == white &&
        face_color(17, 'b') == white) {
      solver_apply('U3');
      OLL();
    }
    ////
    if (face_color(0, 'u') == white &&
        face_color(2, 'u') == white &&
        face_color(19, 'u') != white &&
        face_color(17, 'u') != white) {
      OLL();
    }
    if (face_color(0, 'u') != white &&
        face_color(2, 'u') != white &&
        face_color(19, 'u') == white &&
        face_color(17, 'u') == white) {
      solver_apply('U2');
      OLL();
    }
    if (face_color(0, 'u') != white &&
        face_color(2, 'u') == white &&
        face_color(19, 'u') == white &&
        face_color(17, 'u') != white) {
      solver_apply('U1');
      OLL();
    }
    if (face_color(0, 'u') == white &&
        face_color(2, 'u') != white &&
        face_color(19, 'u') != white &&
        face_color(17, 'u') == white) {
      solver_apply('U3');
      OLL();
    }
    ////
    if (face_color(0, 'f') == white &&
        face_color(2, 'f') == white &&
        face_color(19, 'b') == white &&
        face_color(17, 'b') == white) {
      OLL();
    }
    if (face_color(0, 'l') == white &&
        face_color(2, 'r') == white &&
        face_color(19, 'r') == white &&
        face_color(17, 'l') == white) {
      solver_apply('U1');
      OLL();
    }
    ////
    if (face_color(0, 'l') == white &&
        face_color(2, 'f') == white &&
        face_color(19, 'b') == white &&
        face_color(17, 'l') == white) {
      OLL();
    }
    if (face_color(0, 'f') == white &&
        face_color(2, 'f') == white &&
        face_color(19, 'r') == white &&
        face_color(17, 'l') == white) {
      solver_apply('U1');
      OLL();
    }
    if (face_color(0, 'f') == white &&
        face_color(2, 'r') == white &&
        face_color(19, 'r') == white &&
        face_color(17, 'b') == white) {
      solver_apply('U2');
      OLL();
    }
    if (face_color(0, 'l') == white &&
        face_color(2, 'r') == white &&
        face_color(19, 'b') == white &&
        face_color(17, 'b') == white) {
      solver_apply('U3');
      OLL();
    }
    ////
    if (face_color(0, 'l') == white &&
        face_color(2, 'f') == white &&
        face_color(19, 'u') == white &&
        face_color(17, 'b') == white) {
      OLL();
    }
    if (face_color(0, 'l') == white &&
        face_color(2, 'f') == white &&
        face_color(19, 'r') == white &&
        face_color(17, 'u') == white) {
      solver_apply('U1');
      OLL();
    }
    if (face_color(0, 'u') == white &&
        face_color(2, 'f') == white &&
        face_color(19, 'r') == white &&
        face_color(17, 'b') == white) {
      solver_apply('U2');
      OLL();
    }
    if (face_color(0, 'l') == white &&
        face_color(2, 'u') == white &&
        face_color(19, 'r') == white &&
        face_color(17, 'b') == white) {
      solver_apply('U3');
      OLL();
    }
    ///
    if (face_color(0, 'f') == white &&
        face_color(2, 'r') == white &&
        face_color(19, 'u') == white &&
        face_color(17, 'l') == white) {
      OLL();
    }
    if (face_color(0, 'f') == white &&
        face_color(2, 'r') == white &&
        face_color(19, 'b') == white &&
        face_color(17, 'u') == white) {
      solver_apply('U1');
      OLL();
    }
    if (face_color(0, 'u') == white &&
        face_color(2, 'r') == white &&
        face_color(19, 'b') == white &&
        face_color(17, 'l') == white) {
      solver_apply('U2');
      OLL();
    }
    if (face_color(0, 'f') == white &&
        face_color(2, 'u') == white &&
        face_color(19, 'b') == white &&
        face_color(17, 'l') == white) {
      solver_apply('U3');
      OLL();
    }
    //上面コーナー PLL
    function PLL(){
      solver_apply(['F1', 'R3', 'F1', 'L2', 'F3', 'R1', 'F1', 'L2', 'F2']);
    }
    function fullPLL() {
      function PLL2_1(){
        if (
          face_color(2, 'f') != red &&
          face_color(0, 'l') != green &&
          face_color(17, 'b') != orange
        ) {
          PLL()
        }
      }
      if (
        face_color(19, 'r') == yellow &&
        face_color(2, 'f') != red &&
        face_color(0, 'l') != green &&
        face_color(17, 'b') != orange
      ) {
        PLL()
        PLL2_1()
      }
      if (
        face_color(17, 'b') == yellow &&
        face_color(19, 'r') != red &&
        face_color(2, 'f') != green &&
        face_color(0, 'l') != orange
      ) {
        solver_apply('U1');
        PLL()
        PLL2_1()
      }
      if (
        face_color(0, 'l') == yellow &&
        face_color(17, 'b') != red &&
        face_color(19, 'r') != green &&
        face_color(2, 'f') != orange
      ) {
        solver_apply('U2');
        PLL()
        PLL2_1()
      }
      if (
        face_color(2, 'f') == yellow &&
        face_color(0, 'l') != red &&
        face_color(17, 'b') != green &&
        face_color(19, 'r') != orange
      ) {
        solver_apply('U3');
        PLL()
        PLL2_1()
      }
      ////
      function PLL2_2(){
        if (
          face_color(2, 'f') != green &&
          face_color(0, 'l') != orange &&
          face_color(17, 'b') != yellow
        ) {
          PLL()
        }
      }
      if (
        face_color(19, 'r') == red &&
        face_color(2, 'f') == green &&
        face_color(0, 'l') == orange &&
        face_color(17, 'b') == yellow
      ) {
        solver_apply('U1');
      }
      if (
        face_color(19, 'r') == red &&
        face_color(2, 'f') != green &&
        face_color(0, 'l') != orange &&
        face_color(17, 'b') != yellow
      ) {
        PLL()
        PLL2_2()
        solver_apply('U1');
      }
      if (
        face_color(17, 'b') == red &&
        face_color(19, 'r') != green &&
        face_color(2, 'f') != orange &&
        face_color(0, 'l') != yellow
      ) {
        solver_apply('U1');
        PLL()
        PLL2_2()
        solver_apply('U1');
      }
      if (
        face_color(0, 'l') == red &&
        face_color(17, 'b') != green &&
        face_color(19, 'r') != orange &&
        face_color(2, 'f') != yellow
      ) {
        solver_apply('U2');
        PLL()
        PLL2_2()
        solver_apply('U1');
      }
      if (
        face_color(2, 'f') == red &&
        face_color(0, 'l') != green &&
        face_color(17, 'b') != orange &&
        face_color(19, 'r') != yellow
      ) {
        solver_apply('U3');
        PLL()
        PLL2_2()
        solver_apply('U1');
      }
      ////
      function PLL2_3(){
        if (
          face_color(2, 'f') != orange &&
          face_color(0, 'l') != yellow &&
          face_color(17, 'b') != red
        ) {
          PLL()
        }
      }
      if (
        face_color(19, 'r') == green &&
        face_color(2, 'f') == orange &&
        face_color(0, 'l') == yellow &&
        face_color(17, 'b') == red
      ) {
        solver_apply('U2');
      }
      if (
        face_color(19, 'r') == green &&
        face_color(2, 'f') != orange &&
        face_color(0, 'l') != yellow &&
        face_color(17, 'b') != red
      ) {
        PLL()
        PLL2_3()
        solver_apply('U2');
      }
      if (
        face_color(17, 'b') == green &&
        face_color(19, 'r') != orange &&
        face_color(2, 'f') != yellow &&
        face_color(0, 'l') != red
      ) {
        solver_apply('U1');
        PLL()
        PLL2_3()
        solver_apply('U2');
      }
      if (
        face_color(0, 'l') == green &&
        face_color(17, 'b') != orange &&
        face_color(19, 'r') != yellow &&
        face_color(2, 'f') != red
      ) {
        solver_apply('U2');
        PLL()
        PLL2_3()
        solver_apply('U2');
      }
      if (
        face_color(2, 'f') == green &&
        face_color(0, 'l') != orange &&
        face_color(17, 'b') != yellow &&
        face_color(19, 'r') != red
      ) {
        solver_apply('U3');
        PLL()
        PLL2_3()
        solver_apply('U2');
      }
      ////
      function PLL2_4(){
        if (
          face_color(2, 'f') == yellow &&
          face_color(0, 'l') == red &&
          face_color(17, 'b') == green
        ) {
          PLL()
        }
      }
      if (
        face_color(19, 'r') == orange &&
        face_color(2, 'f') == yellow &&
        face_color(0, 'l') == red &&
        face_color(17, 'b') == green
      ) {
        solver_apply('U3');
      }
    }
    fullPLL();
    if (
      face_color(19, 'r') != yellow ||
      face_color(2, 'f') != red ||
      face_color(0, 'l') != green ||
      face_color(17, 'b') != orange
    ) {
      PLL();
      fullPLL();
    }
    // 上面 エッジ PLL
    function edgePLL() {
      solver_apply(['R2', 'U1', 'R1', 'U1', 'R3', 'U3', 'R3', 'U3', 'R3', 'U1', 'R3']);
    }
    while (
      face_color(1, 'f') != red &&
      face_color(11, 'r') != yellow &&
      face_color(18, 'b') != orange &&
      face_color(9, 'l') != green
    ) {
      edgePLL();
    }
    if (face_color(18, 'b') == orange) {
      while (
        face_color(1, 'f') != red ||
        face_color(11, 'r') != yellow ||
        face_color(18, 'b') != orange ||
        face_color(9, 'l') != green
      ) {
        edgePLL();
      }
    }
    if (face_color(9, 'l') == green) {
      while (
        face_color(1, 'f') != red ||
        face_color(11, 'r') != yellow ||
        face_color(18, 'b') != orange ||
        face_color(9, 'l') != green
      ) {
        solver_apply('U1');
        edgePLL();
        solver_apply('U3');
      }
    }
    if (face_color(1, 'f') == red) {
      while (
        face_color(1, 'f') != red ||
        face_color(11, 'r') != yellow ||
        face_color(18, 'b') != orange ||
        face_color(9, 'l') != green
      ) {
        solver_apply('U2');
        edgePLL();
        solver_apply('U2');
      }
    }
    if (face_color(11, 'r') == yellow) {
      while (
        face_color(1, 'f') != red ||
        face_color(11, 'r') != yellow ||
        face_color(18, 'b') != orange ||
        face_color(9, 'l') != green
      ) {
        solver_apply('U3');
        edgePLL();
        solver_apply('U1');
      }
    }
///////////////////////////////////////////////////////////////////////////////////////
/*
    if (face_color(7, 'd') != blue || face_color(7, 'f') != red){
      console.log('error!');
    }
    if (face_color(16, 'd') != blue || face_color(16, 'r') != yellow){
      console.log('error!');
    }
    if (face_color(24, 'd') != blue || face_color(24, 'b') != orange){
      console.log('error!');
    }
    if (face_color(14, 'd') != blue || face_color(14, 'l') != green){
      console.log('error!');
    }
    if (face_color(8, 'd') != blue || face_color(8, 'f') != red || face_color(8, 'r') != yellow){
      console.log('error!');
    }
    if (face_color(25, 'd') != blue || face_color(25, 'r') != yellow || face_color(25, 'b') != orange){
      console.log('error!');
    }
    if (face_color(23, 'd') != blue || face_color(23, 'b') != orange || face_color(23, 'l') != green){
      console.log('error!');
    }
    if (face_color(6, 'd') != blue || face_color(6, 'l') != green || face_color(6, 'f') != red){
      console.log('error!');
    }
    if (face_color(5, 'f') != red || face_color(5, 'r') != yellow){
      console.log('error!');
    }
    if (face_color(22, 'r') != yellow || face_color(22, 'b') != orange){
      console.log('error!');
    }
    if (face_color(20, 'b') != orange || face_color(20, 'l') != green){
      console.log('error!');
    }
    if (face_color(3, 'l') != green || face_color(3, 'f') != red){
      console.log('error!');
    }
    if (face_color(0, 'u') != white || face_color(1, 'u') != white ||
        face_color(2, 'u') != white || face_color(9, 'u') != white ||
        face_color(11, 'u') != white || face_color(17, 'u') != white ||
        face_color(18, 'u') != white || face_color(19, 'u') != white
    ){
      console.log('error!');
    }
    if (
      face_color(19, 'r') != yellow ||
      face_color(2, 'f') != red ||
      face_color(0, 'l') != green ||
      face_color(17, 'b') != orange
    ) {
      console.log('error!');
    }
    if (
      face_color(1, 'f') != red ||
      face_color(11, 'r') != yellow ||
      face_color(18, 'b') != orange ||
      face_color(9, 'l') != green
    ) {
      console.log('error!');
    }
    console.log(result);
    */
    for (let i = result.length - 1 ; i >= 0 ; i--) {
      rubiks_cube.applyMoveR(result[i]);
    }
    function trim_dup(moves) {
      let trimed = false;
      let ret = [];
      for (let i = 0 ; i < moves.length - 1 ; i++){
        let m1 = moves[i].slice(0, 1);
        let m2 = moves[i + 1].slice(0, 1);
        let m1v = parseInt(moves[i].slice(1, 2));
        let m2v = parseInt(moves[i + 1].slice(1, 2));
        if (m1 == m2){
          let nv = String((m1v + m2v) % 4);
          if (nv == '0'){
            moves[i] = 'nop';
            moves[i + 1] = 'nop';
          } else {
            moves[i] = m1 + nv;
            moves[i + 1] = 'nop';
          }
          trimed = true;
        }
      }
      for (let i = 0 ; i < moves.length ; i++){
        if (moves[i] != 'nop') {
          ret.push(moves[i]);
        }
      }
      if (trimed) {
        return trim_dup(ret);
      }
      return ret;
    }
    result = trim_dup(result);
    return result;
  }
  return rubiks_cube;
}
