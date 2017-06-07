$(function () {
  $('#login-btn').click(() => {
    const name = $('#name').val();
    const sex = $('input[name=sex]:checked').val();
    const password = $('#password').val();
    const email = $('#email').val();
    const telephone = $('#telephone').val();

    const data = {
      userName: name,
      sex,
      password,
      email,
      telephone
    };

    login(data, (res) => {
      console.log(res);
      alert('注册成功！');
    })
  })
});

function login(data, cb) {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3002/user/sign-in',
    data,
    success: res => {
      cb(res);
    }
  })
}