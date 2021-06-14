import {
    HEADER_KEY_SELECTOR,
    HEADER_VALUE_SELECTOR,
    OPTIONS_KEY_SELECTOR,
    OPTIONS_VALUE_SELECTOR,
    REQUEST_TYPE_SELECTOR,
    REQUEST_URL_SELECTOR
} from "./consts.js";

export function getFormData(){
    const requestTypeHTMLElement = document.querySelector(REQUEST_TYPE_SELECTOR)
    const headerKeys =   Array.from(document.querySelectorAll(HEADER_KEY_SELECTOR))   .map(e => e = e.value)
    const headerValues = Array.from(document.querySelectorAll(HEADER_VALUE_SELECTOR)) .map(e => e = e.value)
    const optionKeys =   Array.from(document.querySelectorAll(OPTIONS_KEY_SELECTOR))  .map(e => e = e.value)
    const optionValues = Array.from(document.querySelectorAll(OPTIONS_VALUE_SELECTOR)).map(e => e = e.value)

    const data = {}
    data.headers = {}
    data.options = {}

    data.requestURL = document.querySelector(REQUEST_URL_SELECTOR).value
    data.requestType = requestTypeHTMLElement.options[requestTypeHTMLElement.selectedIndex].value

    headerKeys.forEach((key, index) => { key ? data.headers[key] = headerValues[index] : null})
    optionKeys.forEach((key, index) => { key ? data.options[key] = optionValues[index] : null})

    return data
}