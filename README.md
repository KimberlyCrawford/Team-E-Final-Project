![Title.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Title.png)

#### Final Project by Team E: CGL Analytics (Kimberly Crawford, Gary Goodman, and Trevor Lanouette)

## Overview
An analysis to predict temperature changes in major cities with average <=32 degrees Fahrenheit. Topic: Temperature Predictions for Property Investment Decisions

## Purpose

### Reasons Why Project Topic was Selected:

Our team wanted to select a topic that would showcase our experiences and skills developed throughout this course. As we glanced back through the modules, a few challenges stood out to us that we all enjoyed working on: 

- Module 6: WeatherPy with Python APIs
- Module 8: ETL using SQL
- Module 11: Using JavaScript and HTML
- Module 13: Mapping Earthquakes with JavaScript and APIs
- Module 17: Supervised Machine Learning.

Global climate change has started to become an issue due to changing temperatures around the globe. In order to address this issue, our team (CGL Analytics) was interested in creating a machine learned model for predicting temperature changes when it comes to making decisions about property investments.

### Our Scenario: 

Fries Cryogenic Research and Development Center (FCRDC) is currently located in Gotham City, New Jersey and operated by the family of Dr. Victor Fries, a known scientist with high intelligence and skills in physics, engineering, genetics, computer science, chemistry, and medical science. In 2001, Dr. Fries was severely injured from an equipment malfunction and laboratory explosion while conducting a cryogenic technology experiment to cure his terminally ill wife. The accident took his wife’s life and drastically lowered his body temperature forcing him to wear a cryogenic suit to survive. As a result of the accident, he fell into a deep depression and turned to crime under the alias, Mr. Freeze. Fortunately, he was captured by Batman and Robin and has been incarcerated for the past 20 years in Antarctica. During his time in prison, Mr. Freeze was rehabilitated and positively contributed to the research conducted by FCRDC. With his parole hearing coming up and anticipation of his release, he wants to relocate FCRDC’s headquarters to a major city with an average temperature of <=32 degrees Fahrenheit. The CEO of FCRDC has contracted CGL Analytics to conduct a temperature analysis that predicts major cities that meet these requirements and wants CGL Analytics to recommendation the top five locations that will have the most projected months <= 32 and be in a major metropolitan area to attract and maintain high quality employees. The machine learning model will help FCRDC predict future temperatures before purchasing land or property for their new location.

### Project Goals: 

The goals of this project was to download data for analysis, create a database to house the data, apply machine learning to tell a story about the data, and display the results in a dashboard. 

## Data Source Description

- Our dataset was located on Kaggle's Climate Change: Earth Surface Temperature Data page and comes from the Berkeley Earth data page (http://berkeleyearth.org/data/). The dataset selected includes [Global Land Temperatures By Major City](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/GlobalLandTemperaturesByMajorCity.csv)

![Kaggle_original.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Kaggle_original.png)

- The following data was cleaned for analysis and resulted in a dataset with 239,177 records: [CleanedGlobalLandTemperaturesByMajorCity.csv](https://cgl-analytics-city-data.s3.us-east-2.amazonaws.com/CleanedGlobalLandTemperaturesByMajorCity.csv) 

## Questions CGL Analytics Hopes to Answer with the Data:

1) Which major cities in our dataset have an average temperature of <=32 degrees Fahrenheit?

2) Out of the results, which cities are located in a major metropolitan area?

3) What are the top five locations that will have the most projected months <= 32 and be in a major metropolitan area?

## Data Exploration Phase

The data consisted of 239,177 observations with 7 columns: dt, AverageTemperature, AverageTemperatureUncertainty, City, Country, Latitude and Longitude. Five variables were objects while two were decimals (float64).

![Extract.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Extract.png)

![Data_types.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Data_types.png)

## Data Preprocessing

Data was explored using the ETL process: 

![ETL.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/ETL.png)

Step 1 (Extract)- the data was read into a Panda DataFrame with 239,177 rows and 7 columns.
Step 2 (Transform) - the data was cleaned and structured into a DataFrame identifying the top 5 cities with average temperature <=32.
Step 3 (Load) - the data was written into a database for storage with 5,565 rows and 7 columns.

![ETL_steps.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/ETL_steps.png)

## Data Analysis Phase

### Feature Engineering

Predictive models consist of an outcome variable and predictor variables, and it is during the feature engineering process that the most useful predictor variables are created and selected for the predictive model. Feature engineering in ML consists of four main steps: Feature Creation, Transformations, Feature Extraction, and Feature Selection.

Source: [What is Feature Engineering?](https://www.omnisci.com/technical-glossary/feature-engineering)

![Feature_engineering.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Feature_engineering.png)

### Data Split for Training and Testing

![Stats_whole.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Stats_whole.png)

![Stats_1stdecade.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Stats_1stdecade.png)

![Split.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Split.png)

![Model_215.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Model_215.png)

![Model_216.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Model_216.png)

### Machine Learning Model

Based on Scikit-learn Algorithm Cheat Sheet, our team needed to build a regression machine learning model because our target variable was quantitative. 

![scikit-learn_cheatsheet.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/scikit-learn_cheatsheet.png)

We chose to build a Sarima model, because Sarima learns based on cyclic patterns that are programed into the model before training. The model trains on the previous data in order to make predictions for the future. This works great for weather data as it is cyclic by season through each year. We will use temperature data by month on Major cities to predict the monthly temperatures of cities that fall within our CEO's specifications for a new headquarters.

![Sarima.jpg](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Sarima.jpg)

Below are the steps in the time series model:

![Time_series.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Time_series.png)

#### Benefits and Limitations

- Benefits: SAMIRA is the only statistical method able to outperform, but without a statistical difference, the following machine learning algorithms: ANN, SVM, and kNN-TSPI. Statistical methods based on auto regression and Moving Averages (MA) are considered the state-of-the-art for time series modeling and prediction. 

- Limitations: Such forecasting accuracy comes at the expense of a larger number of parameters. Usage of these parametric methods requires sophisticated mathematical concepts as well as vast technical expertise for the establishment of the model’s parameters.

Source: Evaluation of statistical and machine learning models for time series prediction: Identifying the state-of-the-art and the best conditions for the use of each model

#### Changes in Model Choice

Explanation of changes in model choice (if changes occurred between the Segment 2 and Segment 3 deliverables)

#### How Model was Trained

The time series prediction process covers six steps:
- Step 1 partitions the time series in two sequences: one before the prediction horizon, which is intended to the model training (building and fit); and another after that period, which is used to test (evaluate) the quality of the fitted model. 

- Step 2 chooses the predictive model structure based on data characteristics and estimates the parameters using some search technique. Usually, the algorithm that implements this technique receives as input the training sequence, which is subdivided into subsequences (samples) for training and validation, and a set of predefined parameters. At each iteration, the algorithm seeks for parameters values that minimize the predictive error of the model. 6 Test Sequence Training Sequence Time Series y(t) t t y(t) 1 0.05 2 0.10 3 0.15 4 0.20 ⁞ ⁞ 97 0.15 98 0.20 99 0.25 100 0.30 ① Parameter ② Estimation Model Building ③ and Model Fit Prediction ④ of Values Predicted Sequence Performance ⑤ Evaluation y(t) t Prediction of ⑥ Future Values Figure 4: Time series prediction process Global Local Exponential Smoothing ARIMA Prediction Methods Parametric Non-parametric Figure 5: Hierarchy of approaches for time series prediction 

- Step 3 builds the model with the previously found parameters values and fits the training sequence data. 

- Step 4 model is then extrapolated, in the fourth step, for the periods of the test sequence. Evidently, the prediction error of the model reflects the chosen values for the parameters. Such error can be amplified for long time horizons. The fourth step also chooses the strategy to predict the values of a time series several periods ahead (prediction horizon h > 1). The most intuitive strategy is known as multi-step (or recursive), where the prediction of h > 1 is conducted h successive times considering a predictive model with h = 1 [3]. After the model’s extrapolation, the predicted value or the respective actual value can be employed to calculate the next prediction. In this paper, when the predicted values are used, we called the strategy of multi-step-ahead with approximate iteration. Otherwise, when the actual values are adopted, the strategy is called multi-step-ahead with updated iteration. 

- Step 5 compares the predicted values to the test sequence to measure the model’s accuracy. The performance analysis is essential given that distinct models may have similar adjustments, but result in significantly different predictive values. 

- Step 6 makes predictions for future periods of the time series. This step should monitor the prediction error as soon as the actual values of the series arrive. This monitoring aims to indicate when it is necessary to update the model with new data or readjust its parameters since the distribution of most recent data is distinct from old data. 

#### SAMIRA Results

![Results_0.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Results_0.png)

![Results_2.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Results_2.png)

![Prediction_comparison.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Prediction_comparison.png)

![Prediction1_vs_Actual.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Prediction1_vs_Actual.png)

![Prediction2_vs_Actual.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Prediction2_vs_Actual.png)

#### Model’s Confusion Matrix & Final Accuracy Score

??????

## Database

- A SQL database was created based on the following ERD:

![ERD.JPG](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/ERD.JPG)

-The following datasets were imported into pgAdmin:

[Datasets](https://github.com/KimberlyCrawford/Team-E-Final-Project/tree/main/Data)

- The following tables were created, joined and exported to CSV files:

![CVS_cold_cities.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/CVS_cold_cities.png)

![CVS_joins.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/CVS_joins.png)

- See the following text file for queries: https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Database/queries.sql.txt 

Database Connection

![Database_connection.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Database_connection.png)

![Tables_joined.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Tables_joined.png)

![Table_to_Database.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Table_to_Database.png)

## Technologies Used for Each Step of the Project:

Python was used to prepare and explore the data, as well as build machine learning model. 
- PostgreSQL was used to write queries and view results while pgAdmin 4 Database was used to store cleaned data.  
- AWS Relational Database was created to store data remotely.
- JavaScript was used to create tables and build a dashboard to present the results. 
- Google Slides was used to prepare and deliver the presentation that walks the class through the project, step by step.

See [Packages and Libraries](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/requirements.txt) for a list used in all technologies.

## Dashboard

The following is a screenshot of our final Dashboard presented to FCRDC:

![entire_map.JPG](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/entire_map.JPG)

Below is a screenshot of the top major city recommended for new headquarters:

![Maptopchoice.JPG](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Maptopchoice.JPG)

## GitHub Branches Created During Project

The following branches were created throughout the project, merged into main, and then deleted.

#### 1) Presentation 

[Presentation](https://docs.google.com/presentation/d/1WZC2bXoTtV8-X5zU-iLXQ76XYvIbZpF_7lVa6u-mnTE/edit?usp=sharing)

![Presentation.png](https://github.com/KimberlyCrawford/Team-E-Final-Project/blob/main/Static/images/Presentation.png)

#### 2) Machine Learning Model (See above Data Analysis Phase section)

#### 3) Database (See above Database section)

#### 4) Dashboard (See above Dashboard section)

## Recommendation for Future Analysis

- Add additional city datasets to provide more information about the top five cities, so upper management can thoroughly compare the top five cities.
- ???
- ???

## Anything Team Would Have Done Differently

- Selected a different topic, since the machine learning model was so extensive.
- Scheduled more group meetings to collaborate on code and help teammates.

## Final Project Deliverables in Four Segments

### First Segment: Sketch It Out
Decide on your overall project, select your question, and build a simple model. You'll connect the model to a fabricated database, using comma-separated values (CSV) or JavaScript Object Notation (JSON) files, to prototype your idea.

### Second Segment: Build the Pieces
Train your model and build out the database you'll use for your final presentation.

### Third Segment: Plug It In
Connect your final database to your model, continue to train your model, and create your dashboard and presentation.

### Fourth Segment: Put It All Together
Put the final touches on your model, database, and dashboard. Lastly, create and deliver your final presentation to your class.
