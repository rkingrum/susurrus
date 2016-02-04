$(document).ready(function() {
    var about_div = $('#about');
    var expand_about = about_div.find('#expand_about');

    expand_about.click(function() {
        if (about_div.hasClass('expanded')) {
            about_div.removeClass('expanded');
            expand_about.html('Read More')
        } else {
            about_div.addClass('expanded');
            expand_about.html('Read Less')
        }
    });
});