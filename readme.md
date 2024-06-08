# WASM JS Eval

A Chrome extension that allows users to evaluate JavaScript code using WebAssembly with Duktape or QuickJS engines. This extension provides a safe and isolated environment to run JavaScript code snippets.

## Features

- Evaluate JavaScript code snippets.
- Choose from predefined code examples.
- View the result of the evaluation in the popup.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/leizhenpeng/chrome-v3-wasm-eval.git
    ```

2. Navigate to the project directory:
    ```bash
    cd chrome-v3-wasm-eval
    ```

3. Download the required `duktapeEval.js` and `quickjsEval.js` files from the [wasm-jseval](https://github.com/maple3142/wasm-jseval) project and place them in the project directory.

4. Open Chrome and go to `chrome://extensions/`.

5. Enable "Developer mode" by clicking the toggle switch in the top right corner.

6. Click the "Load unpacked" button and select the project directory.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Select a predefined code example from the dropdown menu or enter your own JavaScript code in the textarea.
3. Click the "Evaluate" button to execute the code.
4. The result of the evaluation will be displayed in the output area.

## Project Structure

```
my-chrome-extension/
│
├── manifest.json         # Chrome extension manifest file
├── background.js         # Background script
├── popup.html            # Popup HTML file
├── popup.js              # Popup JavaScript file
├── styles.css            # Popup CSS file
├── duktapeEval.js        # Duktape eval library (download from wasm-jseval)
├── quickjsEval.js        # QuickJS eval library (download from wasm-jseval)
├── README.md             # Project readme file
```

## Example Code Snippets

1. **简单数学运算**
    ```javascript
    2 + 2
    ```
    预期结果：
    ```javascript
    4
    ```

2. **字符串操作**
    ```javascript
    'Hello, ' + 'World!'
    ```
    预期结果：
    ```javascript
    Hello, World!
    ```

3. **数组操作**
    ```javascript
    [1, 2, 3].map(x => x * 2)
    ```
    预期结果：
    ```javascript
    [2, 4, 6]
    ```

4. **对象属性访问**
    ```javascript
    ({a: 1, b: 2}).a
    ```
    预期结果：
    ```javascript
    1
    ```

5. **函数定义和调用**
    ```javascript
    function add(a, b) { return a + b; }
    add(3, 4)
    ```
    预期结果：
    ```javascript
    7
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.