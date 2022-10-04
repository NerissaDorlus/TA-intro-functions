const subTotal = 17.24
const taxRate = 0.07

function calculateSalesTax(subTotal, taxRate){
    return subTotal * taxRate
}

const taxTotal = calculateSalesTax(subTotal, taxRate)
console.log('Subtotal     $', subTotal.toFixed(2))
console.log('Tax          $', taxTotal.toFixed(2))
console.log('------------------------')
console.log('Total        $', (subTotal + taxTotal).toFixed(2))




