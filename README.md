# surf-camps-travel-booking-community-platform

A travel booking and community platform for surf camps, featuring user registration, profile management, surf camp listings, destination details, package inclusions, reviews, and booking management.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js/Express + Prisma
- **Design**: Figma ([View Design](https://www.figma.com/design/iDPu9k4ToTRIUNbmTPW4VF/Free-Website-Template-%7C-Surf-Camps---Travel-Booking-Agency--Community-?node-id=388-8389&t=yZyHMzNDjHCHPP2m-1))

## Project Structure

```
surf-camps-travel-booking-community-platform/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- user registration
- profile management
- surf camp listings
- destination details
- package inclusions
- reviews
- booking management

## API Endpoints

- `POST /api/register` - Register a new user
- `GET /api/profile` - Get the current user's profile information
- `GET /api/surf-camps` - Get a list of surf camp listings
- `GET /api/surf-camps/:id` - Get a specific surf camp listing by ID
- `POST /api/bookings` - Create a new booking
- `GET /api/reviews` - Get a list of reviews for a surf camp

## License

MIT
