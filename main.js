let upload = document.getElementById("btn");
let img = document.getElementById("img1");
let cont = document.getElementById("cont");
//
let Saturate = document.getElementById("Saturate");
let Contrast = document.getElementById("Contrast");
let Brightness = document.getElementById("Brightness");
let Sepia = document.getElementById("Sepia");
let Grayscale = document.getElementById("Grayscale");
let Blur = document.getElementById("Blur");
let HueRotate = document.getElementById("Hue-Rotate");
//
let download = document.getElementById("download");
let Reset = document.getElementById("Reset");
//
let can = document.getElementById("can");
let ctx = can.getContext("2d");

function resetValue() {
  img.style.filter = "none";
  Saturate.value = "100";
  Contrast.value = "100";
  Brightness.value = "100";
  Sepia.value = "0";
  Grayscale.value = "0";
  Blur.value = "0";
  HueRotate.value = "0";
}
window.onload = function () {
  download.style.display = "none";
  Reset.style.display = "none";
};

upload.onchange = function () {
  download.style.display = "block";
  Reset.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  resetValue();
  file.onload = function () {
    //الonload لان الصوره بتمر بعمله تحميل فا لازم تحمل علي شان تنزل عندك علي ان كده بنستخدم
    img.src = file.result;
  };
  img.onload = function (params) {
    can.width = img.width;
    can.height = img.height;
    ctx.drawImage(img, 0, 0, can.width, can.height);
    img.style.display = "none";
  };
};
//
let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    ctx.filter = `
            saturate(${Saturate.value}%)
            contrast(${Contrast.value}%)
            brightness(${Brightness.value}%)
            Sepia(${Sepia.value}%)
            grayscale(${Grayscale.value})
            blur(${Blur.value}px)
            hue-rotate(${HueRotate.value}deg)
            `;
    ctx.drawImage(img, 0, 0, can.width, can.height);
  });
});
//
Reset.onclick = function (params) {
  resetValue();
};
//

download.onclick = function () {
  download.href = can.toDataURL("image/jpg");
};
