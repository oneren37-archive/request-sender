import {createNewInput} from "./create-new-input.js";
import {HEADER_INPUT, OPTION_INPUT} from "./consts.js";
import {sendRequest} from "./send-request.js";

document.addEventListener('DOMContentLoaded', () => {

    const addHeaderInput = document.querySelector('#js-add-header-input')
    const addOptionInput = document.querySelector('#js-add-option-input')
    const headerInputArea = document.querySelector('#js-header-input-area')
    const optionInputArea = document.querySelector('#js-option-input-area')
    const form = document.querySelector('form')

    addHeaderInput.addEventListener('click', (e) => {
        createNewInput(headerInputArea, HEADER_INPUT)
    })

    addOptionInput.addEventListener('click', (e) => {
        createNewInput(optionInputArea, OPTION_INPUT)
    })

    form.addEventListener('submit', () => {
        const requestTypeHTMLElement = document.querySelector("#js-request-type")
        const headerKeys = Array.from(document.querySelectorAll('.header-key')).map(e => e = e.value)
        const headerValues = Array.from(document.querySelectorAll('.header-value')).map(e => e = e.value)
        const optionKeys = Array.from(document.querySelectorAll('.option-key')).map(e => e = e.value)
        const optionValues = Array.from(document.querySelectorAll('.option-value')).map(e => e = e.value)
        const responseField = document.querySelector("code")

        const data = {}
        data.headers = {}
        data.options = {}

        data.requestURL = document.querySelector("#js-request-url").value
        data.requestType = requestTypeHTMLElement.options[requestTypeHTMLElement.selectedIndex].value

        headerKeys.forEach((key, index) => { key ? data.headers[key] = headerValues[index] : console.log("Noup")})
        optionKeys.forEach((key, index) => { key ? data.options[key] = optionValues[index] : console.log("Noup")})

        console.log(data)

        function displayResponse(r) {
            responseField.innerHTML = r
        }

        sendRequest(
            data.requestURL,
            data.requestType,
            data.headers,
            data.options).then(r => displayResponse(r))
    })
})