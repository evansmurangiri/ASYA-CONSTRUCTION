# BrightBuild — Construction Company Website

A multi-page React site for a construction company, built with **React + Vite + Tailwind CSS + React Router**.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally
```

If you deploy to Netlify, `public/_redirects` is already included so deep
links like `/projects` or `/blog/some-article` work on direct load/refresh.
Other hosts (Vercel, your own server) need an equivalent SPA-fallback rule —
ask if you need that file for a specific platform.

## Pages / Routes

| Route              | Page                                              |
|---------------------|---------------------------------------------------|
| `/`                 | Home — Hero, Services, Stats, Why Choose Us, Featured Projects, Process, Testimonials, FAQ, Blog preview |
| `/about`            | About — story, stats, Why Choose Us, team          |
| `/projects`         | All projects, filterable by category               |
| `/blog`             | All blog articles                                  |
| `/blog/:slug`       | Full article page with related-articles section    |
| `/contact`          | Contact info cards + the contact form              |

`Services` and `Process` stay as anchors on the home page (`/#services`,
`/#process`) since they're not full pages — the nav and footer link to them
with a leading `/` so they work correctly from any page, not just from home.

## Project structure

```
src/
  components/
    Header.jsx           Sticky nav with a "Resources" dropdown (→ Blog)
    Footer.jsx             Link columns + contact details
    Layout.jsx               Wraps every page with Header/Footer; handles
                             scroll-to-top on page change and smooth-scroll
                             to a section when a link includes a #hash
    PageHeader.jsx             Reusable breadcrumb + title banner used by
                               About, Projects, Blog, and Contact pages
    Hero.jsx
    Services.jsx                4-card "What We Do" grid (Design and Build,
                                 Construction, Renovation, Cost Estimate) —
                                 each "Learn More" opens its matching quiz
    ServiceFormModal.jsx          Multi-step quiz engine used by Services.jsx
    Stats.jsx                       5 Years / 10 Projects / KSh 8B Built
    WhyChooseUs.jsx                   7-card "Why Choose Us" grid
    Projects.jsx                       Featured projects preview (home page)
    Process.jsx
    Testimonials.jsx
    FAQ.jsx                                20-question FAQ accordion
    Blog.jsx                                 Latest-articles preview (home page)
    Contact.jsx                                Image + contact form

  pages/
    Home.jsx               Composes the home page sections above
    AboutPage.jsx             Story, Stats, Why Choose Us, team
    ProjectsPage.jsx            All projects with category filter pills
    BlogPage.jsx                  All blog articles
    BlogPostPage.jsx                Full article + related articles
    ContactPage.jsx                   Info cards + the Contact form

  data/
    projects.js          All project/property entries (`featured: true`
                          ones show on the home page preview)
    blogPosts.js            All blog posts, including full `content`
                             paragraphs for each article page
    serviceForms.js            Question data for the 4 "Learn More" quizzes

  App.jsx               Route definitions
  main.jsx              Wraps App in BrowserRouter
  index.css             Tailwind directives + base styles
```

## The service quiz flows

Clicking "Learn More" on any of the 4 service cards opens a full-screen,
step-by-step quiz (`ServiceFormModal.jsx`):

- **Design and Build** → Design Form (8 questions)
- **Construction** → Build Form (6 questions)
- **Cost Estimate** → Quantity Surveying Form (4 questions)
- **Renovation** → Renovation Form (5 questions)

Some gating questions branch into a different flow automatically:
- Build Form, "No architectural drawings?" → redirects into the Design Form
- Build Form, "No BOQ?" → redirects into the Quantity Surveying Form
- Quantity Surveying Form, "No architectural drawings?" → redirects into the Design Form

Every flow ends with the same contact step (Full Name, Mobile Number,
Email Address) before showing a thank-you screen. Edit questions, options,
icons, or redirect rules in `src/data/serviceForms.js`.

## Notes

- Icons: [lucide-react](https://lucide.dev)
- Photos: free-to-use Unsplash images (construction site, office building,
  modern house, warehouse, retail storefront, apartments). Swap the URLs
  in `src/data/projects.js`, `src/data/blogPosts.js`, `Hero.jsx`, and
  `Contact.jsx` for your own real photography.
- Testimonial avatars and the About page's team photos use the placeholder
  service `pravatar.cc` — replace with real photos when you have them.
- All copy (services, stats, testimonials, footer links, blog articles,
  FAQ answers) is sample/starter content — edit directly in the relevant
  component or data file.
- Colors and type scale are defined in `tailwind.config.js` under the
  `brand` and `navy` palettes, so you can re-theme the whole site from one
  file.
