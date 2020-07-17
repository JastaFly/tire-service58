<?php
if (!empty($_POST)) {
    print_r($_POST);
    // Файлы phpmailer
    require '../libs/php-mailer/PHPMailer.php';
    require '../libs/php-mailer/SMTP.php';
    require '../libs/php-mailer/Exception.php';

    if (isset($_POST['name']) && isset ($_POST['phone'])) {

        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $what = $_POST['what'];

        $mail = new PHPMailer\PHPMailer\PHPMailer();
        try {
            $msg = "ok";
            $mail->isSMTP();
            $mail->CharSet = "UTF-8";
            $mail->SMTPAuth = true;

            // Настройки почты
            $mail->Host = 'smtp.gmail.com';
            $mail->Username = 'verywildweb@gmail.com';
            $mail->Password = '';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;
            $mail->setFrom('autoforst@gmail.com', 'автохолод58.рф');

            // Получатель письма
            $mail->addAddress('zsm58ru@yandex.ru');

            $mail->isHTML(true);

            $mail->Subject = 'Новая заявка на звонок!';
            $mail->Body = "<b>Имя:</b> $name <br>
                <b>Тел:</b> $phone<br>
                <b>Адрес сервисного центра:</b> $address<br>
                <b>Что хотят:</b> $what";

            if ($mail->send()) {

                echo "Ожидайте звонка, спасибо!";

            } else {
                echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
            }

        } catch (Exception $e) {
            echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
        }

    } else {
        echo "Сообщение не было отправлено. Пустые поля не допустимы!";
    }
}