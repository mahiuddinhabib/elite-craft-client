# EliteCraft

EliteCraft is a Next.js web app that lets users build custom PCs by selecting components. It features user authentication, protected routes, and responsiveness for an optimal experience.

## Live Site

[EliteCraft](https://www.facebook.com)

## Description

The EliteCraft website is a web application built using Next.js, allowing users to browse and select PC components to build their own custom PCs. The website features a clean and straightforward interface with various sections like the PC Builder tool, product listings, and category filtering. Users can browse featured products, view product details, and add components to the PC Builder tool for customization.

## Features

1. **Navbar:**
   - A "PC Builder" button that redirects users to the PC Builder page to start building their PC.
   - A "Categories" dropdown with options for CPU, Motherboard, RAM, Power Supply Unit, Storage Device, Monitor, and Others.

2. **Home Page:**
   - Displays random PC components as Featured Products with essential details like image, name, category, price, stock status, and rating.
   - Clicking on a Featured Product takes the user to the product detail page.

3. **Featured Category Sections:**
   - Each featured category has a clickable button and it redirects users to a page displaying at least products of that specific category.
   - Product cards on this page show basic info like image, name, category and etc.
   - Clicking on the button takes the user to the product detail page.

4. **Product Detail Page:**
   - Displays detailed information about each PC component, including image, name, category, stock status, price, description, key features, individual rating, average rating, and user reviews.

5. **PC Builder Page:**
   - Category sections for CPU, Motherboard, RAM, Power Supply Unit, Storage Device, and Monitor.
   - Each category has a "Select" button.
   - Clicking on the button takes the user to a page displaying components of that specific category.
   - Each component card has an "Add to Builder" button to update the PC Builder tool with the selected component.
   - The PC Builder page has a "Complete Build" button that becomes active only when at least 5 components are added to the PC Builder.

6. **Responsiveness:**
   - The entire application is responsive, providing an enjoyable user experience across both mobile and desktop devices.

7. **Other Features:**
   - The PC Builder page is a protected/private route, accessible only to logged-in users.
   - User authentication is enabled using NextAuth with social login options (Google/Github).
   - Clicking on the "Complete Build" button shows a success alert.
   - The Home page features a hero/banner section and a footer.