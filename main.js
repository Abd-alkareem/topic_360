// format the color changing for the header
window.addEventListener("scroll", function () {
  if (window.scrollY < 100) {
    document.querySelector(
      "header"
    ).style.cssText = `linear-gradient(90deg, #13547a 0%, #80d0c7 100%);bacground-color = "none" `;
    document.querySelectorAll(
      "header .container .logo .icon span"
    )[0].style.backgroundColor = "#13547a";
  } else if (window.scrollY >= 100) {
    document.querySelector("header").style.backgroundImage = "none";
    document.querySelector("header").style.backgroundColor = "#80d0c7";
    document.querySelectorAll(
      "header .container .logo .icon span"
    )[0].style.backgroundColor = "#80d0c7";
  }
});

// format the links active
document.querySelectorAll("header a").forEach(function (ele) {
  ele.addEventListener("click", function () {
    document.querySelectorAll("header a").forEach(function (e) {
      e.classList.remove("active");
    });
    ele.classList.add("active");
  });
});

// format the sections name in browse part
document.querySelectorAll(".browse .sections span").forEach(function (ele, cli) {
    ele.addEventListener("click", function () {
      document.querySelectorAll(".browse .sections span").forEach(function (e) {
        e.classList.remove("active");
      });
      ele.classList.add("active");
      //format the sections silde change
        document.querySelectorAll(".browse .container .show-sec .slide ").forEach(function(ele){
        ele.classList.add("hidden");
        ele.classList.remove("active");
        setTimeout(function(){
            ele.classList.remove("hidden");
            document.querySelectorAll(".browse .container .show-sec .slide ")[cli].classList.add("active");
        },200);
        
        })
    });
  });

//formath the quistion part
document.querySelectorAll(".question .container .holder .questions .qu div").forEach(function (q) {
    q.addEventListener("click", function () {
      if (q.parentElement.classList.contains("active")) {
        q.parentElement.classList.remove("active");
      } else {
        document
          .querySelectorAll(".question .container .holder .questions .qu ")
          .forEach(function (ele) {
            ele.classList.remove("active");
          });
        q.parentElement.classList.add("active");
      }
    });
  });

//format the minu
document.querySelector(".minu").addEventListener("click", function () {
  document.querySelector(".minu").classList.toggle("active");
  document.querySelector("header .links").classList.toggle("active");
  document.querySelector("header ").classList.toggle("active");
});

document.querySelectorAll("header a").forEach(function (ele) {
  ele.addEventListener("click", function () {
    document.querySelector(".minu").classList.remove("active");
    document.querySelector("header .links").classList.remove("active");
    document.querySelector("header ").classList.remove("active");
  });
});


