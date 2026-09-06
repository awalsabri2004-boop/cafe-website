// Elemen HTML
const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.btn-add');
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotalPriceElement = document.getElementById('cart-total-price');

// Array untuk simpan senarai barang
let cart = [];

// 1. Fungsi Tambah Barang ke Cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Ambil maklumat dari kad produk
        const productCard = e.target.parentElement;
        const title = productCard.querySelector('h3').textContent;
        const priceText = productCard.querySelector('.price').textContent;
        const price = parseFloat(priceText.replace('RM ', ''));

        // Masukkan objek barang ke dalam array
        cart.push({ title, price });

        // Update paparan
        updateCartUI();

        // Kesan visual pada butang
        button.textContent = 'Added! ✓';
        button.style.backgroundColor = '#16a34a';
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '#0284c7';
        }, 1200);
    });
});

// 2. Fungsi Kemaskini Senarai Dalam Cart
function updateCartUI() {
    // Kemaskini jumlah item di header
    cartCountElement.textContent = cart.length;

    // Bersihkan senarai lama
    cartItemsList.innerHTML = '';
    
    let total = 0;

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>Cart anda masih kosong.</li>';
    } else {
        cart.forEach((item) => {
            total += item.price;
            const li = document.createElement('li');
            li.innerHTML = `<span>${item.title}</span> <strong>RM ${item.price.toFixed(2)}</strong>`;
            cartItemsList.appendChild(li);
        });
    }

    // Kemaskini jumlah harga
    cartTotalPriceElement.textContent = total.toFixed(2);
}

// 3. Fungsi Buka & Tutup Modal
cartButton.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Tutup modal jika klik di luar kotak
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});