const mongoUri = "mongodb+srv://ctoledo12:M0y1WOHW7zfyQBPr@cluster0.jmaxege.mongodb.net/?retryWrites=true&w=majority";

const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI || mongoUri||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
    (process.env.MONGO_PORT || '27017') +
    '/mernproject' 
    }
    export default config
    