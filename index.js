module.exports = function stringToTime (string) {
    const years = parseInt(string.substring(0, string.indexOf('Y'))) || 0;
    const months = string.indexOf('M') !== -1 ? parseInt(string.substring(string.indexOf('Y') + 1, string.indexOf('M'))) : 0;
    const weeks = string.indexOf('W') !== -1 ? parseInt(string.substring(string.indexOf('M') + 1, string.indexOf('W'))) : 0;
    const days = string.indexOf('D') !== -1 ? parseInt(string.substring(string.indexOf('W') + 1, string.indexOf('D'))) : 0;
    const hours = string.indexOf('h') !== -1 ? parseInt(string.substring(string.indexOf('D') + 1, string.indexOf('h'))) : 0;
    const minutes = string.indexOf('m') !== -1 ? parseInt(string.substring(string.indexOf('h') + 1, string.indexOf('m'))) : 0;
    const seconds = string.indexOf('s') !== -1 ? parseInt(string.substring(string.indexOf('m') + 1, string.indexOf('s'))) : 0;
    return {years, months, weeks, days, hours, minutes, seconds};
}