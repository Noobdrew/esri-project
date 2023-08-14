<h1>Address Lookup and Interactive Map Application</h1>

<h2>Overview</h2>

The "Address Lookup and Interactive Map" project showcases the power of React.js and leverages the Vite build tool for efficient development. The main objective of the project is to fetch address data from an external API, present users with suggested addresses, allow them to select an address, and display the chosen location on an interactive map.

<h2>Features</h2>

Data Fetching and Suggested Addresses
The application utilizes modern asynchronous programming techniques by employing the Fetch API combined with async/await functions. This seamless integration enables the retrieval of address suggestions from an external API as users type into the search input. Suggestions are updated in real time, enhancing the user experience.

<h3>Suggested Addresses Component</h3>

The "Suggested" component elegantly displays the retrieved address suggestions in an intuitive interface. When a user selects an address from the suggestions, the component efficiently updates the search field and coordinates, offering a streamlined way to interact with the application.

<h3>Interactive Map with OpenStreetMap</h3>

One of the highlights of the project is the integration of the react-leaflet library, which seamlessly integrates OpenStreetMap into the application. This integration results in an interactive map component that visualizes the selected address's coordinates. Users can dynamically explore the map, zoom in, and out, providing an engaging and informative experience.

<h3>Component Structure</h3>

1.Main Component (main.jsx): The entry point of the application, responsible for rendering the main App component.

2.App Component (app.jsx): The central hub of the application, encompassing the layout and orchestrating interactions among child components. It manages several states, including suggested addresses, search input, coordinates, and map name.

3.Suggested Component (Suggested.jsx): An individual suggestion element that users can select. This component handles user clicks, updating the search input and coordinates accordingly.

4.EmbeddedMap Component (EmbededMap.jsx): A modular component housing the react-leaflet elements that generate the interactive map. This component visualizes the selected address's coordinates, enhancing user engagement.
