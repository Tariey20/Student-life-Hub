<?php
function checkBalance($allowed, $spent) {
    $balance = $allowed - $spent;
    return $balance < 0 ? 0 : $balance;
}
echo "Balance: " . checkBalance(500, 320);
?>