const express = require('express');
const router = express.Router();

const categories = [
  { id: 1, name: 'Takeaway Food Boxes', slug: 'takeaway-food-boxes', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop', count: 45 },
  { id: 2, name: 'Takeaway Food Trays', slug: 'food-trays', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', count: 32 },
  { id: 3, name: 'Burger & Clamshell Boxes', slug: 'clamshell-takeaway-boxes', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', count: 28 },
  { id: 4, name: 'Disposable Tableware', slug: 'disposable-tableware', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop', count: 56 },
  { id: 5, name: 'Round Bowls & Lids', slug: 'round-bowls-lids', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop', count: 22 },
  { id: 6, name: 'Soup Containers', slug: 'soup-containers', image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=300&fit=crop', count: 18 },
  { id: 7, name: 'Ice Cream Tubs', slug: 'ice-cream-tubs', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop', count: 15 },
  { id: 8, name: 'Noodle Boxes', slug: 'noodle-boxes', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', count: 12 },
  { id: 9, name: 'Plates & Bowls', slug: 'plates-bowls', image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=300&fit=crop', count: 38 },
  { id: 10, name: 'Hot Drink Cups', slug: 'hot-drink-cups', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop', count: 25 },
  { id: 11, name: 'Paper Carrier Bags', slug: 'bags-carriers', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop', count: 20 },
  { id: 12, name: 'Cutlery & Napkins', slug: 'cutlery-napkins', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', count: 30 }
];

const reviews = [
  { id: 1, name: 'James Wilson', rating: 5, text: 'Excellent quality packaging at unbeatable prices. Delivery was fast and the customer service team was incredibly helpful.', date: '2026-02-15' },
  { id: 2, name: 'Sarah Thompson', rating: 5, text: 'We switched to Propus for all our takeaway packaging needs. The quality is fantastic and the prices are the best we have found.', date: '2026-01-28' },
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

router.get('/categories', (req, res) => {
  res.json(categories);
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
