// ヘッダーの透過・解除
$(function () {
  // スクロールを開始したら
  $(window).on("scroll", function () {
    // ファーストビューの高さを取得
    mvHeight = $(".js-mv").height();
    if ($(window).scrollTop() > mvHeight) {
      // スクロールの位置がファーストビューより下の場合にclassを付与
      $(".js-header").addClass("transform");
    } else {
      // スクロールの位置がファーストビューより上の場合にclassを外す
      $(".js-header").removeClass("transform");
    }
  });
});

// fvのズームアウト
$(function(){
  $('.slider').slick({
    fade: true,
    arrows: false,
    autoplay:true,
    autoplaySpeed:1500,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

// fadeIn.js
// fv上のテキストのフェードイン
// $('.fv-headline').hide().fadeIn(1500);
// $('.fv-text').hide().fadeIn(1500);

// タブメニュー
$(function(){
  $('.about-list-item').on('click', function(){
    let index = $('.about-list-item').index(this);

    $('.about-list-item').removeClass('is-btn-active');
    $(this).addClass('is-btn-active');
    $('.about-contents').removeClass('is-contents-active');
    $('.about-contents').eq(index).addClass('is-contents-active');
  });
});

// デリミタの背景
$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop();
  var bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

  if(bgPosition){
    $('.delimiter').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});

// ページトップに戻るボタン
$(function(){
  var topBtn=$('#page_top');
  topBtn.hide();
    
  //ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      // 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      // 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });
  
  // ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
  
  });

  // contactform.js
  //ページを切り替えずに問い合わせ画面遷移
  $(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: 'confirm.php',
            type: 'post',
            data: $('#contact-form').serialize(),
            success: function(result) {
                $('#form-result').html(result);
                $('#form-result').show();
                $('#contact-form').hide();
            }
        });
    });

    $(document).on('click', '#back-button', function() {
        $('#form-result').hide();
        $('#contact-form').show();
        fillFormWithData();
    });

    $(document).on('submit', '#confirm-form', function(e) {
        e.preventDefault();
        $.ajax({
            url: 'sendmail.php',
            type: 'post',
            data: $('#confirm-form').serialize(),
            success: function(result) {
                $('#form-result').html(result);
            }
        });
    });

    function fillFormWithData() {
        // 各フィールドに確認画面で表示されていた値をセットします。
        $('#memberType').val($('#confirm-memberType').text());
        $('#registrationLocation').val($('#confirm-registrationLocation').text());
        $('#companyName').val($('#confirm-companyName').text());
        $('#firstName').val($('#confirm-firstName').text());
        $('#lastName').val($('#confirm-lastName').text());
        $('#email').val($('#confirm-email').text());
        $('#phone').val($('#confirm-phone').text());
        $('#message').val($('#confirm-message').text());
        // 他のフィールドも同様にセット
    }
});

$(document).ready(function () {
  const $textContainer = $('.text-animate');
  const text = $textContainer.data('text');
  let htmlContent = '';

  for (let char of text) {
      htmlContent += `<span class="character-animate">${char}</span>`;
  }

  $textContainer.html(htmlContent);

  let chars = $('.character-animate');
  let counter = 0;

  function animateCharacter() {
      if (counter < chars.length) {
          $(chars[counter]).css('opacity', '1');
          counter++;

          setTimeout(animateCharacter, 100); // 一文字ずつ出現させる間隔
      } else {
          // 全文字が表示された後、ほのかに光らせるアニメーション
          $textContainer.css('opacity', '1');
      }
  }

  animateCharacter();
});
$(document).ready(function () {
  const $textContainer = $('.text-animate2');
  const text = $textContainer.data('text');
  let htmlContent = '';

  for (let char of text) {
      htmlContent += `<span class="character-animate2">${char}</span>`;
  }

  $textContainer.html(htmlContent);

  let chars = $('.character-animate2');
  let counter = 0;

  function animateCharacter() {
      if (counter < chars.length) {
          $(chars[counter]).css('opacity', '1');
          counter++;

          setTimeout(animateCharacter, 100); // 一文字ずつ出現させる間隔
      } else {
          // 全文字が表示された後、ほのかに光らせるアニメーション
          $textContainer.css('opacity', '1');
      }
  }

  animateCharacter();
});
