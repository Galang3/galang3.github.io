<?php
try {
    $tarphar = new Phar('myphar.phar.tar');
    // note that myphar.phar.tar is *not* unlinked
    // convert it to the non-executable tar file format
    // creates myphar.tar
    $tar = $tarphar->convertToData();
    // convert to non-executable zip format, creates myphar.zip
    $zip = $tarphar->convertToData(Phar::ZIP);
    // create myphar.tbz
    $tgz = $tarphar->convertToData(Phar::TAR, Phar::BZ2, '.tbz');
    // creates myphar.phar.tgz
    $phar = $tarphar->convertToData(Phar::PHAR); // throws exception
} catch (Exception $e) {
    // handle the error here
}
?>