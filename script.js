// Function to Prompt Admin Password
function promptAdminAccess() {
    const pass = prompt("Enter Security Code:");
    if (pass === "essa123") {
        document.getElementById('adminModal').style.display = "flex";
    } else if (pass !== null) {
        alert("Unauthorized Access!");
    }
}

// Function to Close Admin Panel
function closeAdminPanel() {
    document.getElementById('adminModal').style.display = "none";
}

// Secret Keyboard Shortcut: Ctrl + Shift + A to open Admin Panel
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && (event.key === 'A' || event.key === 'a')) {
        event.preventDefault();
        promptAdminAccess();
    }
});

// Add Item Dynamically to Selected Category
document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('itemName').value;
    const price = document.getElementById('itemPrice').value;
    const categoryGridId = document.getElementById('itemCategory').value;
    const imgUrl = document.getElementById('itemImage').value;

    const targetGrid = document.getElementById(categoryGridId);
    
    const newCard = document.createElement('div');
    newCard.className = 'product-card';
    
    // Auto WhatsApp Inquiry Link Generation
    const whatsappMsg = encodeURIComponent(`I am interested in ${name} listed at ${price}`);
    const whatsappUrl = `https://wa.me/923315172956?text=${whatsappMsg}`;

    newCard.innerHTML = `
        <div class="img-box">
            <img src="${imgUrl}" alt="${name}">
            <span class="badge">New Arrival</span>
        </div>
        <div class="card-info">
            <h3>${name}</h3>
            <p class="price">${price}</p>
            <a href="${whatsappUrl}" target="_blank" class="order-btn"><i class="fa-brands fa-whatsapp"></i> Order / Inquiry</a>
        </div>
    `;

    targetGrid.appendChild(newCard);
    
    this.reset();
    closeAdminPanel();
    alert('Product successfully published to live website catalog!');
});
