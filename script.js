window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("turn").className = "head-new";
    document.getElementById("start-btn-id").className = "start-btn-new";
  } else {
    document.getElementById("turn").className = "head";
    document.getElementById("start-btn-id").className = "start-btn";
  }
}
