# 🚀 Nabil Amin Hridoy - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases my skills as a Full Stack Developer with expertise in MERN stack technologies.

## ✨ About Me

I'm **Nabil Amin Hridoy**, a passionate MERN Stack & Full Stack Developer focused on building scalable, user-friendly, and high-performance web applications with modern technologies and best practices.

### 🎯 Core Skills
- **Frontend**: React.js, Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, REST APIs, GraphQL
- **Database**: MongoDB, PostgreSQL, Prisma ORM
- **Tools**: Git, Docker, AWS, CI/CD
- **Other**: Socket.io, Redis, NextAuth.js

## 🌟 Features

### 🎨 Modern Design
- **Responsive Layout**: Mobile-first design with smooth animations
- **Dark/Light Theme**: Beautiful theme switching with Next Themes
- **Interactive Elements**: Smooth micro-interactions with Framer Motion
- **Professional UI**: Clean, modern interface using shadcn/ui components

### 📝 Contact Form
- **Functional Contact**: Working contact form with SMTP email integration
- **Email Notifications**: Professional email templates with dynamic content
- **Form Validation**: Client-side and server-side validation
- **User Feedback**: Toast notifications for better UX

### 🎯 Portfolio Sections
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Me**: Professional overview with social media links
- **Featured Projects**: Showcase of best work with project details
- **Experience Timeline**: Work and education history
- **Testimonials**: Client feedback and recommendations
- **Contact Information**: Multiple ways to get in touch

### 🛠️ Technical Features
- **Type Safety**: Full TypeScript implementation
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized images and lazy loading
- **Accessibility**: Semantic HTML and ARIA support
- **Progressive Web App**: PWA capabilities

## 🚀 Technology Stack

### 🎯 Core Framework
- **⚡ Next.js 15** - React framework with App Router
- **📘 TypeScript 5** - Type-safe development
- **🎨 Tailwind CSS 4** - Utility-first CSS framework

### 🧩 UI & Design
- **🧩 shadcn/ui** - High-quality accessible components
- **🎯 Lucide React** - Beautiful icon library
- **🌈 Framer Motion** - Smooth animations
- **🎨 Next Themes** - Theme switching

### 📋 Backend & API
- **📧 Nodemailer** - SMTP email functionality
- **🔐 Input Validation** - Form security and validation
- **🌐 REST API** - Contact form endpoint

### 🎨 UI Components
- **Layout**: Cards, sections, responsive grid
- **Forms**: Input fields, textarea, validation
- **Feedback**: Toast notifications, loading states
- **Navigation**: Smooth scrolling, mobile menu

## 📱 Live Demo

Visit my portfolio at: [Your Portfolio URL]

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Clone and Run

```bash
# Clone the repository
git clone https://github.com/nabilaminhridoy/nabilaminhridoy-portfoliov2.git

# Navigate to project directory
cd nabilaminhridoy-portfoliov2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes (contact form)
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main portfolio page
├── components/          # Reusable React components
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── public/             # Static assets (images, icons)
```

## ⚙️ Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:

```env
# Email Configuration (for contact form)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

### Contact Form Setup
1. Configure SMTP settings in the environment variables
2. Update email addresses in `/src/app/api/contact/route.ts`
3. Customize email templates as needed

## 🎨 Customization

### Personal Information
Update your personal details in `/src/app/page.tsx`:
- Name and title
- Contact information
- Social media links
- Project details
- Experience timeline

### Styling
- Modify colors in `tailwind.config.js`
- Update theme colors in CSS variables
- Customize animations and transitions

### Content
- Add your projects in the projects array
- Update experience and education
- Modify testimonials
- Adjust skills and technologies

## 📧 Contact Form Features

The contact form includes:
- **SMTP Integration**: Sends emails directly to your inbox
- **Professional Templates**: Beautiful HTML email design
- **Input Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error management
- **Loading States**: User feedback during submission
- **Responsive Design**: Works on all devices

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
npm run build

# Deploy the `out` folder to Netlify
```

### Docker
```bash
# Build Docker image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

## 🤝 Connect With Me

<p align="left">
  <a href="https://nabilaminhridoy.vercel.app" target="blank"><img align="center" src="https://img.icons8.com/fluency/48/000000/domain.png" alt="Portfolio" height="40" width="40" /></a>&nbsp;
  <a href="https://facebook.com/nabilaminhridoy" target="blank"><img align="center" src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="Facebook" height="40" width="40" /></a>&nbsp;
  <a href="https://instagram.com/nabilaminhridoy" target="blank"><img align="center" src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="Instagram" height="40" width="40" /></a>&nbsp;
  <a href="https://wa.me/8801624647814" target="blank"><img align="center" src="https://img.icons8.com/fluency/48/000000/whatsapp.png" alt="WhatsApp" height="40" width="40" /></a>&nbsp;
  <a href="https://github.com/nabilaminhridoy" target="blank"><img align="center" src="https://img.icons8.com/fluency/48/000000/github.png" alt="GitHub" height="40" width="40" /></a>&nbsp;
  <a href="https://linkedin.com/in/nabilaminhridoy" target="blank"><img align="center" src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="LinkedIn" height="40" width="40" /></a>&nbsp;
  <a href="mailto:nabilaminhridoy@gmail.com" target="blank"><img align="center" src="https://img.icons8.com/fluency/48/000000/gmail.png" alt="Email" height="40" width="40" /></a>
</p>

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built with passion and dedication to showcase modern web development capabilities. Special thanks to the open-source community for the amazing tools and libraries that made this project possible.

---

**Developed with ❤️ by Nabil Amin Hridoy**

*Full Stack Developer | MERN Stack Expert | Tech Enthusiast*
