<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_POST) {
    $memberType = $_POST['memberType'];
    $registrationLocation = $_POST['registrationLocation'];
    $companyName = $_POST['companyName'];
    $name = $_POST['name'];
    $kana = $_POST['kana'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $content = "会員区分: $memberType\n登録会場: $registrationLocation\n会社名: $companyName\n名前: $name\nふりがな: $kana\nEmail: $email\n連絡先: $phone\nお問い合わせ内容: $message";

    $mail = new PHPMailer(true);

    try {
        //Server settings
        // SMTP等の設定はあなたの環境に合わせてください。
        $mail->isSMTP();
        $mail->Host = 'smtp.lolipop.jp';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@shinyoko-shusei.com';
        $mail->Password = 'Lpay-20220104';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 465;

        //Recipients
        $mail->setFrom('info@shinyoko-shusei.com', 'Mailer');
        $mail->addAddress('ko.nagai.0801@gmail.com', 'User Name');     // 受信者の情報

        // Content
        $mail->isHTML(true); // HTMLメールを設定
        $mail->Subject = 'お問い合わせを受け付けました';
        $mail->Body    = $content;

        $mail->send();
        // 送信成功時の処理
        header('Location: thanks.php'); // 送信後にthanks.phpにリダイレクト
    } catch (Exception $e) {
        // 送信失敗時の処理
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
