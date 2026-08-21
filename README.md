# IOI Open-Source Explorer

## About

IOI Open-Source Explorer is a web application for discovering, browsing, and tracking open-source projects. Users can explore projects across various domains and difficulties, view detailed project information including technology stacks and project admins, bookmark projects of interest, and persist their saved list across sessions. The application is built as a Next.js app with a dark theme and responsive design.

## Features

- **Browse projects**: Browse through a curated collection of open-source projects across multiple domains and difficulty levels
- **Search**: Search for projects by name, technology, or description using the search bar
- **Filtering**: Filter projects by technology stack (Stack Filter) and track/topic (Track Filter)
- **Dynamic project details**: View comprehensive project details including skills, technologies, stars, difficulty, and beginner-friendly status via dynamic routing
- **Bookmark projects**: Save projects to a personal collection with a single click; bookmark state persists across browser sessions
- **Persistent saved projects**: Saved project list is stored in localStorage and remains available across reboots and sessions
- **Project admin information**: View project admin details including GitHub and LinkedIn profiles for each project

## Tech Stack

- **Next.js** — React framework with App Router
- **React** — UI library
- **JavaScript** — Client-side logic
- **CSS** — Tailwind CSS for styling
- **localStorage** — Persistent client-side storage for bookmarks

## Project Structure

```
ioi-open-source-explorer/
├── app/                    # Next.js App Router pages
│   ├── layout.js           # Root layout with metadata and Navbar
│   ├── page.js             # Homepage with stats, features, and CTA
│   ├── projects/           # Projects browsing page
│   └── saved/              # Saved/bookmarked projects page
├── components/             # Reusable UI components
│   ├── BookmarkButton.jsx  # Bookmark toggle with localStorage persistence
│   ├── Hero.jsx            # Hero section component
│   ├── Navbar.jsx          # Fixed navigation bar
│   ├── ProjectAdmin.jsx    # Project admin GitHub/LinkedIn info
│   ├── ProjectCard.jsx     # Individual project card component
│   ├── ProjectDetails.jsx  # Dynamic project detail page
│   ├── ProjectList.jsx     # Grid of project cards
│   ├── SearchBar.jsx       # Project search input
│   ├── StackFilter.jsx     # Technology stack filter buttons
│   └── TrackFilter.jsx     # Topic/track filter buttons
├── data/                   # Project data
│   └── projects.js         # Array of 40+ open-source projects with metadata
├── package.json            # Dependencies and scripts
└── tailwind.config.js      # Tailwind CSS configuration
```

### Key Components

- **ProjectCard** — Displays project name, domain, description, tech tags, difficulty, beginner badge, project admin, and bookmark button
- **ProjectDetails** — Full-page view with project metadata, technologies, skills required, and admin links
- **BookmarkButton** — Toggle button that saves/removes project IDs from localStorage
- **SearchBar** — Input field that triggers search callbacks
- **StackFilter** / **TrackFilter** — Filter buttons for narrowing down projects

## Getting Started

```bash
npm install
npm run dev
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app will also be available at `/projects` for browsing projects and `/saved` for viewing bookmarked projects.

## How It Works

### Search

The `SearchBar` component captures user input and calls the `onSearch` callback passed from the parent page. The search filters projects based on matching against project names, descriptions, and technology tags. The search value is displayed and a clear button appears when there is active text.

### Filters

- **Stack Filter** (`StackFilter` component): Filters projects by technology stack. Buttons represent unique technology stacks from the project data. Selecting a stack shows only projects containing that stack; "All" resets the filter.
- **Track Filter** (`TrackFilter` component): Filters projects by topic/track. Buttons represent distinct track labels from the project data. Selecting a track narrows the project list accordingly.

Filters can be combined — selecting both a stack and a track narrows results to projects matching both criteria.

### Dynamic Routes

Project details are rendered via the dynamic route `/projects/[id]`. When a user clicks "View full details" on a `ProjectCard`, they are navigated to the dynamic route which renders the `ProjectDetails` component with the corresponding project data. The dynamic route fetches the project by ID from the projects data file.

### Bookmarks

Bookmarking uses the browser's `localStorage` for persistence:

1. The `BookmarkButton` component maintains an `active` state that syncs with `localStorage` under the key `ioi-saved-projects`
2. When clicked, the button toggles the project ID in the saved array and stores the updated array in `localStorage`
3. The `Saved` page reads from `localStorage` on mount and subscribes to the `storage` event for cross-tab updates
4. Bookmarked project IDs are used to filter the full project list, showing only saved projects on the `/saved` page

### localStorage

The application uses `localStorage` with the key `ioi-saved-projects` to persist the user's bookmarked project IDs. The storage format is a JSON array of project ID strings. The `getSaved()` utility function (in `BookmarkButton.jsx`) handles reading from and writing to localStorage, with a check for `typeof window === 'undefined'` to support server-side rendering.

## Screenshots

![Homepage placeholder](placeholder-homepage.png)

![Projects browsing placeholder](placeholder-projects.png)

![Saved projects placeholder](placeholder-saved.png)

*Placeholders for screenshots — add actual screenshots as needed.*

## Live Demo

[Vercel Deployment URL placeholder]

## GitHub Repository

[GitHub Repository URL placeholder]

## What I Learned

- **Next.js App Router** — Leveraging the App Router paradigm for page routing, layout composition, and dynamic routes with `fetch` and `loading` UI
- **React components** — Building reusable, composable UI components with proper prop drilling and context-free state management
- **Props** — Passing data down through component hierarchies and handling callbacks for event propagation
- **useState** — Managing local component state for bookmark toggles, filter selections, and form inputs
- **Event handling** — Handling user interactions like form submissions, button clicks, and filter changes
- **map()** — Rendering project lists and tech tag arrays dynamically
- **filter()** — Filtering projects based on search queries, stack selections, and track selections
- **Dynamic routing** — Using file-system based routing with `[id]` segments for per-project detail pages
- **localStorage** — Persisting user bookmarks across browser sessions without a backend
- **Reusable components** — Structuring components for composition, separation of concerns, and maintainability