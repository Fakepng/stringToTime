module.exports = function stringToTime (string) {
    if (!string) return console.error('stringToTime: string is not defined');
    
    const Year = parseInt(string.substring(0, string.indexOf('Y'))) || 0;
    const Month = string.indexOf('M') !== -1 ? parseInt(string.substring(string.indexOf('Y') + 1, string.indexOf('M'))) : 0;
    const Week = string.indexOf('W') !== -1 ? parseInt(string.substring(string.indexOf('M') + 1, string.indexOf('W'))) : 0;
    const Day = string.indexOf('D') !== -1 ? parseInt(string.substring(string.indexOf('W') + 1, string.indexOf('D'))) : 0;
    const Hour = string.indexOf('h') !== -1 ? parseInt(string.substring(string.indexOf('D') + 1, string.indexOf('h'))) : 0;
    const Minute = string.indexOf('m') !== -1 ? parseInt(string.substring(string.indexOf('h') + 1, string.indexOf('m'))) : 0;
    const Second = string.indexOf('s') !== -1 ? parseInt(string.substring(string.indexOf('m') + 1, string.indexOf('s'))) : 0;
    return {Year, Month, Week, Day, Hour, Minute, Second};
}