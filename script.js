document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", (e) => {
    //傳入滑鼠位置
    document.querySelectorAll(".pos-3d").forEach((element) => {
      add3d(element, e);
    });
  });
});

function add3d(element, e) {
  // 滑鼠位置
  const m_x = e.pageX;
  const m_y = e.pageY;

  const w_w = window.innerWidth,
    w_h = window.innerHeight,
    o_w = element.offsetWidth,
    distance = (element.offsetWidth - w_w) / 2,
    layer = Number(element.getAttribute("data-layer")),
    invert = Number(element.getAttribute("data-invert"));

  // 物件在頁面上的位置
  const o_x = w_w / 2;
  const o_y = w_h / 2;

  // 兩者的距離差
  let w_x = m_x - o_x;
  let w_y = m_y - o_y;

  // 距離相乘後開平方
  const w_wSqrt = Math.sqrt(w_w / 2);
  const d = distance / w_wSqrt / layer;

  // 距離計算
  let s_x = Math.sqrt(Math.abs(w_x));
  if (w_x < 0) {
    s_x = -s_x;
  }

  let d_x = s_x * d;
  // 加入樣式
  element.style.transform = `translateX(${invert ? d_x : -d_x}px)`;
}
