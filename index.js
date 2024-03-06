// Function to calculate yield
function calculateYield(initialInvestment, finalValue) {
    return ((finalValue - initialInvestment) / initialInvestment) * 100;
}

// Example usage
const initialInvestment = 1000; // Initial investment amount
const finalValue = 1500; // Final value after some time

const yieldPercentage = calculateYield(initialInvestment, finalValue);
console.log("Yield percentage:", yieldPercentage.toFixed(2) + "%");
