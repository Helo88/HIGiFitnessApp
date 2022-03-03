# HIGE Female Fitness App (frontend part)

## Table of Contents

1. Description
2. General Functionality
3. App Architecture
4. Tools
5. Instructions
6. Running

## Description

- The graduation project for ITI .
- Build a web app that let a female users to exercise at home and help them have a healthy life by follow their progress in exercise , weight loss amount, water amount either by a real trainer or not.
- Registered user as trainee can choose plans for workout and yoga ,these plans are categorized according to difficulty level ( beginner , intermediate , hard) and if user inputs she has medical history,the app will suggest choosing beginner level plans or following up with private trainer .
- Our App provides Community Section for our registered users to allow trainers to share healthy tips and awarness aganist healthy lifestyle mistakes.

## General Functionality

### The App has 2 types of users :

1.  trainer (male , female)

- trainer just need to login as he/she already contact the app admin to join the trainers team
- trainer has the ability to follow up his/her chosen trainees by checking their weekly reports
- trainer can edit or accept trainee chosen favourite plan due to her report
- trainer can be a part of the small community that give the ability to add posts to be seen by trainees and see comments on every post

2.  trainee (female):

- trainee make an account to interact with workout , yoga plans and their exercises and choose one of each to add to the favorite and change in it as she wants and start to workout , if the trainee choose a trainer then he/she can edit these plans
- trainee has water tracker to track her water drinking progress
- trainee has weight tracker to track her weight losing or gaining progress
- trainee has access to community part to see trainer posts and make comments

3. any visitor to the app will only see home page, healthytips , gym , clothing parts

## App Architecture:

**_every folder represent what it includes and same with files_**

1. components folder

   - protected routes components:

     - `ForAllRoute.js` **_ routes that both trainer and trainee can access _**
     - `LoggedInRoute.js` **_ routes that only trainee can access _**
     - `ProtectedRoute.js` **_ routes to block access to login and sigup if you are already logged in _**
     - `TrainerRoute.js` **_ routes that only trainer can access _**

   - trainer components:

     - `ChooseYogaPlan.js` **_ to choose yoga plan for a trainee _**
     - `ChooseWorkoutPlan.js` **_ to choose workout plan for a trainee _**
     - `EditTrainerProfile.js`
     - `TrainerClient.js` **_ report for every trainee that the trainer has _**

   - trainee components:

     - `ChooseTrainer.js`
     - `FavPlans.js`
     - `StartWorkoutPlanExercise.js`
     - `StartYogaPlanExercise.js`
     - `TraineeProfile.js`
     - `Water.js` **_ track water amount _**
     - `WeightTracker.js` **_ track weight loss _**
     - `WaterReport.js` **_weekly report _**
     - `WeightReport.js` **_weekly report _**
     - `Reminder.js` **_todo list _**

   - components for trainer and trainee:

     - `Community.js`
     - `Posts.js`
     - `ShowWorkoutPlans.js`
     - `ShowYogaPlans.js`
     - `WorkoutExercises.js`
     - `YogaExercises.js`
     - `WorkoutPlanDetails.js`
     - `YogaPlanDetails.js`
     - `ResetPassword.js`

   - general components:
     - `JoinUs.js` **_ contact to app admin _**
     - `Clothing.js` **_ show tips for clothes and nearest shops to buy from _**
     - `Gym.js` **_ show disadvatages for gyms and nearest gyms to subscribe to if user wants _**
     - `HealthyTips.js `
     - `Homepage.js`
     - `Loader.js`
     - `Navbar.js`
     - `RegisterForm.js`

2. images folder
3. style folder
4. redux folder **_ use redux management tool for handle Reminder component_**
5. js folder **_ handler interceptor Function for login token _**

## Tools

1. CSS FrameWorks:

- Bootstrap
- Bulma

2. Packages:

- axios
- react-router-dom@5.0.0
- react-icons
- react-notifications
- react-bootstrap-icons
- sweetalert2
- @material-ui
- @date-io
- chart.js / react-chartjs-2
- @mui/material
- @fortawesome
- moment
- react-datepicker
- sfcookies
- react-slick
- react-bootstrap-validation
- chartjs-plugin-datalabels

## Instructions

- `git clone` (https://github.com/Helo88/HIGiFitnessApp.git)
- `cd` into your folder and run `npm install` to install all project dependencies.

## Running

- start server with `npm start` / `npm run start` to launch.
- open `http://localhost:3000/` in the browser.
