<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php';

if ($_POST) {
    // 入力値のサニタイズ
    $memberType = htmlspecialchars($_POST['memberType'], ENT_QUOTES, 'UTF-8');
    $registrationLocation = htmlspecialchars($_POST['registrationLocation'], ENT_QUOTES, 'UTF-8');
    $companyName = htmlspecialchars($_POST['companyName'], ENT_QUOTES, 'UTF-8');
    $name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
    $kana = htmlspecialchars($_POST['kana'], ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
    $phone = htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

    $content = "会員区分: $memberType\n登録会場: $registrationLocation\n会社名: $companyName\n名前: $name\nふりがな: $kana\nEmail: $email\n連絡先: $phone\nお問い合わせ内容: $message";

    $mail = new PHPMailer(true);

    try {
        $mail->isMail(); // Use PHP's mail function

        //Recipients
        $mail->setFrom('noreply@shinyoko-shusei.com', 'お問い合わせサポート');
        $mail->addAddress($email, $name); // User's email address
        // Add CC or BCC if you need

        //Content
        $mail->isHTML(true); // Set email format to HTML
        $mail->Subject = 'お問い合わせありがとうございます';
        $mail->Body    = nl2br($content); // Convert newlines to <br> tags
        $mail->AltBody = strip_tags($content); // Plain text for non-HTML mail clients

        $mail->send();

        // 管理者への通知
        $mail->clearAddresses(); // Clear all addresses
        $mail->addAddress('ko.nagai.0801@gmail.com'); // Admin email address
        $mail->Subject = '新しいお問い合わせがありました';
        $mail->Body    = nl2br("新しいお問い合わせが以下の内容でありました。\n\n" . $content);
        $mail->send();

        header('Location: thanks.php'); // Redirect to thank you page
    } catch (Exception $e) {
        echo "申し訳ありませんが、メッセージを送信できませんでした: " . $mail->ErrorInfo;
    }
}
?>
