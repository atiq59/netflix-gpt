# Netflix GPT 🎬🤖

A modern, AI-powered movie discovery platform that combines Netflix-like browsing with intelligent GPT-driven search capabilities. Browse trending movies, get personalized recommendations, and search for movies using natural language powered by OpenRouter's API.

## 🌟 Key Features

- **AI-Powered Search**: Use natural language queries to find movies. The app uses GPT models to understand your preferences and recommend relevant movies.
- **Movie Discovery**: Browse now playing, popular, top-rated, and upcoming movies from TMDB.
- **User Authentication**: Secure login/signup with Firebase Authentication.
- **Responsive Design**: Fully responsive UI built with React and Tailwind CSS.
- **Real-time Data**: Fetch latest movie data from The Movie Database (TMDB) API.
- **State Management**: Redux for efficient state management across the application.

## 📊 Tech Stack

### Frontend Framework & UI
- **React 19.2.5** - Latest React for building interactive user interfaces
- **React DOM 19.2.5** - React package for DOM rendering
- **Tailwind CSS 4.2.4** - Utility-first CSS framework for responsive design
- **Lucide React 1.14.0** - Beautiful, consistent icon library

### AI & LLM Integration
- **OpenRouter SDK 0.12.35** - SDK for accessing multiple LLM providers (including GPT models)
- **OpenAI 6.37.0** - OpenAI API client for natural language processing

### State Management & Routing
- **Redux (@reduxjs/toolkit 2.11.2)** - Predictable state container
- **React Redux 9.2.0** - React bindings for Redux
- **React Router DOM 7.14.2** - Client-side routing for navigation

### Backend & Database
- **Firebase 12.12.1** - Backend-as-a-Service for authentication and real-time features

### Build Tools
- **Vite 8.0.10** - Lightning-fast build tool and dev server
- **@vitejs/plugin-react 6.0.1** - React plugin for Vite

### Development & Linting
- **ESLint 10.2.1** - Code quality and consistency
- **@eslint/js 10.0.1** - ESLint JavaScript plugin

## 🏗️ Project Structure

```
netflix-gpt/
├── src/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── body/              # Main body component
│   │   │   ├── browse/            # Movie browse page
│   │   │   ├── header/            # Navigation header
│   │   │   ├── login/             # Authentication page
│   │   │   ├── GptSearch/         # AI search interface
│   │   │   ├── GptSearchBar/      # Search input component
│   │   │   ├── GptSearchMovieSuggestion/  # AI suggestions
│   │   │   ├── MainContainer.js/  # Main content area
│   │   │   ├── MovieCard/         # Movie card component
│   │   │   ├── MovieList/         # Movie list component
│   │   │   ├── SecondaryContainer/ # Secondary content area
│   │   │   ├── VideoBackground/   # Background video
│   │   │   └── VideoTitle/        # Video title component
│   │   ├── routes/
│   │   │   ├── page.jsx          # Route configuration
│   │   │   ├── lazyPages.jsx     # Lazy-loaded page components
│   │   │   ├── routeHelpers.jsx  # Routing utilities
│   │   │   └── suspenseUtils.jsx # Suspense configuration
│   │
│   ├── hooks/
│   │   ├── useGptSearchMovies.js    # AI search hook
│   │   ├── useMovieTrailer.js       # Trailer fetching hook
│   │   ├── useNowPlayingMovies.js   # Now playing movies hook
│   │   ├── usePopularMovies.js      # Popular movies hook
│   │   ├── useTopRatedMovies.js     # Top-rated movies hook
│   │   └── useUpcommingMovies.js    # Upcoming movies hook
│   │
│   ├── utils/
│   │   ├── appStore.js              # Redux store configuration
│   │   ├── userSlice.js             # User state management
│   │   ├── moviesSlice.js           # Movies state management
│   │   ├── gptSlice.js              # GPT/AI state management
│   │   ├── configSlice.js           # App configuration
│   │   ├── constant.js              # Constants (APIs, configs)
│   │   ├── firebase.js              # Firebase configuration
│   │   ├── languageConstant.js      # Language translations
│   │   └── validate.js              # Form validation utilities
│   │
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # React entry point
│   ├── App.css                      # Global styles
│   └── index.css                    # Base styles
│
├── public/                          # Static assets
├── vite.config.js                   # Vite configuration
├── firebase.json                    # Firebase configuration
├── eslint.config.js                 # ESLint configuration
├── package.json                     # Dependencies and scripts
└── index.html                       # HTML entry point
```

## 🔍 How AI-Powered Search Works

The AI search feature is powered by the `useGptSearchMovies` hook:

1. **User Input**: User enters a natural language query (e.g., "movies about space adventure")
2. **GPT Processing**: The query is sent to OpenRouter/GPT API with a specific prompt asking for movie recommendations
3. **Movie Recommendation**: GPT analyzes the query and returns 5 movie names
4. **TMDB Lookup**: Each recommended movie is looked up in The Movie Database API
5. **Results Display**: Movie data (images, ratings, descriptions) is displayed in the UI

### Example Flow:
```
User: "I want a sci-fi thriller"
    ↓
OpenRouter GPT API: Analyzes and recommends movies
    ↓
Returns: "Inception, Interstellar, Tenet, The Matrix, Dune"
    ↓
TMDB API: Fetches detailed data for each movie
    ↓
UI: Displays movie cards with images, ratings, and info
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase project setup
- TMDB API key
- OpenRouter API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd netflix-gpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the `.env.example` file to `.env` and fill in your credentials:
   ```bash
   cp .env.example .env
   ```
   
   Then update the `.env` file with your actual API keys:
   - **Firebase**: Get from [Firebase Console](https://console.firebase.google.com/) → Project Settings
   - **OpenRouter**: Get from [OpenRouter.ai](https://openrouter.ai/) → API Keys
   - **TMDB**: Get from [The Movie Database](https://www.themoviedb.org/settings/api) → API Read Access Token
   
   Your `.env` file should look like:
   ```
   VITE_FIREBASE_API_KEY="your_firebase_api_key_here"
   VITE_FIREBASE_AUTH_DOMAIN="your_firebase_auth_domain_here"
   VITE_FIREBASE_PROJECT_ID="your_firebase_project_id_here"
   VITE_FIREBASE_STORAGE_BUCKET="your_firebase_storage_bucket_here"
   VITE_FIREBASE_MESSAGING_SENDER_ID="your_firebase_messaging_sender_id_here"
   VITE_FIREBASE_APP_ID="your_firebase_app_id_here"
   VITE_FIREBASE_MEASUREMENT_ID="your_firebase_measurement_id_here"
   VITE_OPENROUTER_API_KEY="your_openrouter_api_key_here"
   VITE_TMDB_KEY="Bearer your_tmdb_api_token_here"
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Lint Code
```bash
npm run lint
```

### Preview Production Build
```bash
npm run preview
```

## 📚 API Integration

### The Movie Database (TMDB)
- Provides movie data: titles, images, ratings, descriptions, release dates
- Multiple endpoints for different movie categories (now playing, popular, upcoming, top-rated)

### OpenRouter API
- Provides access to multiple LLM models (GPT, Claude, etc.)
- Processes natural language queries to recommend movies
- Returns movie suggestions based on user intent

### Firebase
- User authentication (sign up, login)
- User session management
- Optional: Real-time data storage

## 🎯 Main Components

### Pages
- **Body**: Main app container and layout
- **Browse**: Movie discovery and browsing interface
- **GptSearch**: AI-powered search interface
- **Login**: User authentication page
- **MainContainer**: Featured content area
- **SecondaryContainer**: Additional movie categories

### UI Components
- **MovieCard**: Individual movie card with image and info
- **MovieList**: List of movies in a carousel
- **VideoBackground**: Featured video background
- **VideoTitle**: Title and description overlay
- **GptSearchBar**: Search input interface

## 🔐 Authentication

The app uses Firebase Authentication for secure user management:
- Email/password signup and login
- Session persistence
- Logout functionality
- Protected routes

## 📱 Responsive Design

Built with Tailwind CSS, the app is fully responsive across:
- Desktop (1920px and above)
- Tablet (768px to 1920px)
- Mobile (320px to 768px)

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## 📧 Contact

For questions or support, please reach out to the project maintainers.

---

**Built with using React, AI, and modern web technologies**