## Frontend

### Description
The frontend of the Smart Job Portal is designed to provide a seamless user interface. It enables users to interact with the platform, search for jobs, and use the chatbot for assistance.

### Technologies Used
- **React.js**: Library for building the UI.
- **Styled Components**: For modern and modular styling.
- **Axios**: For making API requests.
- **React Router**: For navigation.

### Features Implemented
1. **Home Page**: Landing page showcasing the portal's features.
2. **Job Search**: Page to search and filter job postings.
3. **Chatbot Interface**: A user-friendly chat interface powered by OpenAI.
4. **Theming**: Light and dark themes implemented using styled-components.

### Setup Instructions
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following variables:
   ```env
   REACT_APP_API_URL=<your-backend-api-url>
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Common Features
- **Integration**: The frontend and backend are seamlessly integrated via RESTful APIs.
- **Responsive Design**: The frontend is designed to work well on all screen sizes.
- **Dummy Data**: The MongoDB database includes dummy job postings and user data for testing.

---

## Future Improvements
1. **Authentication**: Implement OAuth for social login.
2. **Notifications**: Add real-time notifications using WebSockets.
3. **Advanced Search**: Enhance job search with filters and sorting options.
4. **Mobile App**: Develop a mobile version using React Native.

---

## Contribution
Feel free to contribute to this project. Fork the repository, make your changes, and submit a pull request.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
