var color_controller;

$(document).ready(function() {
    color_controller = new ColorController();
});

function ColorController() {
    this.off_white = '#fbfffd';
    this.off_black= '#030006';
    this.green = '#90d317';
    this.green_variants = ['#dbf7a9', '#b8ed57', '#659d00', '#3c5e00'];
    this.pink = '#ba146b';
    this.pink_variants = ['#eaa0c7', '#d04d92', '#8a0049', '#52002b'];
    this.shadow_color = 'rgba(0, 0, 0, .8)';
}