# Memoir - Image Sharing Platform

## Overview
A MERN-stack image sharing platform inspired by Pexels, built with React (Create React App). This is the frontend client that demonstrates real-world API consumption, authentication, media uploads, and user-controlled content sharing.

## Project Architecture
- **Framework**: React 18 with Create React App
- **Routing**: react-router-dom v6
- **State Management**: React Context API (AuthContext, GlobalContext)
- **External APIs**: Pexels API for curated photos, external backend for auth
- **Build Tool**: react-scripts (CRA)

## Project Structure
```
src/
  App.js          - Main app with route definitions
  index.js        - Entry point with AuthProvider wrapper
  App.css         - Global styles
  index.css       - Base styles
  components/
    Navbar.js     - Navigation bar with auth-aware UI
    Collection.js - Collection display component
  contexts/
    AuthContext.js - Authentication state management
  pages/
    Home.js       - Homepage with Pexels curated photos
    Login.js      - Login page
    Register.js   - Registration page
    Profile.js    - User profile page
    Upload.js     - Image upload page
    Community.js  - Community challenges section
    Anime.js      - Anime challenge page
    Challenge.js  - Challenge page
    Complete.js   - Image completion page
    Admin.js      - Admin page
    Loading.js    - Loading state page
  GlobalContext.js - Global context definition
public/
  index.html      - HTML template
  image.svg       - Logo/image asset
```

## Environment Variables
- `PORT=5000` - Dev server port
- `HOST=0.0.0.0` - Dev server host
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` - Allow proxy access
- `WDS_SOCKET_PORT=0` - WebSocket port for HMR
- `REACT_APP_API_URL` - Backend API URL (optional, defaults to external Render URL)
- `REACT_APP_PEXELS_API_KEY` - Pexels API key for photo fetching

## Development
- Run: `npm start` (port 5000)
- Build: `npm run build` (output to `build/`)

## Deployment
- Static deployment using the `build` directory
