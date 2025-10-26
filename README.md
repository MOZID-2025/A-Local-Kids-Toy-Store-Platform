project name: ToyTopia – Local Kids Toy Store Platform

purpose: ToyTopia is a vibrant and playful online marketplace designed for kids’ toys. The platform allows users to explore toys from local sellers, view detailed information, and interact through feedback and ratings. It encourages families to support local toy businesses while providing a fun, responsive, and secure browsing experience for children’s toy shopping.

live URL:

key features:

- Home Page
  Interactive Swiper Slider showcasing featured toys.
  Popular Toys section displaying toy cards with price, rating, and availability.
  “View More” button redirects users to detailed toy pages (Protected Route).
  Two additional engaging sections to enhance user experience.

- Authentication
  Email & Password authentication using Firebase Auth.
  Google Login integration.
  Password validation:
  At least 6 characters
  At least 1 uppercase & 1 lowercase letter
  Toast/SweetAlert for success & error messages.
  Persistent Login State using onAuthStateChanged.

- My Profile (Protected Route)
  Shows logged-in user information (name, email, and photo).
  User can edit profile info using Firebase’s updateProfile() method.

- Additional Routes
  Toy Details Page (Protected):
  Displays full toy information with a simple “Try Now” form and success message.
  Extra Private Route: Includes additional meaningful content (e.g., “My Favorite Toys”).
  Forgot Password Page with Gmail redirect.

- Navigation & Layout
  Dynamic Navbar with user image, login/logout state.
  Footer with links to Terms, Privacy Policy, and social media.
  Dynamic page titles using react-helmet.
  Responsive Design for mobile, tablet, and desktop.

- Error Page
  Custom 404 Not Found page with return-home navigation.

npm packages:

1. react-router-dom
2. firebase
3. react-icons
4. tailwindcss
5. daisyui
