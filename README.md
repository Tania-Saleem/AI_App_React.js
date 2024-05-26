# AI Image Generator

An AI-powered image generator application built with React. This app allows users to generate images based on text prompts.

## Features

- Generates images based on user input text prompts
- Displays a loading animation while fetching the image
- Simple and user-friendly UI

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your computer.

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### Installing

1. Clone the repository to your local machine.

```sh
git clone https://github.com/Tania-Saleem/ai-image-generator.git
const response = await fetch(
    "add your open ai link here",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "add your open ai key here",
            "User-Agent": "Chrome",
        },
        body: JSON.stringify({
            prompt: inputRef.current.value,
            n: 1,
            size: "512x512",
        }),
    }
);
