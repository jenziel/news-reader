<div align="center">

# News Reader 
#### (take-home challenge)

</div>

### Abstract
This application aims to display real-time news articles around the world.

### Key Features:
- **Search Feature:** Users can search recent headlines by keyword.
- **Top Headlines:** Users can stay informed on current events by browsing top headlines for a given day. 
- **Detailed View:** Users can click on article previews to see an enlarged photo and a link to the full article.
- 
[Deployed Site](https://news-reader-infve7h6c-jenziel.vercel.app/)

### Preview
#### Homepage
![Screenshot 2024-01-02 at 3 47 29 PM](https://github.com/jenziel/news-reader/assets/130857864/a2a7b610-ad97-41f1-9936-5216348402c5)

#### Detailed View
<img width="1439" alt="Screenshot 2024-01-02 at 4 24 17 PM" src="https://github.com/jenziel/news-reader/assets/130857864/afbec08b-fc74-4d14-be52-b081c6f51afe">


#### Design Inspiration
  New York Times 2-column UI
![nyt](https://github.com/jenziel/news-reader/assets/130857864/b07550be-607a-4b7b-94c3-6df969c579e5)



### Contributors
- [Jen Ziel](https://www.linkedin.com/in/jen-ziel-a02820278) 


### Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=!%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

</br>

### Achievements

- **Postman Mock Server Set-up:**
  - Successfully set up a mock server to avoid reaching daily network request limits associated with the newsapi.org database.
- **Working within Time Constraints:**
  - Made careful decisions to reach MVP within the suggested timeframe of 8 hours.

### Challenges

- **Generating Unique IDs:**
  - Overcame challenges associated with a lack of unique ids to identify each article in the dataset.
  - Created basic ids for each object in the dataset before storing them to state.
  - Began exploring the 3rd party library `uuid` to generate unique ids on the frontend, but ran out of time to implement it.


### Setup
1. Clone down this repository:
  ```
git clone git@github.com:jenziel/news-reader.git
  ```
2. `cd` into `news-reader` directory and run:
  ```
  npm install
  npm start
  ```
3. Enter the following url in your browser: http://localhost:3000/
