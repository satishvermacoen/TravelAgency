# Travel Agency Website

![Logo](public/logo.png)

Welcome to the official repository for the Travel Agency website, a modern, fast, and scalable web application built with Next.js and TypeScript. This platform allows users to browse, discover, and inquire about domestic and international tour packages.

## ✨ Features

* **Dynamic Package & Destination Pages:** Server-side rendered pages for individual tour packages and destinations for optimal SEO and performance (`/packages/[slug]` and `/destinations/[slug]`).
* **Interactive UI:** Smooth animations and transitions powered by Framer Motion.
* **Responsive Design:** Fully responsive layout for seamless viewing on desktops, tablets, and mobile devices, built with Tailwind CSS.
* **Static Content Pages:** Informational pages like About Us, Contact, FAQ, and Terms & Conditions.
* **API Endpoints:** Serverless functions to handle contact form submissions and special offer requests.
* **Component-Based Architecture:** A clean and organized codebase with reusable React components.
* **Centralized Data Management:** A simulated data service layer (`lib/data.ts`) that makes it easy to switch to a headless CMS in the future.

## 🛠️ Tech Stack

This project is built with a modern technology stack to ensure performance, scalability, and an excellent developer experience.

* **Framework:** [Next.js 14](https://nextjs.org/) (with App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **API Validation:** [Zod](https://zod.dev/) (in API routes)
* **Deployment:** [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static-web-apps/) (as per workflow file)

## 📂 Project Structure

The project follows the standard Next.js App Router structure, with some key organizational choices:

```
.
├── app/                  # Main application routes (App Router)
│   ├── api/              # API routes (contact, getoffer)
│   ├── (pages)/          # Grouped routes for static pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── destinations/
│   │   ├── faq/
│   │   └── packages/
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # Reusable React components
│   ├── data/             # (Legacy) Static data files
│   ├── layout/           # Layout components (Header, Footer)
│   ├── main/             # Components specific to the homepage
│   └── ui/               # Generic UI components (buttons, sections)
├── lib/                  # Core logic and data services
│   └── data.ts           # Centralized data fetching service
├── public/               # Static assets (images, fonts)
└── types/                # Centralized TypeScript type definitions
    └── index.ts
```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v18.x or later recommended)
* [pnpm](https://pnpm.io/) (or npm/yarn)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/satishvermacoen/travelagency.git](https://github.com/satishvermacoen/travelagency.git)
    cd travelagency
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a new file named `.env.local` in the root of your project and add the necessary environment variables. See the section below for details.

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```

The application should now be running at [http://localhost:3000](http://localhost:3000).

### Environment Variables

To run this project, you need to create a `.env.local` file in the root directory and add the following variables. These are used for integrating with external services.

```env
# .env.local

# Email Service Configuration (e.g., Resend)
# Get your API key from [https://resend.com](https://resend.com)
RESEND_API_KEY="your_resend_api_key"
EMAIL_SENDER="onboarding@resend.dev"

# Headless CMS Configuration (Future Use)
# Example for Sanity.io
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
```

## 部署

This project includes a GitHub Actions workflow for continuous deployment to **Azure Static Web Apps**. Any push or merge to the `main` branch will automatically trigger a new build and deployment.

## 🗺️ Future Roadmap

While the current application is functional, here are some planned improvements to enhance its capabilities:

* **Headless CMS Integration:** Migrate all package and destination data from static files to a headless CMS (like Sanity, Strapi, or Contentful) to allow for easy content management by non-developers.
* **Email Notifications:** Implement a real email service (like Resend) in the API routes to notify the admin team of new contact form submissions and offer requests.
* **User Authentication:** Add a user authentication system to allow users to create accounts, save favorite packages, and manage bookings.
* **Booking System:** Develop a full-fledged booking and payment system to allow users to book and pay for tours directly on the website.
* **Advanced Filtering:** Implement more advanced filtering and sorting options on the packages page (e.g., by price, duration, rating, type).

---

Thank you for checking out our project!
