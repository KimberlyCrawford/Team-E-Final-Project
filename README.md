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

- Our dataset was located on Kaggle's Climate Change: Earth Surface Temperature Data page and comes from the Berkeley Earth data page (http://berkeleyearth.org/data/). The dataset selected includes [Global Land Temperatures By Major City](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/GlobalLandTemperaturesByMajorCity.csv)

![Kaggle_original.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Kaggle_original.png)

- The following data was cleaned for analysis and resulted in a dataset with 239,177 records: [CleanedGlobalLandTemperaturesByMajorCity.csv](https://cgl-analytics-city-data.s3.us-east-2.amazonaws.com/CleanedGlobalLandTemperaturesByMajorCity.csv) 

## Data Exploration Phase

Data was explored using the ETL process: 

![ETL.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/ETL.png)

## Analysis Phase

- Data Visualization - develop the hypothesis or insights to explore and evaluate the data using Tableau. 
- Statical Analysis - summarize the data and it’s understanding in terms of model and graphs apart from this it also explains how the data is related to the underlying real world. the statical analysis is also used to identifying the pattern or trends for predictive analytics which helps to make the business decision, it also helps to determine the statical significance of the data set.
- Data Model Development - deploy a model with predictive capabilities.
- Recommendations/Report/Story - data analytics process where analysis decision is summarized and the result or consequences of the analysis process is represented in terms of story, report, recommendations and PPT, tableau and SAS application plays an important role to summarize the analysis process via a report or story building.

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

#### 1) Presentation 

[Presentation](https://docs.google.com/presentation/d/1WZC2bXoTtV8-X5zU-iLXQ76XYvIbZpF_7lVa6u-mnTE/edit?usp=sharing)

![Presentation.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Presentation.png)

#### 2) Machine Learning Model

Machine learning is the use of statistical algorithms to perform tasks such as learning from data patterns and making predictions. A machine learning model is presented with a dataset, the model algorithms analyze the data and attempt to identify patterns, and makes predictions on new data. Since our dataset deals with labeled continuous data variables, we will be using a supervised regression learning model. 

![SARIMA-QUÉ-ES-1-860x280](https://user-images.githubusercontent.com/82718969/141689949-9dee84cd-5d99-4921-b23e-401ceb667c39.jpg)

Based on our machine learning chart we will be using: Sarima

We will use temperature data by month on Major cities to predict the monthly temperatures of cities that fall within our CEO's specifications for a new headquarters.

#### 3) Database

- A SQL database was created based on the following ERD:

![filename.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/filename.png)

-The following datasets were imported into pgAdmin:

- The following tables were created, joined and exported to CSV files:

![CVS_cold_cities.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/CVS_cold_cities.png)

![CVS_joins.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/CVS_joins.png)

- See the following text file for queries: https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Database/queries.sql.txt

#### 4) Dashboard

The following is a screenshot of our Dashboard blueprint:

![Dashboard.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Dashboard.png)


## Final Project Deliverables

### First Segment: Sketch It Out

Decide on your overall project, select your question, and build a simple model. You'll connect the model to a fabricated database, using comma-separated values (CSV) or JavaScript Object Notation (JSON) files, to prototype your idea.

### Second Segment: Build the Pieces

Train your model and build out the database you'll use for your final presentation.

### Third Segment: Plug It In

Connect your final database to your model, continue to train your model, and create your dashboard and presentation.

### Fourth Segment: Put It All Together

Put the final touches on your model, database, and dashboard. Lastly, create and deliver your final presentation to your class.