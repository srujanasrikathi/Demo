function pay() {
    const cardNumber = document.getElementById('cardnum').value;
    const cardHolderName = document.getElementById('holdername').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    const paymentData = {
        cardNumber: cardNumber,
        cardHolderName: cardHolderName,
        expiry: expiry,
        cvv: cvv
    };
    
    console.log('Payment Data:', paymentData);
    window.location.href='a2.html';
}