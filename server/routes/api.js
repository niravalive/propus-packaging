const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Popcorn Tube', slug: 'popcorn-tube', image: '/assets/products/popcorn-tube.png', sizes: ['32 oz', '46 oz', '50 oz', '75 oz', '130 oz', '170 oz'] },
  { id: 2, name: 'Single Wall Hot Cup', slug: 'single-wall-hot-cup', image: '/assets/products/single-wall-hot-cup.png', sizes: ['150 ml', '200 ml', '250 ml', '6 oz', '8 oz', '10 oz', '12 oz'] },
  { id: 3, name: 'Cold Cup', slug: 'cold-cup', image: '/assets/products/cold-cup.png', sizes: ['330 ml', '450 ml', '550 ml', '650 ml', '900 ml'] },
  { id: 4, name: 'Double wall Cup', slug: 'double-wall-cup', image: '/assets/products/double-wall-cup.png', sizes: ['8 oz', '10 oz', '12 oz', '16 oz'] },
  { id: 5, name: 'Ripple Cup', slug: 'ripple-cup', image: '/assets/products/ripple-cup.png', sizes: ['8 oz', '10 oz', '12 oz', '150 ml', '200 ml'] },
  { id: 6, name: 'Popcorn Pouch', slug: 'popcorn-pouch', image: '/assets/products/popcorn-pouch.png', sizes: ['30 g', '40 g', '60 g', '80 g'] },
  { id: 7, name: 'French Fries', slug: 'french-fries', image: '/assets/products/french-fries.png', sizes: ['Small', 'Medium', 'Large', 'Customize'] },
  { id: 8, name: "Paper Trey Nacho's Trey", slug: 'paper-trey-nachos-trey', image: '/assets/products/paper-trey-nachos-trey.png', sizes: ['4" x 4"', '4" x 6"', '8" x 8"', '4.5" x 2.5"', '5.5" x 5.5"'] },
  { id: 9, name: 'Pizza Box', slug: 'pizza-box', image: '/assets/products/pizza-box.png', sizes: ['Small', 'Medium', 'Large', 'Customize'] },
  { id: 10, name: 'Sandwich Box', slug: 'sandwich-box', image: '/assets/products/sandwich-box.png', sizes: ['Small', 'Medium', 'Large', 'Customize'] },
  { id: 11, name: 'Burger Box', slug: 'burger-box', image: '/assets/products/burger-box.png', sizes: ['Small', 'Medium', 'Large', 'Customize'] }
];


const reviews = [
  { id: 1, name: 'James Wilson', rating: 5, text: 'Excellent quality packaging at unbeatable prices. Delivery was fast and the customer service team was incredibly helpful.', date: '2026-02-15' },
  { id: 2, name: 'Sarah Thompson', rating: 5, text: 'We switched to Ecotellus for all our takeaway packaging needs. The quality is fantastic and the prices are the best we have found.', date: '2026-01-28' },
  { id: 3, name: 'Michael Chen', rating: 4, text: 'Great range of eco-friendly options. Our customers love the new biodegradable containers. Will definitely order again.', date: '2026-03-02' },
  { id: 4, name: 'Emma Roberts', rating: 5, text: 'The custom branding service transformed our business. Professional results and the team guided us through every step.', date: '2026-02-20' },
  { id: 5, name: 'David Patel', rating: 5, text: 'Been ordering for over 2 years now. Consistently great products, competitive pricing, and reliable next-day delivery.', date: '2026-01-10' },
  { id: 6, name: 'Lisa Morgan', rating: 4, text: 'Fantastic variety of products. Found everything we needed for our new restaurant. The website is easy to navigate too.', date: '2026-03-08' }
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
