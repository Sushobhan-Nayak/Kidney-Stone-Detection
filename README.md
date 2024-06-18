# Kidney Stone Detection

Welcome to the Kidney Stone Detection repository! This project aims to provide an efficient solution for detecting kidney stones using a Convolutional Neural Network (CNN). The repository is organized into three main folders: `server`, `model`, and `client`.

## Table of Contents

- [Overview](#overview)
- [Folders Structure](#folders-structure)
- [Model](#model)
- [Server](#server)
- [Client](#client)
- [How to Run](#how-to-run)
- [Contributing](#contributing)

## Overview

This project uses a CNN for training the model to detect kidney stones. The frontend of the application is built using Next.js and can be accessed [here](https://kidneystonedetect.vercel.app/). The backend is implemented using Flask.

## Folders Structure

- `server`: Contains the backend Flask server code.
- `model`: Contains the code and resources for training the CNN model.
- `client`: Contains the frontend Next.js application.

## Model

The `model` folder contains all the necessary scripts and resources for training the CNN model. This includes the dataset, preprocessing scripts, and training scripts.

## Server

The `server` folder contains the Flask server implementation. The server handles requests from the frontend, processes the images using the trained CNN model, and returns the prediction results.

## Client

The `client` folder contains the Next.js application which serves as the frontend for this project. It allows users to upload images and view the detection results.

## How to Run

### Prerequisites

- Python 3.10 or higher
- Node.js
- Flask
- Next.js

### Steps to Run

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/kidney-stone-detection.git
    cd kidney-stone-detection
    ```

2. **Setting up the Model:**

    Navigate to the `model` folder and follow the instructions to set up the model, including downloading any necessary datasets and dependencies.

3. **Running the Server:**

    Navigate to the `server` folder and run the Flask server:

    ```bash
    cd server
    pip install -r requirements.txt
    python app.py
    ```

4. **Running the Client:**

    Navigate to the `client` folder and run the Next.js application:

    ```bash
    cd client
    npm install
    npm run dev
    ```

5. **Accessing the Application:**

    Open your browser and go to `http://localhost:3000` to access the frontend. You can also access the deployed version [here](https://kidneystonedetect.vercel.app/).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any features, bug fixes, or enhancements.

---

Thank you for using Kidney Stone Detection! If you have any questions or need further assistance, feel free to open an issue in the repository.
