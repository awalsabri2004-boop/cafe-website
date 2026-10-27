# ☕🚐 Nomad & Bean — Camper Cafe & Trail Outpost

A full-featured, responsive, interactive Camper Cafe website prototype designed with a warm, modern, and earthy outdoor aesthetic.

---

## 🌲 What's Built

1. **Hero & Live Coordinates Banner**:
   - Announcement bar featuring today's live trail stop and operating hours.
   - Hero banner with quick badge tags (Solar Rig, Wild Single-Origin, Weekly Roamer).
   - "On Location" live status card with distance and current daily special.

2. **Interactive Cafe Menu**:
   - Filterable tabs: *Signature Brews*, *Classic Espresso*, *Trail Bakery*, *Cold & Refreshing*.
   - Dietary & highlight tags (*House Favorite*, *Single Origin*, *Vegan*, *Gluten-Free*).
   - "Quick Add" to order.

3. **Camp Outpost (Online Merch & Coffee Beans Store)**:
   - Category filtering (*Roast Beans*, *Camp Gear*, *Apparel*).
   - Product cards with pricing, descriptions, and "Add to Rucksack" actions.

4. **Interactive Slide-Out Shopping Cart Drawer**:
   - Live badge counters on the navbar.
   - Dynamic item quantity adjustment (+/-) and removal.
   - **Free Shipping Tracker**: Real-time progress bar towards the $45 free trail delivery threshold.
   - Persistent storage in `localStorage`.

5. **Simulated Checkout Flow**:
   - Modal order review showing item count, free/paid shipping, and final total.
   - Form submission with instant toast alerts and cart reset.

6. **Camper Event Booking Dispatch**:
   - Inquire to reserve the 1974 vintage camper for weddings, trail races, and private retreats.
   - Interactive date picker, guest range selector, and animated success confirmation.

7. **Weekly Route & Schedule ("Find the Camper")**:
   - Highlights the current day with a glowing badge.
   - Location stops, trail markers, and weather notices.

---

## 🚀 How to Preview

You can open and test this immediately in any browser:

### Option A: Direct Open
Double-click [index.html](file:///C:/Users/User/.gemini/antigravity/scratch/camper-cafe/index.html) or right-click &rarr; *Open with Google Chrome / Edge*.

### Option B: Local Web Server (Recommended)
From PowerShell inside `C:\Users\User\.gemini\antigravity\scratch\camper-cafe`:

```powershell
# Using Python
python -m http.server 3000

# Or using npx
npx serve .
```
Then visit `http://localhost:3000`.

---

## 🛠️ Full-Stack Developer Next Steps: Connecting the Backend

This prototype currently manages data via `app.js`. When you are ready to expand this into a full-stack production application, here is how the frontend and backend connect:

### 1. Database Schema (e.g., PostgreSQL or SQLite)
- **`menu_items`**: `id`, `name`, `category`, `price`, `description`, `is_featured`, `is_available`
- **`products`**: `id`, `name`, `category`, `price`, `weight`, `image_url`, `stock_quantity`
- **`schedule`**: `id`, `day_of_week`, `date`, `location_name`, `address_notes`, `hours`, `is_active`
- **`bookings`**: `id`, `customer_name`, `email`, `event_type`, `guest_count`, `event_date`, `location`, `status`
- **`orders`**: `id`, `customer_email`, `items_json`, `subtotal`, `shipping_cost`, `total`, `payment_status`

### 2. REST API Endpoints to Build
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/menu` | Returns all available menu items |
| `GET` | `/api/products` | Returns shop items with current stock |
| `GET` | `/api/schedule/current` | Returns this week's active camper coordinates |
| `POST` | `/api/bookings` | Saves an event booking inquiry & triggers an email alert |
| `POST` | `/api/checkout` | Validates cart items, charges Stripe/card, creates order |

### 3. Frontend Fetch Replacement
In `app.js`, replace static constants with `fetch()` calls:
```javascript
// Example:
async function loadMenuFromBackend() {
  const response = await fetch('/api/menu');
  const data = await response.json();
  renderMenu(data);
}
```
