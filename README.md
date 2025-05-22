# 🎥 Movie App

A modern movie listing web application built with **React** and powered by the **TMDb API**, featuring a dynamic **watchlist**, **genre filter**, and **search functionality**.

> 🚀 Deployed on [Vercel](https://movie-app-beta-lilac-22.vercel.app/)

---

## 📚 About the Project

This project was built as part of my **MFSD (MERN Full Stack Developer)** course. Through this project, I learned and implemented:
- React components and props
- React Hooks: `useState`, `useEffect`, and `useContext`
- API integration using **TMDb (The Movie Database)**
- Global state management using **Context API**
- Component styling using **Tailwind CSS**
- Deployment using **Vercel**

---

## 🛠 Technologies Used

| Technology       | Purpose                         |
|------------------|----------------------------------|
| React.js         | Frontend library                |
| Tailwind CSS     | Styling UI components           |
| React Icons      | Icons (Heart, etc.)             |
| Context API      | Manage global watchlist state   |
| TMDb API         | Movie data (title, genre, poster) |
| Vercel           | Hosting & deployment            |

---

## 🔑 TMDb API Key

To fetch movie data, the app uses the [TMDb API](https://developer.themoviedb.org/). You need an API key from TMDb:

1. Go to https://www.themoviedb.org/
2. Sign up and verify your email
3. Navigate to [API Settings](https://www.themoviedb.org/settings/api)
4. Request a free API key for **personal use**
5. Use the API key in your `.env` file like this:
   ```
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

---

## 📦 Features

- 🔍 **Search** movies by name
- ❤️ **Add/Remove** from your **Watchlist**
- 🎭 **Filter** by movie genres (from TMDb)
- 🔄 **Pagination** for browsing popular movies
- 🌐 **Deployed** with Vercel

---

## 🚀 Deployment

This app is live at:

**🔗 [movie-app-beta-lilac-22.vercel.app](https://movie-app-beta-lilac-22.vercel.app/)**

---

## 📸 Screenshots

_Add screenshots of your app UI here (home page, watchlist, genre filter, etc.)_

---

## 💡 Learning Outcome

Through this project, I improved:
- My React fundamentals
- API handling with `fetch`
- State and context management
- Responsive design using Tailwind CSS
- Real-world deployment on Vercel

---

## 📁 Folder Structure (Optional)

```
src/
├── components/
│   ├── MovieCard.jsx
│   └── GenreFilter.jsx
├── context/
│   └── WatchListContext.js
├── pages/
│   ├── Home.jsx
│   └── Watchlist.jsx
├── App.js
└── index.js
```

---

## 🙋‍♂️ Author

**Ulaganathan**  
🔗 [GitHub Profile](https://github.com/Ulaganathan0709)

---

## 📝 License

This project is for educational purposes under the [MIT License](LICENSE).
