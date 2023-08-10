function sendMail() {
  const params = {
    from_name: document.getElementById("name").value,
    company: document.getElementById("company").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_kcfbtp5", "template_63um3g3", params).then(function () {
    alert("您已成功寄出留言到我的信箱咯！謝謝您，祝您事事順心！");
  });
}
