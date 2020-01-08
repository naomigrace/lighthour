/**
 * @param {integer} minutes 
 */
export const padTheMinutes = (minutes) => {
    return minutes.toString().padEnd(2, '0')
}