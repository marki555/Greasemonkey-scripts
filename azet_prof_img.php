<?php
// part of Pokec Preview Greasemonkey script
// get URL of big profile image of user on azet/pokec
error_reporting(E_ALL);
$start=microtime(true);
$user=$_GET['nick'];
$ch = curl_init();
curl_setopt($ch, CURLOPT_VERBOSE,0);
curl_setopt($ch, CURLOPT_POST,0);
curl_setopt($ch, CURLOPT_URL,"http://pokec.azet.sk/$user");
curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_HEADER,0);
curl_setopt($ch, CURLOPT_FORBID_REUSE, 1);
$profile=curl_exec ($ch);
if (preg_match('~property="og:image" content="([^"]+)"~', $profile, $regs)) echo $regs[1];
else echo "?";
//echo $profile;
$dur=microtime(true)-$start;
error_log("Azet_prof_img: finished in $dur s.");
?>
