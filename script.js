// document.addEventListener("DOMContentLoaded", () => {
//   document.addEventListener("mousemove", (e) => {
//     //傳入滑鼠位置
//     document.querySelectorAll(".pos-3d").forEach((element) => {
//       add3d(element, e);
//     });
//   });
// });

// function add3d(element, e) {
//   // 滑鼠位置
//   const m_x = e.pageX;
//   const m_y = e.pageY;

//   const w_w = window.innerWidth,
//     w_h = window.innerHeight,
//     o_w = element.offsetWidth,
//     distance = (element.offsetWidth - w_w) / 2,
//     layer = Number(element.getAttribute("data-layer")),
//     invert = Number(element.getAttribute("data-invert"));

//   // 物件在頁面上的位置
//   const o_x = w_w / 2;
//   const o_y = w_h / 2;

//   // 兩者的距離差
//   let w_x = m_x - o_x;
//   let w_y = m_y - o_y;

//   // 距離相乘後開平方
//   const w_wSqrt = Math.sqrt(w_w / 2);
//   const d = distance / w_wSqrt / layer;

//   // 距離計算
//   let s_x = Math.sqrt(Math.abs(w_x));
//   if (w_x < 0) {
//     s_x = -s_x;
//   }

//   let d_x = s_x * d;
//   // 加入樣式
//   element.style.transform = `translateX(${invert ? d_x : -d_x}px)`;
// }

// 打字特效
const texts = ["視覺設計師", "網頁設計師", "UI設計師"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 3000);
  } else {
    setTimeout(type, 150);
  }
})();

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= 1) {
    navbar.style.top = "0px"; // 滚动位置大于等于 789px，显示导航栏
  } else {
    navbar.style.top = "-100px"; // 滚动位置小于 789px，隐藏导航栏
  }
});

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function SendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    company: document.getElementById("company").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_kcfbtp5", "template_63um3g3", params)
    .then(function (res) {
      alert("您已成功寄出留言到我的信箱咯！謝謝您，祝您事事順心！");
    });
}
