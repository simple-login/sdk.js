SL.init("sdkjs-demo");

document.getElementById("btn-sl").onclick = function (e) {
  SL.login(function (user) {
    console.log("got user from SL SDK", user);

    document.getElementById("user-info").innerHTML = `
    email: ${user.email} <br>
    name: ${user.name} <br>
    avatar: <img src="${user.avatar_url}">
    `

  })
}