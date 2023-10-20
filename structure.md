# Definition

- An internal hotel managememnt web application.
- The users will be hotel employees.

# Requirements

- Main: Color-Mode.

- Authentication

  - A login process to login users & log-out button.
  - A signup process to register new users, the signup process will be applied from inside the application by a logged-in user, to make sure that the new user is a hotel employee.
  - Ability to set the profile info for each user (avatar, name & password).

- Dashboard as the home page

  - Displaying statistics (bookings, sales, check-ins & occupancy).
  - Data about guests arriving/daparting today and ability to check them in/out.
  - Charts about average nights & sales.

- Settings, Cabins, guests & Bookings
  - Database for each.
  - Displying these data in a table for each of them.
  - Abbility to set the main setting of the hotel and use them across the app.
  - Ability to filter & sort the tables & pagination for UX.
  - Ability to add new cabin, guest & booking.

# Routes

- Login. _Auth_
- Restricted Route:
  - _Return to Login_
  - _Root_:
    - _Navigate to Dashboard_.
    - Dashboard.
    - Bookings.
      - Bookings/:id.
      - checkin/:id
    - Guests.
    - Cabins.
    - Users (to register a new account). _Auth_
    - Settings (for hotel's main settings).
    - account (to change account data). _Auth_
- Page Not Found

# Phases

## Initiating

## Routing

- Installing react-router-dom.
- Creating the main routing with empty pages & simple functionality.

## Styling

- Installing style-components react-icons.
- Adding the golbal styles & dark mode.
- Adding the styles for each route (adding simple logic when required).

- _Noting_ that the components will be structured as following:
  - _ui_ folder containing:
    - _routes_ containing the main routes/pages.
    - _layout_ containing the components for the main layout (Root, header, sidebar & footer).
    - _general_ containing the components shared between different routes or other with logic.
    - _styled_ containing the pure styled components.
  - _features_ containing folder for each folder & each feature folder contain the related components.
