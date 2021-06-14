import {createNewInput} from "./create-new-input.js";
import {
    ADD_HEADER_INPUT_SELECTOR,
    ADD_OPTION_INPUT_SELECTOR,
    HEADER_INPUT,
    HEADER_INPUT_AREA_SELECTOR,
    OPTION_INPUT, OPTION_INPUT_AREA_SELECTOR,
} from "./consts.js";
import {sendRequest} from "./send-request.js";
import {getFormData} from "./get-form-data.js";

document.addEventListener('DOMContentLoaded', () => {

    const addHeaderInput = document.querySelector(ADD_HEADER_INPUT_SELECTOR)
    const addOptionInput = document.querySelector(ADD_OPTION_INPUT_SELECTOR)
    const headerInputArea = document.querySelector(HEADER_INPUT_AREA_SELECTOR)
    const optionInputArea = document.querySelector(OPTION_INPUT_AREA_SELECTOR)
    const form = document.querySelector('form')
    const responseField = document.querySelector("code")

    addHeaderInput.addEventListener('click', (e) => {
        createNewInput(headerInputArea, HEADER_INPUT)
    })

    addOptionInput.addEventListener('click', (e) => {
        createNewInput(optionInputArea, OPTION_INPUT)
    })

    form.addEventListener('submit', () => {

        let data = getFormData()

        sendRequest(
            data.requestURL,
            data.requestType,
            data.headers,
            data.options).then(r => responseField.innerHTML = r)
    })
})