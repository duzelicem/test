function devModePasif() {
    if (!isLocalhost()) {
        sagTikEngel();
        konsolkapat();
    }
    else {
        alert("You are in development mode. You can't disable dev mode on localhost.");
    }
}

function isLocalhost() {
    return window.location.hostname === "localhost";
}

function sagTikEngel() {
    document.addEventListener("contextmenu", function (dilosurucu) {
        dilosurucu.preventDefault();
    });
}

function konsolkapat() {
    DisableDevtool({
        ondevtoolopen(type, next) {
            next();
            alert("You think you're too smart, don't you?");
        }
    });
}

devModePasif();