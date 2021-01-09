# Technical Test

The Open Targets Platform aggregates and integrates data from more than 20 different data sources to create evidence that builds and scores associations between diseases and drug targets (human genes).

Our association score ranges from 0 to 1 and is a harmonic sum of individual scores of 7 different data types: `literature`, `rna_expression`, `genetic_association`, `somatic_mutation`, `known_drug`, `animal_model`, and `affected_pathway`.

A score of 0 corresponds to no evidence supporting an association. The closer the score is to 1, the stronger the association. If you would like to know more about our association score, please visit [our scoring documentation page](https://docs.targetvalidation.org/getting-started/scoring).

## Instructions

We would like you to create a data table and visualisations showing the association scores for lung carcinoma and 5 drug targets.

Please call our demo API - https://demo6922545.mockable.io/ - and using the response data, please complete the following steps based on the [design specs](https://docs.google.com/presentation/d/10y3UKefb8q3diULVq8I-8j7j0oj6QGtOMzdW4KM_DKk/edit?usp=sharing) found below.

1. Create a data table with the following column headings:

   - Symbol
   - Gene ID
   - Gene Name
   - Overall Association Score

![Open Targets Front End Technical Test Specification - step 1](https://user-images.githubusercontent.com/7490258/85530357-c9813000-b605-11ea-9cd0-c5f7abe1f501.png)

2. When a user clicks the "+", expand the row of the table and show a bar chart and a radar chart with the association scores for each individual data type - `literature`, `rna_expression`, `genetic_association`, `somatic_mutation`, `known_drug`, `animal_model`, and `affected_pathway`.

![Open Targets Front End Technical Test Specification - step 2](https://user-images.githubusercontent.com/7490258/85530380-cdad4d80-b605-11ea-9f8d-daac0e00587e.png)

Please note the following requirements:

- The data table should only have 5 rows and show the targets with the highest overall association scores
- By default, the data table should be sorted by the overall association score in decreasing order - the target with the highest overall score should be on top followed by the target with the next highest score and so on
- For the bar and radar charts, please use any chart or data visualisation library that you are comfortable using, such as:
  - D3
  - Chart.js
  - HighCharts
  - CanvasJS
  - Google Charts
  - Recharts

To make the setup of the project easy, we have bootstrapped it with [Create React App](https://github.com/facebook/create-react-app). Feel free to add any dependencies that you wish by adding them to `package.json` or including them as a script tag in `public/index.html`.

## Available Scripts

In the project directory, you can run:

#### `yarn install`

Installs relevant dependencies for the project.

#### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
