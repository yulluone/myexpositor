# Expositor's Bible Web App

This web app is a digital version of the Expositor's Study Bible, transformed from PDF to a dynamic Next.js application. It allows users to explore and read Bible verses along with explanations.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Build Process](#build-process)
- [Contributing](#contributing)
- [Get in Touch](#get-in-touch)
- [License](#license)

## Introduction

The Expositor's Bible Web App is an interactive platform that brings the richness of the Expositor's Study Bible to digital users. This project started by transforming a PDF version of the Bible into JSX components using Python for parsing.

## Features

- Browse and read Bible verses.
- Access detailed explanations for each verse.
- Navigate through different books seamlessly.

## Getting Started

To run this project locally, follow these steps:

1. **Clone this repository:**

   ```bash
   git clone https://github.com/yulluone/myexpositor.git
   ```

2. **cd into project**
   ```bash
   cd myexpositor
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run Project**
   ```bash
   npm run dev
   ```
5. **Open your browser and visit** [http://localhost:3000](http://localhost:3000).

   ## Build Process

The transformation from PDF to JSX components involved the following steps:

1. **PDF to Text Conversion:**
   - Used Python libraries to convert PDF pages to plain text.

2. **Text Processing:**
   - Parsed the text to extract relevant information like book names, chapter numbers, verses, and explanations.

3. **JSX Component Generation:**
   - Dynamically generated JSX components for each chapter and verse.

4. **Integration with Next.js:**
   - Integrated the generated JSX components into a Next.js application for a seamless web experience.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Get in Touch

For inquiries or more information, please contact us at:

- **Email:** [yulluone@outlook.com](mailto:yulluone@outlook.com)
- **Twitter:** [@yulluone](https://twitter.com/yulluone)

## License

This project is licensed under the MIT License

