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
        echo 'Hello World from php01';
    } else {
        http_response_code(405);
        echo 'Invalid Request Method';
    }
}

main();
?>
