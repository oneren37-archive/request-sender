import {HEADER_INPUT, OPTION_INPUT} from "./consts.js";

export function createNewInput(rootNode, inputType){
    let keyInputClass
    let valueInputClass

    switch (inputType){
        case HEADER_INPUT:
            keyInputClass = "header-key"
            valueInputClass = "header-value"
            break

        case OPTION_INPUT:
            keyInputClass = "option-key"
            valueInputClass = "option-value"
            break
    }

    let newInput = document.createElement("div")
    newInput.className += "row"
    newInput.innerHTML = `<input class="form-control col-5 m-2 ${keyInputClass}" type="text">
                              <input class="form-control col-5 m-2 ${valueInputClass}" type="text">`

    rootNode.appendChild(newInput, HEADER_INPUT)
}