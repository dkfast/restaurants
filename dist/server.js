"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const restaurantRoutes_1 = __importDefault(require("./routes/restaurantRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const mongoURL = 'mongodb+srv://Cluster41875:7Zm!rn2gChGkf.Z@cluster41875.i73xxoy.mongodb.net/sample_restaurants?retryWrites=true&w=majority';
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/restaurants', restaurantRoutes_1.default);
mongoose_1.default.connect(mongoURL, {
    useUnifiedTopology: true,
})
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
})
    .catch((error) => {
    console.error("Error connecting to MongoDB", error);
});
