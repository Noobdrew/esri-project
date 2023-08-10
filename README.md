# esri-project

For this project i chose to use React.js with vite.
The main requirement for this project was to fetch the data from an api and display it.
To fetch the data i used fetch api with the async await functions.
To display suggested adresses i fetch the data onChange of the input field,
when the user clicks on the adress they wanted it gets set as the value of the filed
and the coordinates of the adress get set to state for further use.
For extra credit i created a map using react-leaflet with openstreetmap api to create an
interactive map with the search result.
The website has 4 jsx files each containing specific functionality

1. main.jsx that renders app.jsx
2. app.jsx is the main component containing all the other child components as well as the
   main layout of the page it also has alot ot states that get sent to child components
3. Suggested.jsx this has the individual suggestions, they have an onClick handler that
   sets serch and coors from them
4. EmbededMap.jsx this is the component holding all the react-leaflet components and logic
