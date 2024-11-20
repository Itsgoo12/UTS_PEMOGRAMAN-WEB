<?php
$host = "localhost"; // Server database
$user = "root";      // Username MySQL
$password = "";      // Password MySQL
$dbname = "user_db"; // Nama database

// Membuat koneksi
$conn = new mysqli($host, $user, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
<?php
include 'db_connection.php';
echo "Koneksi ke database berhasil!";
?>
