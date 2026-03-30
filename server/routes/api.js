const express = require('express');
const router = express.Router();

const products = [
  {
    id: 1,
    name: "Burger Box",
    slug: "burger-box",
    image: "/assets/Ecotellus Web Images/Products/Burger Box/1.png",
    images: ["/assets/Ecotellus Web Images/Products/Burger Box/1.png", "/assets/Ecotellus Web Images/Products/Burger Box/2.png", "/assets/Ecotellus Web Images/Products/Burger Box/3.png", "/assets/Ecotellus Web Images/Products/Burger Box/4.png", "/assets/Ecotellus Web Images/Products/Burger Box/5.png", "/assets/Ecotellus Web Images/Products/Burger Box/6.png"],
    sizes: ["Small", "Medium", "Large", "XL", "XXL", "Custom"]
  },
  {
    id: 2,
    name: "Cup's Cap",
    slug: "cups-cap",
    image: "/assets/Ecotellus Web Images/Products/Cup's Cap/1.png",
    images: ["/assets/Ecotellus Web Images/Products/Cup's Cap/1.png", "/assets/Ecotellus Web Images/Products/Cup's Cap/2.png", "/assets/Ecotellus Web Images/Products/Cup's Cap/3.png", "/assets/Ecotellus Web Images/Products/Cup's Cap/4.png", "/assets/Ecotellus Web Images/Products/Cup's Cap/5.png"],
    sizes: ["Small", "Medium", "Large"]
  },
  {
    id: 3,
    name: "Double Wall Ripple Cup",
    slug: "double-wall-ripple-cup",
    image: "/assets/Ecotellus Web Images/Products/Double Wall Ripple Cup/1.png",
    images: ["/assets/Ecotellus Web Images/Products/Double Wall Ripple Cup/1.png", "/assets/Ecotellus Web Images/Products/Double Wall Ripple Cup/2.png", "/assets/Ecotellus Web Images/Products/Double Wall Ripple Cup/3.png", "/assets/Ecotellus Web Images/Products/Double Wall Ripple Cup/4.png", "/assets/Ecotellus Web Images/Products/Double Wall Ripple Cup/5.png", "/assets/Ecotellus Web Images/Products/Double Wall Ripple Cup/6.png", "/assets/Ecotellus Web Images/Products/Double Wall Ripple Cup/7.png", "/assets/Ecotellus Web Images/Products/Double Wall Ripple Cup/8.png", "/assets/Ecotellus Web Images/Products/Double Wall Ripple Cup/9.png"],
    sizes: ["4 oz", "8 oz", "12 oz", "16 oz", "20 oz", "24 oz", "32 oz", "44 oz", "50 oz"]
  },
  {
    id: 4,
    name: "Nacho's Trey",
    slug: "nachos-trey",
    image: "/assets/Ecotellus Web Images/Products/Nacho's Trey/1.png",
    images: ["/assets/Ecotellus Web Images/Products/Nacho's Trey/1.png", "/assets/Ecotellus Web Images/Products/Nacho's Trey/2.png", "/assets/Ecotellus Web Images/Products/Nacho's Trey/3.png", "/assets/Ecotellus Web Images/Products/Nacho's Trey/4.png", "/assets/Ecotellus Web Images/Products/Nacho's Trey/5.png", "/assets/Ecotellus Web Images/Products/Nacho's Trey/6.png", "/assets/Ecotellus Web Images/Products/Nacho's Trey/7.png"],
    sizes: ["Mini", "Small", "Regular", "Medium", "Large", "XL", "XXL"]
  },
  {
    id: 5,
    name: "Popcorn Tub - red",
    slug: "popcorn-tub-red",
    image: "/assets/Ecotellus Web Images/Products/Popcorm Tub - red/1.png",
    images: ["/assets/Ecotellus Web Images/Products/Popcorm Tub - red/1.png", "/assets/Ecotellus Web Images/Products/Popcorm Tub - red/2.png", "/assets/Ecotellus Web Images/Products/Popcorm Tub - red/3.png", "/assets/Ecotellus Web Images/Products/Popcorm Tub - red/4.png", "/assets/Ecotellus Web Images/Products/Popcorm Tub - red/5.png", "/assets/Ecotellus Web Images/Products/Popcorm Tub - red/6.png", "/assets/Ecotellus Web Images/Products/Popcorm Tub - red/7.png", "/assets/Ecotellus Web Images/Products/Popcorm Tub - red/8.png"],
    sizes: ["32 oz", "46 oz", "50 oz", "75 oz", "85 oz", "130 oz", "170 oz", "Custom"]
  },
  {
    id: 6,
    name: "Popcorn Tub - Long",
    slug: "popcorn-tub-long",
    image: "/assets/Ecotellus Web Images/Products/Popcorn Tub - Long/1.png",
    images: ["/assets/Ecotellus Web Images/Products/Popcorn Tub - Long/1.png", "/assets/Ecotellus Web Images/Products/Popcorn Tub - Long/2.png", "/assets/Ecotellus Web Images/Products/Popcorn Tub - Long/3.png", "/assets/Ecotellus Web Images/Products/Popcorn Tub - Long/4.png"],
    sizes: ["Small", "Medium", "Large", "Extra Large"]
  },
  {
    id: 7,
    name: "Popcorn Tub - yellow",
    slug: "popcorn-tub-yellow",
    image: "/assets/Ecotellus Web Images/Products/Popcorn Tub - yellow/1.png",
    images: ["/assets/Ecotellus Web Images/Products/Popcorn Tub - yellow/1.png", "/assets/Ecotellus Web Images/Products/Popcorn Tub - yellow/2.png", "/assets/Ecotellus Web Images/Products/Popcorn Tub - yellow/3.png", "/assets/Ecotellus Web Images/Products/Popcorn Tub - yellow/4.png", "/assets/Ecotellus Web Images/Products/Popcorn Tub - yellow/5.png", "/assets/Ecotellus Web Images/Products/Popcorn Tub - yellow/6.png"],
    sizes: ["32 oz", "46 oz", "50 oz", "75 oz", "130 oz", "170 oz"]
  },
  {
    id: 8,
    name: "Straws",
    slug: "straws",
    image: "/assets/Ecotellus Web Images/Products/Straws/1.webp",
    images: ["/assets/Ecotellus Web Images/Products/Straws/1.webp", "/assets/Ecotellus Web Images/Products/Straws/2.webp", "/assets/Ecotellus Web Images/Products/Straws/3.webp"],
    sizes: ["Standard", "Jumbo", "Boba"]
  }
];


const reviews = [
  { id: 1, name: 'James Wilson', rating: 5, text: 'ecotellus completely streamlined our packaging supply chain. The quality is flawless and lead times are deeply respected by their dedicated team. We reduced our packaging costs by 22% while upgrading to premium materials.', date: 'March 2026' },
  { id: 2, name: 'Sarah Thompson', rating: 5, text: 'We switched our entire EMEA packaging volume to ecotellus. Their structural engineering team helped us save 15% on dimensional shipping costs. The transition was seamless and professionally managed.', date: 'February 2026' },
  { id: 3, name: 'Michael Chen', rating: 4, text: 'Reliable high-volume production. Their FSC-certified options helped us meet our corporate sustainability goals well ahead of schedule. The food-grade quality is impeccable and consistent batch after batch.', date: 'January 2026' },
  { id: 4, name: 'Priya Sharma', rating: 5, text: 'The attention to detail in every single box is remarkable. We\'ve been working with ecotellus for three years now, and they consistently exceed expectations. Their prototyping speed is the best in the industry.', date: 'December 2025' },
  { id: 5, name: 'David Mueller', rating: 5, text: 'As a European distributor, I need packaging partners who understand compliance at every level. ecotellus delivers BRC-certified packaging with full traceability. An absolute game-changer for our operations.', date: 'November 2025' },
  { id: 6, name: 'Lisa Nakamura', rating: 4, text: 'The print quality on our retail packaging has never been better. The Pantone color matching is spot-on, and the structural integrity survived all our shipping tests. Highly recommended for premium brands.', date: 'October 2025' },
  { id: 7, name: 'Robert Klien', rating: 5, text: 'What impressed me most is their logistics integration. They don\'t just manufacture — they manage the entire supply chain from factory to our warehouses across four continents. Truly end-to-end.', date: 'September 2025' },
  { id: 8, name: 'Ananya Patel', rating: 5, text: 'For pharmaceutical packaging, there\'s zero room for error. ecotellus meets every FDA and EU regulation flawlessly. Their QA documentation is thorough and always audit-ready. Five stars without hesitation.', date: 'August 2025' },
  { id: 9, name: 'Thomas Berg', rating: 5, text: 'Switching to ecotellus was the best decision our procurement team made this year. Their sustainable packaging options align perfectly with our brand values and the cost-per-unit is extremely competitive.', date: 'July 2025' },
  { id: 10, name: 'Elena Rossi', rating: 5, text: 'The luxury finish on our rigid boxes is spectacular. ecotellus delivered a custom texture that reflects our high-end brand identity perfectly. Their craftmanship is unmatched in the industry.', date: 'June 2025' },
  { id: 11, name: 'Klaus Schmidt', rating: 5, text: 'Precision is key for automotive parts. The custom inserts ecotellus designed for us reduced transit damage to practically zero. Robust, reliable, and highly professional service.', date: 'May 2025' },
  { id: 12, name: 'Sophie Dubois', rating: 5, text: 'Their rapid prototyping allowed us to launch our seasonal collection two weeks ahead of schedule. The foil stamping turned out even better than the digital renders. Truly a world-class partner.', date: 'April 2025' }
];

const features = [
  { id: 1, title: 'Free UK Wide Delivery', description: 'Stock Orders Over £100', icon: 'truck' },
  { id: 2, title: 'Premium Support', description: 'Mon-Fri 9am - 5pm', icon: 'headset' },
  { id: 3, title: 'Next Working Day Delivery', description: 'Stock Orders by 1PM', icon: 'clock' },
  { id: 4, title: 'Always Low Prices', description: 'No Minimum Order', icon: 'tag' }
];

router.get('/products', (req, res) => {
  res.json(products);
});

router.get('/reviews', (req, res) => {
  res.json(reviews);
});

router.get('/features', (req, res) => {
  res.json(features);
});

router.post('/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });
  res.json({ message: 'Successfully subscribed to newsletter!' });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'All fields are required' });
  res.json({ message: 'Message sent successfully!' });
});

module.exports = router;
