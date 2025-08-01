# Wedding Congratulations Website

## Overview

This is a wedding congratulations website built for Liza and Mark's wedding celebration. The application displays personalized video messages and congratulations from friends and family. It features an elegant, wedding-themed interface with floating hearts animation, modal dialogs for video messages, and a romantic color scheme using soft pinks, champagne, and gold tones.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The application uses a modern React-based frontend stack:

- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **Tailwind CSS** for utility-first styling with custom wedding theme colors
- **shadcn/ui** component library for consistent, accessible UI components built on Radix UI primitives

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/` (home, not-found)
- Reusable UI components in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Utility functions in `client/src/lib/`

### Backend Architecture

The backend uses Node.js with Express.js in a minimal REST API configuration:

- **Express.js** server with TypeScript for type safety
- **ESM modules** (ES6 imports/exports) throughout the codebase
- Modular route registration system in `server/routes.ts`
- Abstract storage interface pattern for data persistence
- Currently implements in-memory storage with `MemStorage` class
- Development middleware for request logging and error handling

### Data Storage Solutions

The application implements a storage abstraction pattern:

- **Interface-based design**: `IStorage` interface defines CRUD operations
- **Current implementation**: In-memory storage using Map data structures
- **Database ready**: Drizzle ORM configured for PostgreSQL with Neon Database
- **Schema definition**: User schema defined in `shared/schema.ts` using Drizzle and Zod
- **Migration support**: Drizzle migrations configured in `drizzle.config.ts`

### Authentication and Authorization

Basic user management structure is in place:
- User schema with username/password fields
- Password storage (currently plain text - needs hashing implementation)
- Session management prepared but not yet implemented
- Ready for integration with authentication middleware

### State Management

- **TanStack Query (React Query)** for server state management and API calls
- Custom query client configuration with error handling
- Local component state using React hooks
- Toast notifications for user feedback using shadcn/ui toast system

### Development and Build Tools

- **TypeScript** with strict configuration for type safety
- **ESBuild** for fast production builds
- **PostCSS** with Autoprefixer for CSS processing
- **Vite plugins** for development enhancements including runtime error overlay
- **Path aliases** configured for clean imports (@/, @shared/, @assets/)

### Styling and Theming

- **Custom CSS variables** for wedding theme colors (wedding-pink, champagne, rose, gold)
- **Dark mode support** with CSS variable overrides
- **Responsive design** with mobile-first approach
- **Custom animations** for floating hearts and other interactive elements

## External Dependencies

### Database Services
- **Neon Database** (@neondatabase/serverless) - Serverless PostgreSQL hosting
- **Drizzle ORM** - Type-safe database operations and schema management
- **connect-pg-simple** - PostgreSQL session store for Express sessions

### UI and Component Libraries
- **Radix UI** - Comprehensive set of accessible, unstyled UI primitives
- **shadcn/ui** - Pre-built components using Radix UI with Tailwind styling
- **Lucide React** - Icon library for consistent iconography
- **class-variance-authority** - Utility for creating component variants
- **clsx & tailwind-merge** - Conditional className utilities

### Data Fetching and Validation
- **TanStack React Query** - Server state management and caching
- **Zod** - Schema validation and type inference
- **React Hook Form** with resolvers for form state management

### Development Tools
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development enhancements
- **tsx** - TypeScript execution for Node.js development server

### Build and Deployment
- **Vite** - Frontend build tool and development server
- **ESBuild** - Backend bundling for production deployment
- **PostCSS & Autoprefixer** - CSS processing pipeline

### Utility Libraries
- **date-fns** - Date manipulation and formatting
- **nanoid** - Unique ID generation
- **embla-carousel-react** - Carousel/slider component functionality