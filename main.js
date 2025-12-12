window.onloadTurnstileCallback = function () {
    turnstile.render('#myWidget', {
        sitekey: '0x4AAAAAAAhL0cEOZosQb4mM',
        callback: function(token) {
            console.log('Challenge Success ${token}');
            window.location.href = "https://facebook.com";
        },
    });
  };