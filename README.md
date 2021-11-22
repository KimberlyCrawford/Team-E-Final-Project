![Title.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Title.png)

#### Final Project by Team E: CGL Analytics (Kimberly Crawford, Gary Goodman, and Trevor Lanouette)

## Overview
An analysis to predict temperature changes in major cities with average <=32 degrees Fahrenheit.

Topic: Temperature Predictions for Property Investment Decisions

### Purpose

#### Reasons Why Project Topic was Selected:

Our team wanted to select a topic that would showcase our experiences and skills developed throughout this course. As we glanced back through the modules, a few challenges stood out to us that we all enjoyed working on: 

- Module 6: WeatherPy with Python APIs
- Module 8: ETL using SQL
- Module 11: Using JavaScript and HTML
- Module 13: Mapping Earthquakes with JavaScript and APIs
- Module 17: Supervised Machine Learning.

Global climate change has started to become an issue due to changing temperatures around the globe. In order to address this issue, our team (CGL Analytics) was interested in creating a machine learned model for predicting temperature changes when it comes to making decisions about property investments.

#### Our Scenario: 

Fries Cryogenic Research and Development Center (FCRDC) is currently located in Gotham City, New Jersey and operated by the family of Dr. Victor Fries, a known scientist with high intelligence and skills in physics, engineering, genetics, computer science, chemistry, and medical science. In 2001, Dr. Fries was severely injured from an equipment malfunction and laboratory explosion while conducting a cryogenic technology experiment to cure his terminally ill wife. The accident took his wife’s life and drastically lowered his body temperature forcing him to wear a cryogenic suit to survive. As a result of the accident, he fell into a deep depression and turned to crime under the alias, Mr. Freeze. Fortunately, he was captured by Batman and Robin and has been incarcerated for the past 20 years in Antarctica. During his time in prison, Mr. Freeze was rehabilitated and positively contributed to the research conducted by FCRDC. With his parole hearing coming up and anticipation of his release, he wants to relocate FCRDC’s headquarters to a major city with an average temperature of <=32 degrees Fahrenheit. The CEO of FCRDC has contracted CGL Analytics to conduct a temperature analysis that predicts major cities that meet these requirements and wants CGL Analytics to recommendation the top five locations that will have the most projected months <= 32 and be in a major metropolitan area to attract and maintain high quality employees. The machine learning model will help FCRDC predict future temperatures before purchasing land or property for their new location.

#### Project Goals: 

The goals of this project was to download data for analysis, create a database to house the data, apply machine learning to tell a story about the data, and display the results in a dashboard. 

## Data Source Description

- Our dataset was located on Kaggle's Climate Change: Earth Surface Temperature Data page and comes from the Berkeley Earth data page (http://berkeleyearth.org/data/). The dataset selected includes [Global Land Temperatures By Major City](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/GlobalLandTemperaturesByMajorCity.csv)

![Kaggle_original.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Kaggle_original.png)

- The following data was cleaned for analysis and resulted in a dataset with 239,177 records: [CleanedGlobalLandTemperaturesByMajorCity.csv](https://cgl-analytics-city-data.s3.us-east-2.amazonaws.com/CleanedGlobalLandTemperaturesByMajorCity.csv) 

#### Questions CGL Analytics Hopes to Answer with the Data:

1) Which major cities in our dataset have an average temperature of <=32 degrees Fahrenheit?

2) Out of the results, which cities are located in a major metropolitan area?

3) What are the top five locations that will have the most projected months <= 32 and be in a major metropolitan area?

## Data Exploration Phase

The data consisted of 239,177 observations with 7 columns: dt, AverageTemperature, AverageTemperatureUncertainty, City, Country, Latitude and Longitude. Five variables were objects while two were decimals (float64).

![Extract.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Extract.png)

![Data_types.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Data_types.png)

Data was explored using the ETL process: 

![ETL.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/ETL.png)

Step 1 (Extract)- the data was read into a Panda DataFrame with 239,177 rows and 7 columns.
Step 2 (Transform) - the data was cleaned and structured into a DataFrame identifying the top 5 cities with average temperature <=32.
Step 3 (Load) - the data was written into a database for storage with 5,565 rows and 7 columns.

![ETL_steps.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/ETL_steps.png)

## Analysis Phase

- Data Visualization - develop the hypothesis or insights to explore and evaluate the data using Tableau. 
- Statical Analysis - summarize the data and it’s understanding in terms of model and graphs apart from this it also explains how the data is related to the underlying real world. the statical analysis is also used to identifying the pattern or trends for predictive analytics which helps to make the business decision, it also helps to determine the statical significance of the data set.
- Data Model Development - deploy a model with predictive capabilities.
- Recommendations/Report/Story - data analytics process where analysis decision is summarized and the result or consequences of the analysis process is represented in terms of story, report, recommendations and PPT, tableau and SAS application plays an important role to summarize the analysis process via a report or story building.

## Technologies Used for Each Step of the Project:

- Python was used to prepare and explore the data, as well as complete initial analysis. 
- Python and JavaScript libraries were used such as Data-Driven Documents, or D3, and Plotly, 
- PostgreSQL was used to write queries and view results while pgAdmin 4 Database was used to store cleaned data. 
- Tableau was used to create a heatmap.
- Machine learning was implemented to enhance the topic. 
- Tableau and JavaScript was used to build a dashboard to present the results. 
- Google Slides were used to prepare and deliver the presentation that walks the class through the project, step by step.

## GitHub Branches

#### 1) Presentation 

[Presentation](https://docs.google.com/presentation/d/1WZC2bXoTtV8-X5zU-iLXQ76XYvIbZpF_7lVa6u-mnTE/edit?usp=sharing)

![Presentation.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Presentation.png)

#### 2) Machine Learning Model

How we are deciding what model to use:
![SARIMA-QUÉ-ES-1-860x280](https://user-images.githubusercontent.com/82718969/141689949-9dee84cd-5d99-4921-b23e-401ceb667c39.jpg)


Based on our machine learning chart we will be using: Sarima

Sarima learns based on cyclic paterns that are programed into the model before training. The model trains on the previous data inorder to make predictions for the future. This works great for weather data as it is cyclic by season through each year.
We will use temperature data by month on Major cities to predict the monthly temperatures of cities that fall within our CEO's specifications for a new headquarters.

#### 3) Database

- A SQL database was created based on the following ERD:

![ERD.JPG](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/ERD.JPG)

-The following datasets were imported into pgAdmin:

- The following tables were created, joined and exported to CSV files:

![CVS_cold_cities.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/CVS_cold_cities.png)

![CVS_joins.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/CVS_joins.png)

- See the following text file for queries: https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Database/queries.sql.txt

#### 4) Dashboard

The following is a screenshot of our final Dashboard presented to FCRDC:

![entire_map.JPG](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/entire_map.JPG)

Below is a screenshot of the top major city recommended for new headquarters:

![Maptopchoice.JPG](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Maptopchoice.JPG)

## Final Project Deliverables

### First Segment: Sketch It Out

Decide on your overall project, select your question, and build a simple model. You'll connect the model to a fabricated database, using comma-separated values (CSV) or JavaScript Object Notation (JSON) files, to prototype your idea.

### Second Segment: Build the Pieces

Train your model and build out the database you'll use for your final presentation.

### Third Segment: Plug It In

Connect your final database to your model, continue to train your model, and create your dashboard and presentation.

### Fourth Segment: Put It All Together

Put the final touches on your model, database, and dashboard. Lastly, create and deliver your final presentation to your class.
