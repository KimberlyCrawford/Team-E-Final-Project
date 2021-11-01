# Fries Cryogenic Temperature Analysis

#### Final Project by Team E: CGL Analytics (Kimberly Crawford, Gary Goodman, and Trevor Lanouette)

## Overview
Fries Cryogenic Research and Development Center is currently located in Amarillo, Texas and operated by decedents of Dr. Victor Fries better known as Mr. Frosty. In the early 1970s, Dr. Fries was severly injured from an equipment malfunction and laboratory explosion while conducting a cryogenic technology experiment. His body can only survive in an environment with an average 32 degrees fahrenhite or below temperature.  With high intelligence and skills in physics, engineering, genetics, computer science, chemistry, and medical science; Dr. Fries has worked remotely as a valuable consultant. However, as more advanced research is being conducted, FCRDC need his physical presence in the laboratories. Therefore, FCRDC needs to relocate it's headquarters and laboratory somewhere with an average temperature of 32 degrees farenhite or below to accommodate Dr. Fries' special circumstances. The CEO of FCRDC has contracted CGL Analytics to conduct a temperature analysis and predict which cities meet these requirements based on data from 1913 to 2013. The recommended top location will have the most projected months <= 32 and be a major metropolitan area in order to attract and maintain high quality employees.

### Purpose and Reasons Why Topic was Selected:

Global climate change has started to become an issue due to changing temperatures around the globe. In order to address this issue, we want to make it possible for individuals to get machine learned temperature predictions based on weather data from the past 100 years. This will help FCRDC to predict future temperatures before purchasing land or property for their new location.

### Questions We Hope to Answer with the Data:

1) Which cities in our dataset have an average temperature of 32 degrees or below?

2) Out of the results, which cities are located in a major metropolitan area?

## Data Source Description

- [CSV file from Kaggle](https://www.kaggle.com/berkeleyearth/climate-change-earth-surface-temperature-data?select=GlobalLandTemperaturesByCity.csv)
- GlobalLandTemperaturesByCity.csv(532.83 MB)
- [CleanedGlobalLandTemperaturesByMajorCity.csv](https://cgl-analytics-city-data.s3.us-east-2.amazonaws.com/CleanedGlobalLandTemperaturesByMajorCity.csv) 

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

1) Presentation

https://docs.google.com/presentation/d/1WZC2bXoTtV8-X5zU-iLXQ76XYvIbZpF_7lVa6u-mnTE/edit?usp=sharing

2) Machine Learning Model

How we are deciding what model to use:
![ml_map](https://user-images.githubusercontent.com/82718969/139357640-739c48d6-e16e-47ff-88aa-5c29684e54ef.png)

Based on our machine learning chart we will be using: Regression

We will use temperature data by month on Major cities to predict the monthly temperatures of cities that fall within our CEO's specifications for a new headquarters.

3) Database

4) Dashboard
