import express from 'express';
import { faker } from '@faker-js/faker';
const app = express();
const PORT = 3001;

// Function to generate a single fake user
function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

// Define a route that returns an array of 10 fake users
app.get('/api/users', (_req, res) => {
  const users = Array.from({ length: 10 }, () => createRandomUser());
  res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
