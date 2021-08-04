<?php
    require __DIR__ . '/vendor/autoload.php';

    use YooKassa\Client;

    $client = new Client();
    $client->setAuth('822095', 'live_ZesW239CvM4I90Nw_GLbId-FJZ2tdwMt0d8J82hvpPQ');
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