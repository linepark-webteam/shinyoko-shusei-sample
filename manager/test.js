document.querySelectorAll(".thumb").forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    const newSrc = this.getAttribute("src");
    changeMainImage(newSrc);

    const repData = imageData.find(data => data.src === newSrc);
    if (repData) {
      document.getElementById("repName").textContent = repData.repName;
      document.getElementById("repTitle").textContent = repData.repTitle;
    }
  });
});

function changeMainImage(newSrc) {
  document.getElementById("mainImage").src = newSrc;
}

document.querySelectorAll(".thumb").forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    const newSrc = this.getAttribute("src");
    changeMainImage(newSrc);
  });
});

const bios = {
  "../img/sasagawa2.webp": `
      <table class="table table-bordered my-5">
          <tr><td>会社名</td><td>株式会社A</td></tr>
          <tr><td>役職</td><td>役職名</td></tr>
          <tr><td>業種</td><td>業種名</td></tr>
          <tr><td>会社PR</td><td>PRポイント</td></tr>
      </table>
      <div class="row">
      <a href="#desc" class="col-3"><img class="each-img4 col-12" src="../img/sasagawa2.webp" alt="笹川 政吉"></a>
      <a href="#desc" class="col-3"><img class="each-img5 col-12" src="../img/sasagawa3.webp" alt="笹川 政吉"></a>
    </div>`,
  "../img/tokuyama1.webp": `
  <table class="table table-bordered my-5">
  <tr><td>会社名</td><td>株式会社B</td></tr>
  <tr><td>役職</td><td>役職名</td></tr>
  <tr><td>業種</td><td>業種名</td></tr>
  <tr><td>会社PR</td><td>PRポイント</td></tr>
</table>`,
  "../img/nishikawa1.webp": `
  <table class="table table-bordered my-5">
  <tr><td>会社名</td><td>株式会社C</td></tr>
  <tr><td>役職</td><td>役職名</td></tr>
  <tr><td>業種</td><td>業種名</td></tr>
  <tr><td>会社PR</td><td>PRポイント</td></tr>
</table>`,
//   "../img/img4.webp": `
//   <table class="table table-bordered my-5">
//   <tr><td>会社名</td><td>株式会社D</td></tr>
//   <tr><td>役職</td><td>役職名</td></tr>
//   <tr><td>業種</td><td>業種名</td></tr>
//   <tr><td>会社PR</td><td>PRポイント</td></tr>
// </table>`,
//   "../img/img5.webp": `
//   <table class="table table-bordered my-5">
//   <tr><td>会社名</td><td>株式会社E</td></tr>
//   <tr><td>役職</td><td>役職名</td></tr>
//   <tr><td>業種</td><td>業種名</td></tr>
//   <tr><td>会社PR</td><td>PRポイント</td></tr>
// </table>`,
//   "../img/img6.webp": `
//   <table class="table table-bordered my-5">
//   <tr><td>会社名</td><td>株式会社F</td></tr>
//   <tr><td>役職</td><td>役職名</td></tr>
//   <tr><td>業種</td><td>業種名</td></tr>
//   <tr><td>会社PR</td><td>PRポイント</td></tr>
// </table>`,
//   "../img/img7.webp": `
//   <table class="table table-bordered my-5">
//   <tr><td>会社名</td><td>株式会社G</td></tr>
//   <tr><td>役職</td><td>役職名</td></tr>
//   <tr><td>業種</td><td>業種名</td></tr>
//   <tr><td>会社PR</td><td>PRポイント</td></tr>
// </table>`,
//   "../img/img8.webp": `
//   <table class="table table-bordered my-5">
//   <tr><td>会社名</td><td>株式会社H</td></tr>
//   <tr><td>役職</td><td>役職名</td></tr>
//   <tr><td>業種</td><td>業種名</td></tr>
//   <tr><td>会社PR</td><td>PRポイント</td></tr>
// </table>`,
//   "../img/img9.webp": `
//   <table class="table table-bordered my-5">
//   <tr><td>会社名</td><td>株式会社I</td></tr>
//   <tr><td>役職</td><td>役職名</td></tr>
//   <tr><td>業種</td><td>業種名</td></tr>
//   <tr><td>会社PR</td><td>PRポイント</td></tr>
// </table>`,
//   "../img/img10.webp": `
//   <table class="table table-bordered my-5">
//   <tr><td>会社名</td><td>株式会社K</td></tr>
//   <tr><td>役職</td><td>役職名</td></tr>
//   <tr><td>業種</td><td>業種名</td></tr>
//   <tr><td>会社PR</td><td>PRポイント</td></tr>
// </table>`,
  // 他の画像と略歴も同様に設定
};

const representatives = {
  "../img/sasagawa2.webp": { repName: "代表世話人", repTitle: "笹川 政吉" },
  "../img/tokuyama1.webp": { repName: "世話人2", repTitle: "氏名2" },
  "../img/nishikawa1.webp": { repName: "世話人3", repTitle: "氏名3" },
  // "../img/img4.webp": { repName: "世話人4", repTitle: "氏名4" },
  // "../img/img5.webp": { repName: "世話人5", repTitle: "氏名5" },
  // "../img/img6.webp": { repName: "世話人6", repTitle: "氏名6" },
  // "../img/img7.webp": { repName: "世話人7", repTitle: "氏名7" },
  // "../img/img8.webp": { repName: "世話人8", repTitle: "氏名8" },
  // "../img/img9.webp": { repName: "世話人9", repTitle: "氏名9" },
  // "../img/img10.webp": { repName: "世話人10", repTitle: "氏名10" },
  // 他の画像に対応する代表世話人のデータ
};

document.querySelectorAll(".thumb").forEach((item) => {
  item.addEventListener("click", function () {
    const repEach = representatives[this.getAttribute("src")];
    const newHTML = bios[this.getAttribute("src")];
    document.getElementById("mainBio").innerHTML = newHTML;
    document.getElementById("repName").textContent = repEach.repName;
    document.getElementById("repTitle").textContent = repEach.repTitle;
    const clickedImageSrc = this.getAttribute("src");
    document.getElementById("mainImage").src = clickedImageSrc;
    const eachImages = document.querySelectorAll(".each-img1, .each-img2, .each-img3");
    eachImages.forEach((element, index) => {
      const newSrc = `../img/sasagawa${index + 1}.webp`;
      element.src = newSrc;
    });
  });
});

document.querySelectorAll(".thumb").forEach(function (image) {
  image.addEventListener("click", function () {
    const altText = image.getAttribute("alt");
    const src = image.getAttribute("src");
    document.getElementById("mainImage").src = src;
    document.getElementById("mainImage").alt = altText;
    const newImage = document.createElement("img");
    newImage.src = src;
    newImage.alt = altText;
    mainImageContainer.appendChild(newImage);
  });
});
