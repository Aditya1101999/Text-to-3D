import axios from 'axios';
import { config } from '../config';
import { improvePrompt } from './promptImprover';

export async function generate3D(prompt: string) {
    const refinedPrompt = await improvePrompt(prompt);  
    const payload = {
        key: config.stableApiKey,
        prompt: refinedPrompt, 
        guidance_scale: 20,
        steps: 50,
        frame_size: 256,
        output_type: "ply"
    };

    try {
        const response = await axios.post(config.stableApiEndpoint, payload, { headers: config.headers });
        return response;
    } catch (error) {
        throw new Error(`Failed to generate 3D model: ${(error as Error).message}`);
    }
}
