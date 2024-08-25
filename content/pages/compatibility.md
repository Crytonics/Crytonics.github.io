+++
title = "Compatibility"
description = "Compatibility Strato - Nintendo Switch™ Emulator"
author = "Strato Team"
+++

Latest data on the emulator's compatibility. Click to see the list of games that are compatible with Strato.

<div class="rectangle" id="rectangle-playable">
    <h3 id="playable-block-title">Playable</h3>
    <h3 class="percentage" id="playable-percentage"></h3>
    <progress class="progress" id="progress-playable" value="0" max="100" style="--progress-value-color: #18e022;"></progress>
</div>
<div class="rectangle" id="rectangle-ingame">
    <h3 id="ingame-block-title">Ingame</h3>
    <h3 class="percentage" id="ingame-percentage"></h3>
    <progress class="progress" id="progress-ingame" value="0" max="100" style="--progress-value-color: #58a32f;"></progress>
</div>
<div class="rectangle" id="rectangle-menus">
    <h3 id="menus-block-title">Menus</h3>
    <h3 class="percentage" id="menus-percentage"></h3>
    <progress class="progress" id="progress-menus" value="0" max="100" style="--progress-value-color: #bfb302;"></progress>
</div>
<div class="rectangle" id="rectangle-boots">
    <h3 id="boots-block-title">Boots</h3>
    <h3 class="percentage" id="boots-percentage"></h3>
    <progress class="progress" id="progress-boots" value="0" max="100" style="--progress-value-color: #e08a1e;"></progress>
</div>
<div class="rectangle" id="rectangle-nothing">
    <h3 id="nothing-block-title">Nothing</h3>
    <h3 class="percentage" id="nothing-percentage"></h3>
    <progress class="progress" id="progress-nothing" value="0" max="100" style="--progress-value-color: #fc0307;"></progress>
</div>

<script>

    document.addEventListener("DOMContentLoaded", function() {
    fetch('https://raw.githubusercontent.com/Crytonics/TestCompactList/main/compat-stats.json') // Updated URL
        .then(response => response.json())
        .then(data => {
            document.getElementById('progress-playable').value = data['status-playable'].percentage;
            document.getElementById('progress-ingame').value = data['status-ingame'].percentage;
            document.getElementById('progress-menus').value = data['status-menus'].percentage;
            document.getElementById('progress-boots').value = data['status-boots'].percentage;
            document.getElementById('progress-nothing').value = data['status-nothing'].percentage;

            document.getElementById('playable-block-title').innerHTML = "Playable (" + data['status-playable'].count + ")";
            document.getElementById('playable-percentage').innerHTML = "(" + data['status-playable'].percentage + "%" + ")";
            document.getElementById('ingame-block-title').innerHTML = "Ingame (" + data['status-ingame'].count + ")";
            document.getElementById('ingame-percentage').innerHTML = "(" + data['status-ingame'].percentage + "%" + ")";
            document.getElementById('menus-block-title').innerHTML = "Menus (" + data['status-menus'].count + ")";
            document.getElementById('menus-percentage').innerHTML = "(" + data['status-menus'].percentage + "%" + ")";
            document.getElementById('boots-block-title').innerHTML = "Boots (" + data['status-boots'].count + ")";
            document.getElementById('boots-percentage').innerHTML = "(" + data['status-boots'].percentage + "%" + ")";
            document.getElementById('nothing-block-title').innerHTML = "Nothing (" + data['status-nothing'].count + ")";
            document.getElementById('nothing-percentage').innerHTML = "(" + data['status-nothing'].percentage + "%" + ")";
        })
        .catch(error => console.error('Error fetching compatibility stats:', error));
    });
</script>