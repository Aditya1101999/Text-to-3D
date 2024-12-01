import dotenv from 'dotenv';

dotenv.config();

export const config = {
    stableApiKey: process.env.STABLE_API_KEY || '',
    stableApiEndpoint: process.env.STABLE_API_ENDPOINT || '',
    geminiApiKey: process.env.GEMINI_API_KEY || '',
    headers: {
        'Content-Type': 'application/json'
    }
};
