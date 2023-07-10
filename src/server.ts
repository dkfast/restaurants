import express from "express";
import mongoose, { ConnectOptions } from 'mongoose';
import restaurantRoutes from './routes/restaurantRoutes';
import cors from 'cors';

const app = express();
const mongoURL = 'mongo db url';

app.use(express.json());
app.use(cors());

app.use('/api/restaurants', restaurantRoutes);

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
} as ConnectOptions)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(3001, () => {
      console.log('Server started on port 3001');
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
