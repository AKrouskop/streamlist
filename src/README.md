# StreamList – React Movie Search & Task App

Welcome to **StreamList**, a React-based web application developed for the INT 499 Capstone Project at the University of Arizona Global Campus. This app allows users to manage their streaming wish list while also searching for movies using live data from the TMDB API.

---

## Features Implemented (Weeks 1–3)

### Week 1: App Foundation
- Set up using **React Router** for page navigation.
- Created core pages:
  - Home (StreamList input)
  - Movies (now powered by TMDB API)
  - Cart
  - About
- Custom **Google Fonts icons** used for nav styling.
- StreamList form component accepts user input and logs it to the console.
- GitHub and ScreenPal video demo created.

### Week 2: Interactive Task List
- Added full task list functionality:
  - Add, edit, complete, and delete tasks.
  - Input clears after submission.
- State-driven list rendering using `useState`.
- Seamless component structure with icon-based task controls.
- Improved CSS layout and button interactivity.

### Week 3: API Integration + Data Persistence
- Replaced placeholder **Movies** page with a fully functional movie search interface using the **TMDB API**.
- Users can:
  - Search by movie title
  - View results with poster, title, release date, and overview
- Implemented **localStorage** to persist search results across page reloads.
- Added a **“Clear Results”** button to reset the search state.
- Displays a message when no results are found.
- Fully centered and polished UI using custom CSS.

---

## Tech Stack

- **React** (Create React App)
- **React Router DOM**
- **TMDB API** (The Movie Database)
- **JavaScript (ES6+)**
- **CSS (custom, no framework)**
- **localStorage**

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/streamlist.git
   cd streamlist