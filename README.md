# Render3D - Text to 3D Converter

Render3D is an AI-powered platform that converts textual descriptions into 3D models using generative models. It allows users to generate 3D prototypes from textual prompts and interact with them in a Three.js-based interface. This platform leverages the Stable Diffusion-v1 API to create the 3D models and integrates authentication via Google and GitHub.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Client-side Code](#client-side-code)
- [Server-side Code](#server-side-code)
- [Services](#services)
- [Prompt Improvement](#prompt-improvement)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Text to 3D Conversion**: Convert any textual description into a 3D model using Stable Diffusion-v1.
- **Authentication**: Sign up and log in using Google or GitHub via NextAuth.
- **3D Model Interaction**: View and interact with generated 3D models using Three.js.
- **AI-Powered Prompt Improvement**: The system improves input prompts using Google Gemini API for better results.
- **Seamless Experience**: No need for account creation or signups—just use the free plan to start generating 3D models immediately.

## Technologies Used

- **Frontend**: Next.js, React, TailwindCSS, Three.js
- **Backend**: Express.js, Prisma, Axios
- **Authentication**: NextAuth (Google, GitHub)
- **AI Models**: Stable Diffusion-v1 API, Google Gemini AI
- **Database**: Prisma ORM with SQLite (or PostgreSQL, depending on environment)
- **API**: RESTful API to interact with the model and store prompts

## Folder Structure

```
.
├── client
│   ├── api                 # Handles authentication and API requests
│   ├── components          # Reusable UI components
│   ├── pages               # Pages for the front-end views
│   └── globals.css         # TailwindCSS and other global styles
├── server
│   ├── api                 # Handles API routes for 3D generation and saving prompts
│   ├── services            # Core logic for generating and saving 3D models
│   ├── db                  # Database models and Prisma client
│   └── config              # Configuration files (e.g., API keys)
└── .env                     # Environment variables (API keys, DB config, etc.)
```

### Important Files:

- **client/api**: Handles API requests and authentication (Google and GitHub via NextAuth).
- **client/pages/generate/page.tsx**: The main page for generating 3D models with a step-by-step guide.
- **client/pages/main/page.tsx**: The homepage introducing the Render3D platform.
- **server/api/route.ts**: Backend API for generating and saving 3D models.
- **server/services/generate3d.ts**: Handles communication with the Stable Diffusion API to generate 3D models.
- **server/services/promptService.ts**: Saves and retrieves generated prompts from the database.

## Setup Instructions

To run both the backend and frontend separately, follow the instructions below.

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Aditya1101999/Text-to-3D.git
    cd Text-to-3D
    ```

2. **Install dependencies for both backend and frontend**:
    Navigate to the `server` folder first, and then the `client` folder.

    - For the backend:
    ```bash
    cd server
    npm install
    ```

    - For the frontend:
    ```bash
    cd ../client
    npm install
    ```

3. **Configure environment variables**:

    - **Server-side `.env`**:
      Create a `.env` file in the `server` folder and add the following variables:
      ```env
      STABLE_API_KEY=your_stable_api_key
      GEMINI_API_KEY=your_gemini_api_key
      STABLE_API_ENDPOINT=https://stablediffusionapi.com/api/v3/txt_to_3d
      DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/YOUR_DB_NAME"
      ```

    - **Client-side `.env`**:
      Create a `.env` file in the `client` folder and add the following variables:
      ```env
      GITHUB_ID="YOUR_GITHUB_ID"
      GITHUB_SECRET="YOUR_GITHUB_SECRET"
      GOOGLE_ID="YOUR_GOOGLE_ID"
      GOOGLE_SECRET="YOUR_GOOGLE_SECRET"
      NEXT_PUBLIC_API_URL="YOUR_BACKEND_URL"
      ```

    - Replace the placeholders with your actual keys and URL.

4. **Build the backend**:
    Before starting the backend, you need to build the TypeScript code to JavaScript. Run the following command inside the `server` folder:
    ```bash
    npm run build
    ```
    This will generate the JavaScript files in the `dist` folder.

5. **Start the backend**:
    After building the backend, start the backend server using:
    ```bash
    npm start
    ```

6. **Start the frontend**:
    Go to the `client` folder and run:
    ```bash
    npm run dev
    ```

    The application will be running on `http://localhost:3000`.

## Usage

1. **Access the platform**: Open your browser and go to `http://localhost:3000`.
2. **Generate 3D models**:
    - No account needed to start.
    - Select the generation model (Stable Diffusion-v1).
    - Enter a textual description of the 3D object you want to create.
    - The system will process your query and generate a 3D model based on your prompt.

## API Documentation

The backend provides RESTful APIs to interact with the 3D model generation process and save the prompts.

- **POST `/api/generate`**: Generate a 3D model based on the provided prompt.
- **POST `/api/auth/login`**: Handle login with Google or GitHub via NextAuth.

## Client-side Code

The frontend is built using Next.js, and it communicates with the backend to trigger 3D model generation.

- **Client-side authentication**: Handled via NextAuth, allowing users to sign in with Google or GitHub.
- **UI components**: The user can input a textual prompt, trigger 3D generation, and view the 3D model.
- **Three.js**: Used for rendering and interacting with the 3D models generated by the backend.

## Server-side Code

The backend handles API requests and interacts with the Stable Diffusion API for 3D model generation.

- **Generate3D service**: Communicates with the Stable Diffusion API to generate 3D models based on the provided prompt.
- **Prompt service**: Saves and retrieves prompts from the database, using Prisma ORM.

## Services

The server includes various services that handle key operations:

- **generate3d.ts**: Communicates with the Stable Diffusion API to generate the 3D models.
- **promptService.ts**: Saves and retrieves prompts from the database.

## Prompt Improvement

The platform uses the Google Gemini API to enhance the input prompts for better 3D model generation results.

## Contributing

Contributions are welcome! Feel free to submit pull requests, open issues, or suggest improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
