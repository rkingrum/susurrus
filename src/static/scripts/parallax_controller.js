var layers = [
    { id: '#bg_layer1' },
    { id: '#bg_layer2' },
    { id: '#bg_layer3' }
];

var splash_height = 0;
var layer_heights = {
    1: 0,
    2: 0,
    3: 0
};


$(document).ready(function() {
    splash_height = $('#navigation').offset().top;

    layer_heights[1] = splash_height;
    layer_heights[2] = splash_height * 1.2;
    layer_heights[3] = splash_height * 1.4;

    $(document).scroll(updateBackgroundLayers);
});

function updateBackgroundLayers() {
    var scroll_position = $(document).scrollTop();
    var splash_visible = splash_height - scroll_position;

    // The splash are is visible so we need to update the layers
    if (splash_visible > 0) {
        $.each(layers, function(index, data) {
            var overflow = splash_height - layer_heights[index + 1];
            var layer_top_offset = overflow * ((splash_height - splash_visible) / splash_height);

            $(data['id']).css('background-position', 'center ' + layer_top_offset + 'px');

            console.log(data['id'] + ' @ ' + layer_top_offset);
        });
    }
}