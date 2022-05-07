module.exports = function stringToTime (string) {
    let years = 0; months = 0; weeks = 0; days = 0; hours = 0; minutes = 0; seconds = 0;

    if (string.indexOf("Y") !== -1) {
        years = parseInt(string.substring(0, string.indexOf("Y")));
        string = string.slice(string.indexOf("Y") + 1, string.length);
    }

    if (string.indexOf("M") !== -1) {
        months = parseInt(string.substring(0, string.indexOf("M")));
        string = string.slice(string.indexOf("M") + 1, string.length);
    }

    if (string.indexOf("W") !== -1) {
        weeks = parseInt(string.substring(0, string.indexOf("W")));
        string = string.slice(string.indexOf("W") + 1, string.length);
    }

    if (string.indexOf("D") !== -1) {
        days = parseInt(string.substring(0, string.indexOf("D")));
        string = string.slice(string.indexOf("D") + 1, string.length);
    }

    if (string.indexOf("h") !== -1) {
        hours = parseInt(string.substring(0, string.indexOf("h")));
        string = string.slice(string.indexOf("h") + 1, string.length);
    }

    if (string.indexOf("m") !== -1) {
        minutes = parseInt(string.substring(0, string.indexOf("m")));
        string = string.slice(string.indexOf("m") + 1, string.length);
    }

    if (string.indexOf("s") !== -1) {
        seconds = parseInt(string.substring(0, string.indexOf("s")));
        string = string.slice(string.indexOf("s") + 1, string.length);
    }
    return {years, months, weeks, days, hours, minutes, seconds};
}