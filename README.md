# Sentimenta Frontend
This is the frontend application for [Sentimenta](https://github.com/agildw/sentimenta), a project that performs sentiment analysis on movie reviews. This project was built using Vite.

## Getting Started
To get started with this project, first clone the repository and navigate to the project directory:

```bash
git clone https://github.com/agildw/sentimenta-frontend.git
cd sentimenta-frontend
```
Then, install the dependencies using npm:
```bash
npm install
```
Setting up the API URL
Before you can run the project, you will need to set the `vITE_API_URL`environment variable. This variable specifies the URL for the Sentimenta API.

To set the `ViTE_API_URL`environment variable, create a file named `env`in the project root directory and add the following line:

```bash
VITE_API_URL=http://localhost:5000
```
Replace `http://localhost:5000` with the URL for your Sentimenta API.

## Running the Project
To run the project in development mode, use the following command:

```bash
npm run dev
```
This will start a development server at `http://localhost:5137`.

To build the project for production, use the following command:

```bash
npm run build
```

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.
