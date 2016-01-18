var why_controller;

function transitionHelper(time) { return 'all ' + time + 'ms ease'; }

$(document).ready(function() {
    why_controller = new WhyController();

    why_controller.spinner.click(function() { why_controller.spinnerClick(); });
    why_controller.reverseSpinner.click( function() { why_controller.reverseSpinnerClick(); });
    why_controller.scroller.click(function() { why_controller.scrollerClick(); });
});

function WhyController() {
    this.currently_active = null;

    this.spinner = $('.spinner');
    this.spinnerSettings = {};
    this.spinnerSettings['defaults'] = {
        'top': this.spinner.css('top'),
        'left': this.spinner.css('left'),
        'diameter': this.spinner.css('width') };
    this.spinnerSettings['animation1'] = {'time': 500};
    this.spinnerSettings['animation2'] = {'time': 300};
    this.spinnerSettings['animation1']['on_props'] = {
        'border-top-left-radius': 0,
        'border-bottom-right-radius': 0,
        'background-color': color_controller.green_variants[1],
        'z-index': 1000,
        'transform': 'rotate(360deg)',
        'transition': transitionHelper(this.spinnerSettings['animation1']['time']) };
    this.spinnerSettings['animation1']['off_props'] = {
        'border-top-left-radius': '50%',
        'border-bottom-right-radius': '50%',
        'background-color': color_controller.green,
        'z-index': 1,
        'transform': 'rotate(0)',
        'transition': transitionHelper(this.spinnerSettings['animation1']['time']) };
    this.spinnerSettings['animation2']['on_props'] = {
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'box-shadow': 'none',
        'border-top-right-radius': 0,
        'border-bottom-left-radius': 0,
        'transition': transitionHelper(this.spinnerSettings['animation2']['time']) };
    this.spinnerSettings['animation2']['off_props'] = {
        'top': this.spinnerSettings['defaults']['top'],
        'left': this.spinnerSettings['defaults']['left'],
        'width': this.spinnerSettings['defaults']['diameter'],
        'height': this.spinnerSettings['defaults']['diameter'],
        'box-shadow': '0 0 10px 0 ' + color_controller.shadow_color,
        'border-top-right-radius': '50%',
        'border-bottom-left-radius': '50%',
        'transition': transitionHelper(this.spinnerSettings['animation2']['time']) };

    this.reverseSpinner = $('.reverse_spinner');
    this.reverseSpinnerSettings = {};
    this.reverseSpinnerSettings['defaults'] = {
        'top': this.reverseSpinner.css('top'),
        'left': this.reverseSpinner.css('left'),
        'diameter': this.reverseSpinner.css('width') };
    this.reverseSpinnerSettings['animation1'] = {'time': 500};
    this.reverseSpinnerSettings['animation2'] = {'time': 300};
    this.reverseSpinnerSettings['animation1']['on_props'] = {
        'border-top-right-radius': 0,
        'border-bottom-left-radius': 0,
        'background-color': color_controller.green_variants[1],
        'z-index': 1000,
        'transform': 'rotate(-360deg)',
        'transition': transitionHelper(this.reverseSpinnerSettings['animation1']['time']) };
    this.reverseSpinnerSettings['animation1']['off_props'] = {
        'border-top-right-radius': '50%',
        'border-bottom-left-radius': '50%',
        'background-color': color_controller.green,
        'z-index': 1,
        'transform': 'rotate(0)',
        'transition': transitionHelper(this.reverseSpinnerSettings['animation1']['time']) };
    this.reverseSpinnerSettings['animation2']['on_props'] = {
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'box-shadow': 'none',
        'border-top-left-radius': 0,
        'border-bottom-right-radius': 0,
        'transition': transitionHelper(this.reverseSpinnerSettings['animation2']['time']) };
    this.reverseSpinnerSettings['animation2']['off_props'] = {
        'top': this.reverseSpinnerSettings['defaults']['top'],
        'left': this.reverseSpinnerSettings['defaults']['left'],
        'width': this.reverseSpinnerSettings['defaults']['diameter'],
        'height': this.reverseSpinnerSettings['defaults']['diameter'],
        'box-shadow': '0 0 10px 0 ' + color_controller.shadow_color,
        'border-top-left-radius': '50%',
        'border-bottom-right-radius': '50%',
        'transition': transitionHelper(this.reverseSpinnerSettings['animation2']['time']) };

    this.scroller = $('.scroller');
    this.scrollerSettings = {};
    this.scrollerSettings['defaults'] = {
        'top': this.scroller.css('top'),
        'left': this.scroller.css('left'),
        'diameter': this.scroller.css('width') };
    this.scrollerSettings['animation1'] = {'time': 500};
    this.scrollerSettings['animation2'] = {'time': 500};
    this.scrollerSettings['animation1']['on_props'] = {
        'border-radius': '0',
        'background-color': color_controller.green_variants[1],
        'z-index': 1000,
        'transition': transitionHelper(this.spinnerSettings['animation1']['time'])};
    this.scrollerSettings['animation1']['off_props'] = {
        'border-radius': '50%',
        'background-color': color_controller.green,
        'z-index': '1',
        'transition': transitionHelper(this.spinnerSettings['animation1']['time']) };
    this.scrollerSettings['animation2']['on_props'] = {
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'box-shadow': 'none',
        'transition': transitionHelper(this.spinnerSettings['animation1']['time'])};
    this.scrollerSettings['animation2']['off_props'] = {
        'top': this.scrollerSettings['defaults']['top'],
        'left': this.scrollerSettings['defaults']['left'],
        'width': this.scrollerSettings['defaults']['diameter'],
        'height': this.scrollerSettings['defaults']['diameter'],
        'box-shadow': '0 0 10px 0 ' + color_controller.shadow_color,
        'transition': transitionHelper(this.spinnerSettings['animation2']['time']) };
}

WhyController.prototype.spinnerClick = function() {
    if (this.currently_active == 'spinner') {
        why_controller.deactivate('spinner');
    } else {
        why_controller.activate('spinner');
    }
};

WhyController.prototype.reverseSpinnerClick = function() {
    if (this.currently_active == 'reverseSpinner') {
        why_controller.deactivate('reverseSpinner');
    } else {
        why_controller.activate('reverseSpinner');
    }
};

WhyController.prototype.scrollerClick = function() {
    if (this.currently_active == 'scroller') {
        why_controller.deactivate('scroller');
    } else {
        why_controller.activate('scroller');
    }
};

WhyController.prototype.activate = function(to_activate) {
    var self = this;

    var obj = this[to_activate];
    var settings = this[to_activate + 'Settings'];

    obj.css(settings['animation1']['on_props']);

    setTimeout(function() {
        obj.css(settings['animation2']['on_props']);
        obj.find('> *').css('display', 'block');
        obj.find('> *').show();

        setTimeout(function() {
            self.currently_active = to_activate;
            obj.find('*').animate({'opacity': 1}, 150, 'swing');
        }, settings['animation2']['time']);
    }, settings['animation1']['time']);
};

WhyController.prototype.deactivate = function(to_deactivate) {
    var self = this;

    var obj = this[to_deactivate];
    var settings = this[to_deactivate + 'Settings'];

    obj.find('*').animate({'opacity': 0}, 150, 'swing');

    obj.css(settings['animation2']['off_props']);

    setTimeout(function() {
        obj.css(settings['animation1']['off_props']);

        setTimeout(function() {
            if (self.currently_active == to_deactivate) {
                self.currently_active = null;
            }

            obj.removeAttr('style');
            obj.find('> *').removeAttr('style');
        }, settings['animation1']['time']);
    }, settings['animation2']['time']);
};