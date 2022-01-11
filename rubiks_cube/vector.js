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

function neg(p){
  return {
    x: - p.x,
    y: - p.y,
    z: - p.z
  };
}

function norm(p){
  return Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z);
}

function distance(a, b){
  return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) + (a.z - b.z) * (a.z - b.z));
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

/* 3次元座標の回転変換 */
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
