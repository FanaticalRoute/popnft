/* Moralis init code */
const serverUrl = "https://k8imqlb5dzpd.usemoralis.com:2053/server";
const appId = "Kf7O2boPKsgVF9Xiz7tWnhXNQCufgNyEBfnDkLeu";
Moralis.start({ serverUrl, appId });

/* TODO: Add Moralis Authentication code */

async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  
  /*async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }*/
  
  document.getElementById("btn-login").onclick = login;
  //document.getElementById("btn-logout").onclick = logOut;

  function mydude() {
    document.getElementById("btn-login").style.display = "none";
  }