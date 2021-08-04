<?php
    require __DIR__ . '/vendor/autoload.php';

    use YooKassa\Client;

    $client = new Client();
    $client->setAuth('824768', 'test_eIxAiHPtcb0XEjqQ-hTMHbl7EuH76GJeyCgov_lwWzc');
    try {
        $payment = $client->createPayment(
            array(
                'amount' => array(
                    'value' => 1000.0,
                    'currency' => 'RUB',
                ),
                'confirmation' => array(
                    'type' => 'redirect',
                    'return_url' => 'https://belovamore.ru/thanks.html',
                ),
                'capture' => true,
                'description' => 'Бронирование места в туре',
            ),
            uniqid('', true)
        );
        $confirmationUrl = $payment->getConfirmation()->getConfirmationUrl();
    }
    catch (\Exception $e) {
        $payment = $e;
    }
    
    if (!empty($payment)) {
        // print_r($confirmationUrl);
        header('Location: ' . $confirmationUrl, true, 301);
        exit();
    }
?>