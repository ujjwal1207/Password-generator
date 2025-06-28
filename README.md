# React Password Generator

A simple and customizable password generator built with React.

## Tech Stack

- **React** – For building the user interface and managing state.
- **Vite** – For fast development and build tooling.
- **Tailwind CSS** – For utility-first, responsive styling.

## How It Works

This app lets you:
- Set the password length with a slider.
- Choose to include special characters and/or numbers.
- Generate a random password based on your settings.
- Copy the generated password to your clipboard with one click.

## React Hooks Used

- **useState**  
  Manages the state for password length, inclusion of characters/numbers, and the generated password.

- **useCallback**  
  Memoizes the password generation and copy functions to avoid unnecessary re-creation on each render.

- **useEffect**  
  Automatically generates a new password whenever the length or options change.

- **useRef**  
  References the password input field to select and copy the password programmatically.

## Usage

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ujjwal1207password-generator.git
   cd password-generator
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## License

This project is licensed under the MIT License.

# React + Vite/

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
