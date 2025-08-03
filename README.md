# Chalne Do Frontend

A React-based synchronized music player application integrating Firebase authentication, global audio playback via `@splicemood/react-music-player`, and rich UI controls with Mantine.

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Credits](#credits)  

## Features

### User Authentication  
- **Firebase Authentication** for sign-in/sign-up  
- **Persistent user session** via Redux Toolkit (`userSlice`)  

### Global Audio Playback  
- **Integrated player** from `@splicemood/react-music-player`  
- **GlobalAudioPlayer** component for persistent playback controls  
- **Playlist support** with dynamic track switching  
- **Time display** formatted via custom hook (`secondsToMinutesAndSeconds`)  

### Keyboard & Hotkeys  
- **Play/Pause** (`Space`)  
- **Seek forward/back** (ArrowRight/ArrowLeft) by 5 s  
- **Volume up/down** (ArrowUp/ArrowDown) by 5%  
- **Next/Previous track** (Ctrl + ArrowRight/ArrowLeft)  
- **Loop** (`L`), **Shuffle** (`S`), **Mute** (`M`)  
- **HotKeys modal** listing all shortcuts  

### UI Layout & Components  
- **AppShell & Burger menu** for responsive sidebar  
- **Header** and **Layout** wrapper with Mantine  
- **Router** with lazy-loaded FullSync page and 404 fallback (`NothingFoundBackground`)  
- **IconButton** and **PlayButton** wrappers with Mantine icons  
- **Illustration** and **Loader** styles for UX polish  

### State Management & Utilities  
- **Redux Toolkit** store configuration (`appStore`)  
- **User slice** for authentication state  
- **Firebase config** in `firebase.js`  
- **Validation utilities** (`validate.js`) for email/password  
- **Constants** for volume/time steps and default assets  

## Tech Stack

- React 19.x  
- Mantine UI & Hooks  
- Redux Toolkit & React-Redux  
- Firebase Authentication  
- @splicemood/react-music-player  
- React Router (HashRouter)  
- Vite or Parcel (per project config)  
- Tailwind/PostCSS (via PostCSS config)  

## Getting Started

1. **Clone the repository**

   ```
   git clone https://github.com/bharatsinghani4/chalne-do-frontend.git
   cd chalne-do-frontend
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Start development server**

   ```
   npm start
   ```

4. **Build for production**

   ```
   npm run build
   ```

## Credits

Built by **Bharat Singhani**, integrating a global synchronized music player with keyboard shortcuts, Firebase auth, and Mantine-powered UI.  
