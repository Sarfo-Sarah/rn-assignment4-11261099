# Home Component README

## Description

This project contains a React Native component that displays a job listing interface. It includes featured jobs, popular jobs, and bottom icons for company logos. Users can search for job positions, view job details, and navigate to a login page.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Components](#components)
4. [Styles](#styles)
5. [Assets](#assets)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/job-listing-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd job-listing-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Usage

1. Import the `Home` component into your main application file:

   ```jsx
   import Home from "./components/Home";
   ```

2. Use the `Home` component in your JSX:

   ```jsx
   const App = () => {
     return <Home />;
   };

   export default App;
   ```

## Components

### Home

The `Home` component is the main component that displays the job listing interface. It uses several sub-components and elements from React Native and Expo Router.

#### Structure

- **SafeAreaView**: Ensures the component respects the safe area boundaries of the device.
- **StatusBar**: Manages the appearance of the status bar.
- **ScrollView**: Allows for scrolling through the content.
- **View**: Container for layout elements.
- **Text**: Displays text.
- **TextInput**: Input field for searching job positions.
- **FlatList**: Renders lists of items (Featured Jobs and Popular Jobs).
- **Link**: Navigates to different screens (e.g., Login page).

### Data

The component uses three arrays to hold job and icon data:

1. **listItems**: Contains featured job details.
2. **popularJobs**: Contains popular job details.
3. **bottomIcons**: Contains image paths for bottom icons.

## Styles

The `Home` component uses `StyleSheet` from React Native to style the elements.

### Style Definitions

- **flexItem**: Flex container with column direction and gap.
- **rowItem**: Flex container with row direction and space-around justification.
- **largeFont**: Large bold font style.
- **smallFont**: Small font style with a specific color.
- **roundedImage**: Rounded image style with specific width and height.
- **searchBackground**: Style for the search input background.

## Assets

The component uses local image assets located in the `../assets/images` directory. Ensure these images are available in the specified path:

- `facebook.jpg`
- `google.jpg`
- `apple.jpg`
- `burger.jpg`
- `beats.jpg`
- `react-logo.png`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgments

- [React Native](https://reactnative.dev/)
- [Expo Router](https://expo.dev/)

---

For any queries or issues, please contact [yourname@example.com](mailto:yourname@example.com).
