document.getElementById('examples').addEventListener('change', (event) => {
    const codeExamples = {
        "2 + 2": "2 + 2",
        "'Hello, ' + 'World!'": "'Hello, ' + 'World!'",
        "[1, 2, 3].map(x => x * 2)": "[1, 2, 3].map(x => x * 2)",
        "({a: 1, b: 2}).a": "({a: 1, b: 2}).a",
        "function add(a, b) { return a + b; } add(3, 4)": "function add(a, b) { return a + b; } add(3, 4)"
    };
    const selectedCode = event.target.value;
    document.getElementById('code').value = codeExamples[selectedCode] || "";
});

document.getElementById('evaluate').addEventListener('click', () => {
    const code = document.getElementById('code').value;
    quickjsEval.getInstance().then(mod => {
        try {
            const result = mod.eval(code);
            document.getElementById('output').textContent = JSON.stringify(result, null, 2);
        } catch (e) {
            document.getElementById('output').textContent = `Error: ${e.message}`;
        }
    });
});
