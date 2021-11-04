# Fries Cryogenic Temperature Analysis

#### Final Project by Team E: CGL Analytics (Kimberly Crawford, Gary Goodman, and Trevor Lanouette)

## Overview
A temperature analysis performed by CGL Analytics to predict temperature changes in major cities with average <=32 degrees Fahrenheit temperatures.

### Purpose

#### Background: 

Fries Cryogenic Research and Development Center (FCRDC) is currently located in Gotham City, New Jersey and operated by the family of Dr. Victor Fries, a known scientist with high intelligence and skills in physics, engineering, genetics, computer science, chemistry, and medical science. In 2001, Dr. Fries was severely injured from an equipment malfunction and laboratory explosion while conducting a cryogenic technology experiment to cure his terminally ill wife. The accident took his wife’s life and drastically lowered his body temperature forcing him to wear a cryogenic suit to survive. As a result of the accident, he fell into a deep depression and turned to crime under the alias, Mr. Freeze. Fortunately, he was captured by Batman and Robin and has been incarcerated for the past 20 years in Antarctica. During his time in prison, Mr. Freeze was rehabilitated and positively contributed to the research conducted by FCRDC. With his parole hearing coming up and anticipation of his release, he wants to relocate FCRDC’s headquarters to a major city with an average temperature of <=32 degrees Fahrenheit. The CEO of FCRDC has contracted CGL Analytics to conduct a temperature analysis and predict which cities meet these requirements based on data over the last 100 years. The recommended top location will have the most projected months <= 32 and be a major metropolitan area to attract and maintain high quality employees.

#### Project Goals: 

The purpose of this project was to download data for analysis, create a database to house the data, apply machine learning to tell a story about the data, and display the results in a dashboard. 

#### Reasons Why Project Topic was Selected:

Global climate change has started to become an issue due to changing temperatures around the globe. In order to address this issue, we (CGL Analytics) want to make it possible for individuals to get machine learned temperature predictions based on weather data from the past 100 years. This will help FCRDC to predict future temperatures before purchasing land or property for their new location.

#### Questions We Hope to Answer with the Data:

1) Which cities in our dataset have an average temperature of 32 degrees or below?

2) Out of the results, which cities are located in a major metropolitan area?

## Data Source Description

- Our dataset was located on Kaggle's Climate Change: Earth Surface Temperature Data page and comes from the Berkeley Earth data page (http://berkeleyearth.org/data/). The dataset selected includes Global Land Temperatures By Major City [CSV file from Kaggle](https://www.kaggle.com/berkeleyearth/climate-change-earth-surface-temperature-data?select=GlobalLandTemperaturesByMajorCity.csv)

![Kaggle_original.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Images/Kaggle_original.png)

- The following data was cleaned for analysis and resulted in a dataset with ??? records: [CleanedGlobalLandTemperaturesByMajorCity.csv](https://cgl-analytics-city-data.s3.us-east-2.amazonaws.com/CleanedGlobalLandTemperaturesByMajorCity.csv) 

## Technologies Used for Each Step of the Project:

- Python was used to prepare and explore the data, as well as complete initial analysis. 
- Python and JavaScript libraries were used such as Data-Driven Documents, or D3, and Plotly, 
- pgAdmin 4 Database was used to store cleaned data. 
- Tableau was used to create a heatmap.
- Machine learning was implemented to enhance the topic. 
- Tableau and JavaScript was used to build a dashboard to present the results. 
- Google Slides were used to prepare and deliver the presentation that walks the class through the project, step by step.

## Description of Communication Protocols

A group project channel was created in Slack for team members to communicate and GitHub was used to manage files. Below are the assigned roles:

- Square: Kimberly Crawford was responsible for the repository and presentation.
- Triangle: Trevor Lanouette created a mockup of a machine learning model which included a diagram that explains how the model worked concurrently with the rest of the project steps.
- Circle: Gary Goodman created a mockup of the database with a set of sample data.
- X: Since the team only has three members, all three members decided which technologies to use for each step of the project.

## GitHub Branches

1) [Presentation](https://docs.google.com/presentation/d/1WZC2bXoTtV8-X5zU-iLXQ76XYvIbZpF_7lVa6u-mnTE/edit?usp=sharing)

2) Machine Learning Model

How we are deciding what model to use:
![ml_map](https://user-images.githubusercontent.com/82718969/139357640-739c48d6-e16e-47ff-88aa-5c29684e54ef.png)

Based on our machine learning chart we will be using: Regression

We will use temperature data by month on Major cities to predict the monthly temperatures of cities that fall within our CEO's specifications for a new headquarters.

3) Database

We will create our database using Postgres and use AWS Database service to store the data for public view. 

4) Dashboard

Dashboard is not required in First Segment.

## Deliverables

### First Segment: Sketch It Out

Decide on your overall project, select your question, and build a simple model. You'll connect the model to a fabricated database, using comma-separated values (CSV) or JavaScript Object Notation (JSON) files, to prototype your idea.

### Second Segment: Build the Pieces

Train your model and build out the database you'll use for your final presentation.

### Third Segment: Plug It In

Connect your final database to your model, continue to train your model, and create your dashboard and presentation.

### Fourth Segment: Put It All Together

Put the final touches on your model, database, and dashboard. Lastly, create and deliver your final presentation to your class.