# nasa-gallery# 🌌 NASA Astronomy Image Gallery

An interactive web application that displays random NASA Astronomy Pictures of the Day (APOD). Users can filter images by title, date, and media type (image/video), view detailed information, and save their favorite images.

## 🚀 Live Demo
🔗 [View the deployed project on Vercel](https://vercel.com/rojavaishnavis-projects/nasa-gallery)

## 📂 Features
- Fetch 10 random astronomy images from NASA's APOD API.
- Display images in a responsive grid layout with titles and dates.
- Implement lazy loading for optimized performance.
- Search images by title or date (YYYY-MM-DD format).
- Filter by media type (image/video) using a dropdown.
- View detailed explanations and high-resolution images/videos.
- Save favorite images to local storage for later viewing.

## 🛠️ Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14+ recommended)
- **Git**
- **A GitHub account**

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/rojavaishnavi/nasa-gallery.git
cd nasa-gallery
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Create an `.env.local` File
Create a `.env.local` file in the root directory and add your NASA API key:
```plaintext
NEXT_PUBLIC_NASA_API_KEY=YOUR_NASA_API_KEY
```
(Replace `YOUR_NASA_API_KEY` with your actual key from [NASA API](https://api.nasa.gov/))

### 4️⃣ Start the Development Server
```bash
npm run dev
```
Then, open **`http://localhost:3000`** in your browser.

## 🚀 Deployment
### Deploying to Vercel
1. Install the **Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
2. Run:
   ```bash
   vercel
   ```
   Follow the prompts to deploy your app.

## 🛠️ Version Control
- Follow **best Git practices** with clear commit messages.
- Always **pull** the latest changes before pushing new updates:
  ```bash
  git pull origin main
  git add .
  git commit -m "Your commit message"
  git push origin main
  ```

## 📜 API Reference
- [NASA APOD API](https://api.nasa.gov/planetary/apod)
- Random images:
  ```
  https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY&count=10
  ```
- Specific date:
  ```
  https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY&date=YYYY-MM-DD
  ```

## 📌 Credits
- **Developed by:** Roja Vaishnavi
- **GitHub:** [rojavaishnavi](https://github.com/rojavaishnavi)

## 📄 License
This project is **open-source** under the [MIT License](LICENSE).
