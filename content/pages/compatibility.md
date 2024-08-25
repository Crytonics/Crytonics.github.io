+++
title = "Compatibility"
description = "Compatibility Strato - Nintendo Switch™ Emulator"
author = "Strato Team"
+++

<div style="text-align: center;">

  <img id="badge-playable" src="" alt="Playable">
  <img id="badge-ingame" src="" alt="Ingame">
  <img id="badge-menus" src="" alt="Menus">
  <img id="badge-boots" src="" alt="Boots">
  <img id="badge-nothing" src="" alt="Nothing">

</div>

<script>

    document.addEventListener("DOMContentLoaded", function() {
    fetch('https://raw.githubusercontent.com/Crytonics/TestCompactList/main/compat-stats.json') // Updated URL
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('badge-playable').src = `https://img.shields.io/badge/Playable-${data['status-playable'].count}_(${data['status-playable'].percentage}%25)-brightgreen`;
            document.getElementById('badge-ingame').src = `https://img.shields.io/badge/Ingame-${data['status-ingame'].count}_(${data['status-ingame'].percentage}%25)-yellow`;
            document.getElementById('badge-menus').src = `https://img.shields.io/badge/Menus-${data['status-menus'].count}_(${data['status-menus'].percentage}%25)-orange`;
            document.getElementById('badge-boots').src = `https://img.shields.io/badge/Boots-${data['status-boots'].count}_(${data['status-boots'].percentage}%25)-red`;
            document.getElementById('badge-nothing').src = `https://img.shields.io/badge/Nothing-${data['status-nothing'].count}_(${data['status-nothing'].percentage}%25)-blue`;
        })
        .catch(error => console.error('Error fetching compatibility stats:', error));
    });
</script>