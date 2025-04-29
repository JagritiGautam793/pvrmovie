# PVRGO

A React Native mobile application for booking movie tickets and snacks at PVR Cinemas. Built with Expo, Redux, and Sanity CMS.

## Features

- Browse movies across different cities
- View movie showtimes and theater locations
- Select seats and book tickets
- Order food and beverages
- Secure payments via Razorpay integration
- User profile management

## Tech Stack

- React Native / Expo
- Redux Toolkit for state management
- React Navigation for routing
- Sanity.io for content management
- Razorpay for payments

## Prerequisites

- Node.js >= 14
- npm >= 6
- Expo CLI
- Android Studio / Xcode for emulators

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd pvrmovie
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

- Set up Sanity project ID and dataset
- Configure Razorpay API keys

4. Start the development server:

```bash
npm start
```

## Project Structure

```
pvrmovie/
  ├── assets/           # Images and static assets
  ├── components/       # Reusable React components
  ├── navigation/       # Navigation configuration
  ├── screens/         # Screen components
  ├── pvr/            # Sanity CMS configuration
  ├── App.js          # Root component
  ├── store.js        # Redux store configuration
  └── CartReducer.js  # Cart state management
```

## Key Features Implementation

### Movie Booking Flow

1. City selection
2. Movie selection
3. Theater and showtime selection
4. Seat selection
5. Food & beverage ordering
6. Payment processing
7. Ticket confirmation

### State Management

- Redux store for cart management
- Context API for location management

### Data Management

- Sanity.io CMS integration for:
  - Movies
  - Theaters
  - Showtimes
  - Locations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- PVR Cinemas for inspiration
- Razorpay for payment integration
- Sanity.io for content management
