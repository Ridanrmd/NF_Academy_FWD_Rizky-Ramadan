<!DOCTYPE html>
<html>
  <head>
    <title>Form Nilai Ujian</title>
  </head>
  <body>
    <h2>Form Nilai Ujian</h2>

    <form method="post" action="">
      <label>Nama:</label><br />
      <input type="text" name="nama" required /><br /><br />

      <label>Email:</label><br />
      <input type="email" name="email" required /><br /><br />

      <label>Nilai Ujian:</label><br />
      <input
        type="number"
        name="nilai"
        min="0"
        max="100"
        required
      /><br /><br />

      <input type="submit" name="submit" value="Submit" />
    </form>

    <?php
if (isset($_POST['submit'])) {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $nilai = $_POST['nilai'];

    if ($nilai >
    70) { $hasil = "Lulus"; } else { $hasil = "Remedial"; } ?>
    <h3>Hasil Ujian</h3>
    Nama:
    <?= $nama ?><br />
    Email:
    <?= $email ?><br />
    Nilai:
    <?= $nilai ?><br />
    Status:
    <?= $hasil ?><br />
    <?php
}
?>
  </body>
</html>
