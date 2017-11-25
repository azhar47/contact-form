<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->

<?php
// put your code here
if (isset($_POST["submit"])) {
    $fname = $_POST["fname"];
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $comment = $_POST["comment"];

    $message = "Full Name : " . $fname . "Email Address: " . $email . "Phone: " . $mobile . " Message :" . $comment;
    $mailto = "azhar.neub@gmail.com";
    mail($mailto,$subject,$message);
    
    if (mail($mailto, $subject, $message)) {
        echo "Succefully Send your Message. Thank You!";
    } else {
        echo "Your Message has not Sent";
    }
}
?>