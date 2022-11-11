export function mul(i, j) {
  return i * j;
}
export function div(i, j) {
  return i / j;
}

// default는 호출하는 곳에 기본으로 넘어간다.
export default {
  title: "계산기 모듈",
  add: function (i, j) {
    return i + j;
  },
  sub(i, j) {
    return i - j;
  },
};
