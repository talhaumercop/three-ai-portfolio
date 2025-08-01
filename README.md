# Talha Umar - Portfolio Website

A modern, interactive portfolio website built with React, featuring 3D elements and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, minimalist design inspired by sticky note aesthetics
- **Responsive Layout**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Interactive Elements**: Hover effects and scroll-triggered animations
- **Contact Form**: Functional contact form for client inquiries
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: TailwindCSS with custom components
- **Animations**: Framer Motion, GSAP with ScrollTrigger
- **Build Tool**: Create React App
- **Fonts**: Inter (modern), Kalam (handwritten)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Sticky Yellow: `#FFE066`
- Sticky Blue: `#87CEEB`
- Sticky Pink: `#FFB6C1`
- Sticky Green: `#98FB98`
- Sticky Orange: `#FFA07A`

### Components
- `Hero.jsx` - Landing section with introduction
- `SkillsSection.jsx` - Skills showcase with sticky note design
- `ProjectsSection.jsx` - Featured projects grid
- `WorkExperience.jsx` - Professional experience timeline
- `ContactSection.jsx` - Contact form and information
- `Footer.jsx` - Footer with social links

### Adding Projects
To add new projects, edit the `projects` array in `ProjectsSection.jsx`:

```javascript
{
  title: "Your Project Title",
  description: "Project description",
  tech: ["React", "Three.js", "etc"],
  image: "/images/your-project.png",
  color: "bg-sticky-blue",
  demoUrl: "#",
  codeUrl: "#"
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── SkillsSection.jsx
│   ├── ProjectsSection.jsx
│   ├── WorkExperience.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── App.js
├── index.js
└── index.css
```

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The build folder will contain the optimized production files ready for deployment.

## 📝 TODO

- [ ] Add real project images
- [ ] Integrate Three.js 3D scenes
- [ ] Add blog section
- [ ] Implement dark mode
- [ ] Add more interactive animations
- [ ] Connect contact form to backend

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Talha Umar**
- Email: talha123@gmail.com
- Location: Pakistan
- Specialization: Frontend Development (3D Web Experiences)

---

*Built with ❤️ using React and modern web technologies*