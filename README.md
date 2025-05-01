MERN Stack Portfolio Website Overview
Live Demo : https://new-portfolio-sage-three.vercel.app/
This portfolio website is designed using the MERN stack (MongoDB, Express, React/Next.js, Node.js) with TypeScript and styled using Tailwind CSS. It provides a seamless user experience while showcasing your skills, projects, and blogs. The website is deployed on Vercel for high performance and scalability. It includes both public pages accessible to all visitors and a secure dashboard for authenticated users to manage content.

1. Public Pages (Accessible to All Users)
✅ Home Page (/**)
Introduction Section: Displays your name, bio, and profile picture, giving visitors a quick overview of who you are.
Skills Section: Showcases your skills using visually appealing icons or a dynamic skill bar, highlighting your technical abilities.
Featured Projects: Highlights a selection of notable projects. These can be statically defined or dynamically fetched from a backend API.
Resume Download Button: A button that allows users to download your resume in PDF format.
✅ Projects Page (/projects)
Project Listings: Displays a list of all your projects with images, brief descriptions, and links.
Dynamic Project Details Page: Clicking on a project opens a detailed view at /projects/[id], showcasing comprehensive information, including:
Project title and description
Live link and source code link
Tech stack used
Image gallery (if applicable)
✅ Blog Page (/blog)
Blog Overview: Displays a list of blog posts fetched from an API or a JSON file. Each post includes a title, short description, thumbnail image, and category tags.
Dynamic Blog Details Page: Clicking on a blog post navigates to /blog/[id], showing:
Full blog content with images and formatted text
Author details and publication date
Related posts suggestions
✅ Contact Page (/contact)
Contact Form: A simple form with fields for name, email, and message.
Message Storage: Saves messages in local storage or a connected database for review in the dashboard.
Confirmation Notification: Displays a success message once a message is submitted successfully.
2. Dashboard (Only for Logged-in Users)
✅ Login (/dashboard)
Social Login: Implemented using Next Auth, allowing users to log in securely with social accounts like Google or GitHub.
Protected Routes: Only authenticated users can access the dashboard. Unauthorized users are redirected to the login page.
✅ Blog Management (/dashboard/blogs)
Create Blog Post: A form to create new blog posts with the following fields:
Title
Content (with rich text editor)
Image upload
Category selection
Edit/Delete Blog Posts: Update or delete existing blog posts.
List of Blog Posts: View all blog posts in a table format with options to edit or delete.
✅ Project Management (/dashboard/projects)
CRUD Operations: Full Create, Read, Update, Delete functionality for managing projects.
Project Form Fields: Includes:
Project Title
Description
Live Link and Source Code Link
Tech Stack Tags
Image Upload for project thumbnails
Project List: Displays all projects with options to edit or delete.
✅ Message Management (/dashboard/messages)
View Messages: Displays messages submitted from the Contact Page.
Message Details: Shows the sender's name, email, and the message content.
Delete Messages: Option to delete messages after reviewing.
3. Technical Requirements
✅ Frontend
Framework: Next.js with TypeScript for type safety and better development experience.
Styling: Tailwind CSS for rapid and responsive UI design.
Dynamic Routes: Implemented for project and blog detail pages (/projects/[id], /blog/[id]).
✅ Backend
Framework: Node.js with Express for building the backend API.
API Functionality: Manages CRUD operations for Blog, Project, and Messages.
Public API Access: The backend API is accessible publicly for fetching data on the frontend.
✅ Database
Database: MongoDB is used to store:
Projects data (title, description, links, images, tech stack)
Blogs data (title, content, image, category)
Contact messages (name, email, message)
ORM: Mongoose is used for schema definition and database interaction.
✅ Authentication
Social Login: Implemented using Next Auth, supporting social logins like Google or GitHub.
Session Management: Secure session management for authenticated users accessing the dashboard.
✅ Deployment
Platform: Deployed on Vercel for fast performance, seamless integration with Next.js, and global CDN support.
Environment Variables: Managed securely for MongoDB connection, Next Auth credentials, and other API keys.
4. Features Summary
Responsive Design: Fully responsive UI for a seamless experience across devices.
Dynamic Routing: Dynamic routes for project and blog details, improving SEO and user experience.
User Authentication: Secure social login with protected dashboard routes.
Admin Dashboard: Comprehensive dashboard for managing blogs, projects, and contact messages.
Content Management: Easy-to-use CMS-like interface for creating and editing content.
API Integration: Robust backend API for data management, with frontend integration using Axios or Fetch API.
This portfolio website not only showcases your skills and projects but also provides a powerful admin dashboard for content management, making it a perfect choice for developers looking to build a professional and interactive online presence.
