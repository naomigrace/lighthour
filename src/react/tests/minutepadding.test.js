import { padTheMinutes } from "../components/main/home/clock/time"


test(`keep 0 minute 00`, () => {
    let minute = 0
    let expected_result = "00"
    let result = padTheMinutes(minute)
    expect(result).toBe(expected_result)
})

test(`give one more digit to single digit minutes`, () => {
    let minute = 3
    let expected_result = "30"
    let result = padTheMinutes(minute)
    expect(result).toBe(expected_result)
})

test(`maintain two digits for double digit minutes`, () => {
    let minute = 33
    let expected_result = "33"
    let result = padTheMinutes(minute)
    expect(result).toBe(expected_result)
})