<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $date = htmlspecialchars($_POST['date'] ?? '');
  $time = htmlspecialchars($_POST['time'] ?? '');

  http_response_code(200);
  echo "✅ Your booking has been successfully submitted";
} else {
  http_response_code(405);
  echo "Method Not Allowed";
}
?>