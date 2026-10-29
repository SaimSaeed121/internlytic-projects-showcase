# Internlytic Projects Showcase

A responsive project gallery designed to showcase projects created by interns.

## Features

- Responsive layout for desktop, tablet, and mobile
- Search projects by title or intern name
- Filter projects by category
- Project cards with screenshots and descriptions
- GitHub and live project links
- Empty search results state
- Internlytic brand-inspired color palette

## Technologies Used

- React
- Vite
- JavaScript
- CSS

## Brand Colors

- Teal: #18B59A
- Deep Blue-Green: #073A40
- White: #FFFFFF
- Light Background: #EAF7F4

## Run Locally

1. Install Node.js.
2. Clone or download this repository.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal.

## Future Supabase Integration

Supabase may be used to retrieve approved public projects.

Security requirements:
- Display only projects approved for public viewing.
- Never expose service-role keys or private credentials in frontend code.
- Store secrets in environment variables on a trusted server.
- Apply appropriate database access policies.
- Validate project URLs and displayed data.
- Do not publish private intern information.

## Important

The current project cards use sample data and placeholder links.
Replace these with verified project information and working URLs before submission.