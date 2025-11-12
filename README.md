# Virtual Tour Pro - React Application

A modern, responsive React application showcasing Jovan Spasojevic's virtual tour development services for hotels worldwide.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Form Handling**: Contact form with validation and notifications
- **Performance Optimized**: Lazy loading and efficient state management
- **Accessibility**: Keyboard navigation and screen reader support

## 🛠️ Technologies Used

- **React 18.2.0** - Modern React with hooks
- **React Router DOM** - Navigation and routing
- **Framer Motion** - Smooth animations
- **React Intersection Observer** - Scroll-based animations
- **CSS3** - Modern styling with gradients and animations
- **Font Awesome** - Professional icons
- **Google Fonts** - Inter font family

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Services.js        # Services showcase
│   ├── Portfolio.js       # Portfolio examples
│   ├── Benefits.js        # Benefits section
│   ├── Pricing.js         # Pricing information
│   ├── Contact.js         # Contact form and info
│   └── Footer.js          # Footer component
├── App.js                 # Main app component
├── App.css                # Component styles
├── index.js               # App entry point
└── index.css              # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **GitHub Pages**: Deploy from GitHub Actions

## 📱 Features Overview

### Navigation
- Fixed navbar with smooth scrolling
- Mobile hamburger menu
- Active section highlighting
- Keyboard navigation support

### Sections
1. **Hero** - Eye-catching introduction with CTAs
2. **About** - Team information and statistics
3. **Services** - Detailed service breakdown
4. **Portfolio** - Real virtual tour examples
5. **Benefits** - Key advantages for hotels
6. **Pricing** - Transparent pricing structure
7. **Contact** - Contact form and information

### Interactive Elements
- Smooth scroll navigation
- Form validation with notifications
- Hover effects and animations
- Responsive image galleries
- Mobile-optimized interactions

## 🎨 Customization

### Colors
The main color scheme uses CSS custom properties:
- Primary: `#667eea` (Purple-blue)
- Secondary: `#764ba2` (Purple)
- Background: `#f8f9fa` (Light gray)

### Content
- Update component files to modify content
- Add new sections by creating new components
- Modify styling in `App.css` or individual component files

### Form Integration
The contact form currently shows notifications. To integrate with a backend:

1. Replace the `handleSubmit` function in `Contact.js`
2. Add your API endpoint
3. Handle form submission to your server

## 📊 Performance

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Responsive image handling
- **Efficient Rendering**: React.memo and useCallback optimizations
- **Bundle Splitting**: Automatic code splitting with React

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is created for Jovan Spasojevic's virtual tour development service. All rights reserved.

## 📞 Contact

- **Developer**: Jovan Spasojevic
- **Email**: j.virtualtour.ceo@gmail.com
- **Service**: Worldwide virtual tour development

---

Built with ❤️ using React and modern web technologies.