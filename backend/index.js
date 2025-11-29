const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

app.use(express.json());

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { username, email, password: hashedPassword } });
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, user });
});

app.get('/api/profile', authenticate, async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user.userId } });
  res.json(user);
});

app.get('/api/surf-camps', async (req, res) => {
  const surfCamps = await prisma.surfCamp.findMany();
  res.json(surfCamps);
});

app.get('/api/surf-camps/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const surfCamp = await prisma.surfCamp.findUnique({ where: { id } });
  res.json(surfCamp);
});

app.post('/api/bookings', authenticate, async (req, res) => {
  const { surfCampId, packageId, startDate, endDate } = req.body;
  const booking = await prisma.booking.create({ data: { surfCampId, packageId, startDate, endDate, userId: req.user.userId } });
  res.json(booking);
});

app.get('/api/reviews', async (req, res) => {
  const surfCampId = parseInt(req.query.surfCampId);
  const reviews = await prisma.review.findMany({ where: { surfCampId } });
  res.json(reviews);
});

function authenticate(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token' });
  }
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});