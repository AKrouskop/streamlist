# StreamList

StreamList is a responsive movie browsing web application developed as part of the Week 4 deliverables for the **INT 499 Information Technology Capstone Course** at the University of Arizona Global Campus.

This project allows users to search for movies using **The Movie Database (TMDB) API**, view detailed information, and manage a simple shopping cart simulation. The application showcases frontend development with **React**, **React Router**, and custom **CSS**, along with persistent cart data using `localStorage`.

---

## Features

- **Movie Search** – Search for titles using the TMDB API.
- **Movie Cards** – View results in clean, responsive cards with posters, summaries, and release dates.
- **Add to Cart** – Add any movie to a virtual cart with real-time updates.
- **Live Cart Badge** – A red badge on the cart icon reflects the number of selected movies.
- **Checkout Simulation** – Clear the cart with a success message on checkout.
- **AI-Assisted Refinement** – Code was reviewed and refined using CodeGPT inside Visual Studio Code.
- **Navigation** – Navigate between Home, Movies, Cart, and About pages via a styled navbar.
- **Persistence** – Cart items are saved across sessions using `localStorage`.

---

## Technologies Used

- **React** (Functional Components + Hooks)
- **React Router DOM**
- **Custom CSS**
- **TMDB API** (The Movie Database)
- **localStorage** (for cart persistence)
- **CodeGPT** (used for testing and improvement)
- **ScreenPal** (for demo recording)

---

## CodeGPT Integration

During Week 4, the application was tested and refined using **CodeGPT** inside Visual Studio Code. Suggestions included:

- Wrapping the TMDB API call in a `try/catch` block to handle errors
- Adding a loading state and error feedback for better user experience
- Cleaning up state initialization and removing redundant localStorage updates

These changes were reviewed, implemented, and tested to ensure functionality remained stable.

---

## About Page Content

The app includes an About page summarizing:
- The goal of the project
- Technologies used
- Course context (INT 499 Capstone)
- AI testing contributions

---

## Folder Structure

