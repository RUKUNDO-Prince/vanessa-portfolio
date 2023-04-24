<?php
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'todo_db';

    // SET DSN AND CONNECT TO DB
    // $dsn = 'mysql:host=' . $host . ';dbname=' . $db;  OR 

    $dsn = "mysql:host=localhost;dbname=todo_db;charset=utf8mb4";
    $pdo = new PDO($dsn, $user, $pass);

    // PDO ERROR MODE TO EXCEPTION
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>