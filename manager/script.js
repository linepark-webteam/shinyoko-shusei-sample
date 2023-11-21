const bios = {
  "../img/sasagawa-img.jpg": `
      <table class="table table-bordered my-5">
          <tr><td>会社名</td><td>株式会社A</td></tr>
          <tr><td>役職</td><td>役職名</td></tr>
          <tr><td>業種</td><td>業種名</td></tr>
          <tr><td>会社PR</td><td>PRポイント</td></tr>
      </table>`,
  "../img/img2.jpg": `
  <table class="table table-bordered my-5">
  <tr><td>会社名</td><td>株式会社B</td></tr>
  <tr><td>役職</td><td>役職名</td></tr>
  <tr><td>業種</td><td>業種名</td></tr>
  <tr><td>会社PR</td><td>PRポイント</td></tr>
</table>`,
  "../img/img3.jpg": `
  <table class="table table-bordered my-5">
  <tr><td>会社名</td><td>株式会社C</td></tr>
  <tr><td>役職</td><td>役職名</td></tr>
  <tr><td>業種</td><td>業種名</td></tr>
  <tr><td>会社PR</td><td>PRポイント</td></tr>
</table>`,
  "../img/img4.jpg": `
  <table class="table table-bordered my-5">
  <tr><td>会社名</td><td>株式会社D</td></tr>
  <tr><td>役職</td><td>役職名</td></tr>
  <tr><td>業種</td><td>業種名</td></tr>
  <tr><td>会社PR</td><td>PRポイント</td></tr>
</table>`,
  "../img/img5.jpg": `
  <table class="table table-bordered my-5">
  <tr><td>会社名</td><td>株式会社E</td></tr>
  <tr><td>役職</td><td>役職名</td></tr>
  <tr><td>業種</td><td>業種名</td></tr>
  <tr><td>会社PR</td><td>PRポイント</td></tr>
</table>`,
  "../img/img6.jpg": `
  <table class="table table-bordered my-5">
  <tr><td>会社名</td><td>株式会社F</td></tr>
  <tr><td>役職</td><td>役職名</td></tr>
  <tr><td>業種</td><td>業種名</td></tr>
  <tr><td>会社PR</td><td>PRポイント</td></tr>
</table>`,
  "../img/img7.jpg": `
  <table class="table table-bordered my-5">
  <tr><td>会社名</td><td>株式会社G</td></tr>
  <tr><td>役職</td><td>役職名</td></tr>
  <tr><td>業種</td><td>業種名</td></tr>
  <tr><td>会社PR</td><td>PRポイント</td></tr>
</table>`,
  "../img/img8.jpg": `
  <table class="table table-bordered my-5">
  <tr><td>会社名</td><td>株式会社H</td></tr>
  <tr><td>役職</td><td>役職名</td></tr>
  <tr><td>業種</td><td>業種名</td></tr>
  <tr><td>会社PR</td><td>PRポイント</td></tr>
</table>`,
  "../img/img9.jpg": `
  <table class="table table-bordered my-5">
  <tr><td>会社名</td><td>株式会社I</td></tr>
  <tr><td>役職</td><td>役職名</td></tr>
  <tr><td>業種</td><td>業種名</td></tr>
  <tr><td>会社PR</td><td>PRポイント</td></tr>
</table>`,
  "../img/img10.jpg": `
  <table class="table table-bordered my-5">
  <tr><td>会社名</td><td>株式会社K</td></tr>
  <tr><td>役職</td><td>役職名</td></tr>
  <tr><td>業種</td><td>業種名</td></tr>
  <tr><td>会社PR</td><td>PRポイント</td></tr>
</table>`,
  // 他の画像と略歴も同様に設定
};


const representatives = {
  "../img/sasagawa-img.jpg": { repName: "代表世話人", repTitle: "笹川 政吉" },
  "../img/img2.jpg": { repName: "世話人2", repTitle: "氏名2" },
  "../img/img3.jpg": { repName: "世話人3", repTitle: "氏名3" },
  "../img/img4.jpg": { repName: "世話人4", repTitle: "氏名4" },
  "../img/img5.jpg": { repName: "世話人5", repTitle: "氏名5" },
  "../img/img6.jpg": { repName: "世話人6", repTitle: "氏名6" },
  "../img/img7.jpg": { repName: "世話人7", repTitle: "氏名7" },
  "../img/img8.jpg": { repName: "世話人8", repTitle: "氏名8" },
  "../img/img9.jpg": { repName: "世話人9", repTitle: "氏名9" },
  "../img/img10.jpg": { repName: "世話人10", repTitle: "氏名10" },
  // 他の画像に対応する代表世話人のデータ
};

document.querySelectorAll('.thumb').forEach(item => {
  item.addEventListener('click', function() {
      const bioHtml = bios[this.getAttribute('src')];
      document.getElementById('mainBio').innerHTML = bioHtml;

      const repData = representatives[this.getAttribute('src')];
      document.getElementById('repName').textContent = repData.repName; // 代表世話人の役職を更新
      document.getElementById('repTitle').textContent = repData.repTitle; // 代表世話人の名前を更新
      document.getElementById('mainImage').src = this.getAttribute('src'); // 画像を更新
  });
});