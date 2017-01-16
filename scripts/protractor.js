/*
TODO
pubsub for guide move, resize. try to contain side effects and remove node dep injection
guide double click to lock/unlock
lower resize handle
window resize
window scroll
small document size
resize function rework
switch class on lock/unlock button so hover states show alternative
improve active switching in background (str.indexOf('(active)'))
fade in/out on show/hide
rotate-able guide handles

options page:
    - mark size
    - radians / degrees / radians
    - marker count
    - precision
    - guide snap
    - background opacity
    - static guide opacity
*/

Protractor = function({ appId }) {
    // Main container, buttons container, close button, lock button
    this.container = new Container({ appId });

    // this.buttons = document.createElement('div');
    // this.buttons.className = `${appId}-buttons`;
    //
    // this.closeBtn = document.createElement('button');
    // this.closeBtn.className = `${appId}-button-close`;
    // this.closeBtn.addEventListener('click', this.hide.bind(this));
    //
    // this.lockBtn = document.createElement('button');
    // this.lockBtn.className = `${appId}-button-lock`;
    //
    // this.buttons.appendChild(this.lockBtn);
    // this.buttons.appendChild(this.closeBtn);
    // this.container.appendChild(this.buttons);

    // Circle, markers
    this.circle = new Circle({ appId });
    this.container.appendChild(this.circle);

    // for (let deg = 0; deg < 360; deg += 15) {
    //     this.container.appendChild(new Marker({ appId, deg }));
    // }
    //
    // // Display, guides, handles
    // this.display = new Display({ appId });
    // this.container.appendChild(this.display);

    this.handle0 = new Handle({ appId, i: 0 });
    // this.handle1 = new Handle({ appId, container: this.container, i: 1 });
    this.container.appendChild(this.handle0);
    // this.container.appendChild(this.handle1);

    // this.guide0 = new Guide({ appId, container: this.container, i: 0 });
    // this.guide1 = new Guide({ appId, container: this.container, i: 1 });
    // this.container.appendChild(this.guide0);
    // this.container.appendChild(this.guide1);

    // TODO remove this
    this.show();
};

Protractor.prototype = {
    hide: function() {
        document.body.removeChild(this.container);
        chrome.runtime.sendMessage({ isOn: false });
    },

    setAppId: id => this.appId = id,

    show: function() {
        document.body.appendChild(this.container);
    }
};
