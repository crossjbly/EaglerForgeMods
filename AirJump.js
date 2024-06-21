ModAPI.require('player');
ModAPI.addEventListener("key", function(ev) {
    if (ev.key == 57) {
        ModAPI.player.motionY = 0.4;
        ModAPI.player.reload();
    }
});