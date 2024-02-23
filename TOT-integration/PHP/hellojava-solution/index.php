<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");

function properties(){
    return [
        'java01' => 'http://localhost:8081/day1-java01/helloworld',
        'java02' => 'http://localhost:8082/day1-java02/helloworld' 
    ];
}

function main(){
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $curl = curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://localhost:8082/day1-java02/helloworld',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        echo $response;
    } else {
        http_response_code(405);
        echo 'Invalid Request Method';
    }
}

main();
?>
