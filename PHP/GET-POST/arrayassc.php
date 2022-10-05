<?php
    $namaKopi = [
    [
        "nama" => "Kopi Robusta",
        "kode_kopi" => "101029",
        "jenis_kopi" => "Robusta Hitam",
        "gambar" => "robusta.jpg"
    ],
    [
        "nama" => "Kopi Arabika",
        "kode_kopi" => "101030",
        "jenis_kopi" => "Arabika Hitam",
        "gambar" => "hitam.jpg"
    ],
    [
        "nama" => "Kopi Susu",
        "kode_kopi" => "101039",
        "jenis_kopi" => "Hitam Susu",
        "gambar" => "kopsus.jpg"
    ],
];

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Belajar PHP</title>
    </head>
    <body>

    <?php foreach($namaKopi as $kopi) : ?> <!-- tanda ':' di gunakan untuk menganti tanda '{}' -->

        <h2>Daftar Kopi Nikmat</h2>
        <ul>
            <li>
                <img src="img/<?= $kopi('gambar') ?>" alt="">
            </li>
            <li>nama: <?= $kopi('nama') ?></li>
            <li>Kode Kopi: <?= $kopi('kode_kopi') ?></li>
            <li>Jenis Kopi: <?= $kopi('jenis_kopi') ?></li>
        </ul>
        <?php endforeach ?>
    </body>
</html>