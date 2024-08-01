document.addEventListener('DOMContentLoaded', function() {
    const decimalInput = document.getElementById('decimal');
    const binaryInput = document.getElementById('binary');

    // Function to convert decimal to binary
    function decimalToBinary(decimal) {
        return (decimal >>> 0).toString(2); // Using >>> 0 to ensure unsigned conversion
    }

    // Function to convert binary to decimal
    function binaryToDecimal(binary) {
        return parseInt(binary, 2);
    }

    // Update binary input when the decimal input changes
    decimalInput.addEventListener('input', function() {
        const decimalValue = parseInt(decimalInput.value, 10);
        if (!isNaN(decimalValue)) {
        binaryInput.value = decimalToBinary(decimalValue);
        } else {
        binaryInput.value = '';
        }
    });

    // Update decimal input when binary input changes
    binaryInput.addEventListener('input', function() {
        let binaryValue = binaryInput.value.trim();
        // Remove any non-binary characters
        binaryValue = binaryValue.replace(/[^01]/g, '');
        binaryInput.value = binaryValue; // Update the input value

        if (/^[01]+$/.test(binaryValue)) {
        decimalInput.value = binaryToDecimal(binaryValue);
        } else {
        decimalInput.value = '';
        }
    });
});