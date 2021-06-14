import {
    HEADER_INPUT,
    HEADER_KEY_SELECTOR,
    HEADER_VALUE_SELECTOR,
    OPTION_INPUT, OPTIONS_KEY_SELECTOR,
    OPTIONS_VALUE_SELECTOR
} from "./consts.js";

export function createNewInput(rootNode, inputType){
    let keyInputClass
    let valueInputClass

    switch (inputType){
        case HEADER_INPUT:
            keyInputClass = HEADER_KEY_SELECTOR
            valueInputClass = HEADER_VALUE_SELECTOR
            break

        case OPTION_INPUT:
            keyInputClass = OPTIONS_KEY_SELECTOR
            valueInputClass = OPTIONS_VALUE_SELECTOR
            break
    }

    let newInput = document.createElement("div")
    newInput.className += "row"
    newInput.innerHTML = `<input class="form-control col-5 m-2 ${keyInputClass}" type="text">
                              <input class="form-control col-5 m-2 ${valueInputClass}" type="text">`

    rootNode.appendChild(newInput, HEADER_INPUT)
}