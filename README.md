# TrustRadius Reviews Page Mockup

A React mockup of the TrustRadius product reviews page, created for prototyping PM insights and user experiences.

## Overview

This project is a prototyping environment for the TrustRadius Product Management team. It recreates the Zoom Workplace reviews page to test new features and experiences.

## Tech Stack

- React 18
- Vite (for fast development)
- Vanilla CSS (component-scoped)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx/css           # Top navigation bar
│   ├── ProductHeader.jsx/css    # Product info with rating
│   ├── CommunityInsights.jsx/css # Pros/Cons tabs section
│   ├── ReviewCard.jsx/css       # Individual review display
│   └── ReviewsPage.jsx/css      # Main page layout
├── App.jsx/css
├── main.jsx
└── index.css
```

## Key Components

### Header
- Navigation menu
- Search bar
- Auth links (Login/Signup)

### ProductHeader
- Product logo and name
- Overall rating display
- CTA button

### CommunityInsights
- Tabbed interface (Pros/Cons)
- AI-generated insights summary

### ReviewCard
- Review title and rating
- Use cases
- Pros/Cons lists
- Reviewer information
- Badges (Vetted, Experience)

### ReviewsPage
- Main layout with sidebar
- Review sorting
- Pagination
- Mock data for 3 reviews

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit http://localhost:5173/ to view the mockup.

## Development

The mockup currently uses hardcoded mock data in `ReviewsPage.jsx`. To modify:

1. **Add/Edit Reviews**: Update the `mockReviews` array in `src/components/ReviewsPage.jsx:7`
2. **Change Insights**: Update `communityPros` and `communityCons` arrays
3. **Styling**: Each component has its own CSS file for easy customization

## Next Steps

- Add more page variations
- Integrate with API for dynamic data
- Add filtering and search functionality
- Create additional page mockups
