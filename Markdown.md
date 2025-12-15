# CineTrack - User Stories

## Overview
This document contains all 9 user stories for the CineTrack mobile application, a movie discovery and tracking platform.

---

## User Story 1: User Registration
**As a** new user  
**I want to** create an account with my name, email, and password  
**So that** I can access personalized movie recommendations and save my watchlist

### Acceptance Criteria:
- User can enter full name, email, and password
- Form validates email format
- Password must be at least 6 characters
- Password confirmation must match
- Error messages display for invalid inputs
- Successful registration navigates to home screen
- User data is saved locally

---

## User Story 2: User Login
**As a** registered user  
**I want to** log in with my email and password  
**So that** I can access my saved watchlist and preferences

### Acceptance Criteria:
- User can enter email and password
- Form validates credentials against stored data
- Error message displays for invalid credentials
- Successful login navigates to home screen
- User can navigate to signup from login screen
- Login state persists across app sessions

---

## User Story 3: Browse Trending Movies
**As a** user  
**I want to** see a list of trending movies on the home screen  
**So that** I can discover popular and current films

### Acceptance Criteria:
- Home screen displays grid of movie posters
- Each movie shows title and rating
- Movies are fetched from TMDB API
- Loading indicator displays while fetching
- Error handling for failed API calls
- Movies display in a scrollable grid layout
- Tapping a movie navigates to detail screen

---

## User Story 4: View Movie Details
**As a** user  
**I want to** view detailed information about a movie  
**So that** I can learn more before deciding to watch it

### Acceptance Criteria:
- Detail screen shows movie poster/backdrop
- Displays title, rating, release year, and language
- Shows full movie overview/description
- Displays additional details (popularity, vote count)
- Back button returns to home screen
- Can add movie to watchlist from detail screen
- Movie data persists when navigating between screens

---

## User Story 5: Manage Watchlist
**As a** user  
**I want to** add and remove movies from my watchlist  
**So that** I can keep track of movies I want to watch

### Acceptance Criteria:
- User can add movies to watchlist from detail screen
- User can remove movies from watchlist
- Watchlist count displays in menu
- Confirmation message shows when adding/removing
- Watchlist data persists locally
- Watchlist state updates immediately
- Visual indicator shows if movie is in watchlist

---

## User Story 6: Local Data Persistence
**As a** user  
**I want my** data to be saved locally on my device  
**So that** my watchlist and preferences are available even offline

### Acceptance Criteria:
- User account data persists after app closure
- Watchlist persists after app closure
- Settings persist after app closure
- Data loads automatically on app launch
- AsyncStorage used for data persistence
- No data loss between sessions
- All CRUD operations work correctly

---

## User Story 7: Access Settings Menu
**As a** user  
**I want to** access a settings menu from the home screen  
**So that** I can configure app preferences and notifications

### Acceptance Criteria:
- Menu icon visible in header
- Tapping menu icon opens menu overlay
- Menu displays all navigation options
- Menu includes: Home, Watchlist, Settings, Profile, Logout
- Tapping menu items navigates to respective screens
- Menu closes when tapping outside
- Menu displays watchlist count

---

## User Story 8: Configure Settings
**As a** user  
**I want to** configure app settings like notifications and preferences  
**So that** I can customize my app experience

### Acceptance Criteria:
- Settings screen accessible from menu
- Toggle switches for notification preferences
- Options for language selection
- Options for theme selection (Dark/Light mode)
- Account management options (Edit Profile, Change Password, Delete Account)
- Settings save automatically
- Settings persist across sessions
- Back button returns to previous screen

---

## User Story 9: Receive Notifications
**As a** user  
**I want to** receive notifications about new releases and recommendations  
**So that** I stay updated on movies I might enjoy

### Acceptance Criteria:
- App requests notification permissions on first launch
- Users can toggle notification preferences in settings
- Turning on "New Releases" triggers a test notification
- Turning on "Recommendations" triggers a test notification
- Notifications display with title and message
- Notification settings persist locally
- Users can enable/disable specific notification types
- App handles notification permissions gracefully

---

## Additional Notes
- All user stories are implemented using React Native
- External API: The Movie Database (TMDB) API
- Local storage: AsyncStorage
- Navigation: React Navigation
- Notifications: Expo Notifications
