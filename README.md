
# Mini-Insta with GraphQL

A full stack web app with post, like/omment and realtime chat features.
Uses GraphQL as API layer


## Demo

Live site link :

https://divyanshu-insta-clone.netlify.app/


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`JWT_SECRET`: JWT secret (Server)

`DB_ACCESS` : Mongo connection URI (server)


## Features

- Uses GraphQL as API transport
- Stateless user authentication using JWT
- Live Chat
- Post: with body and image, CRUD
- Ability to comment/ like a post


## Run Locally

Clone the repo, and :

```bash
  cd server 
  npm install && npm start
  cd ../client 
  npm install && npm start
```
Remember to set env vars as described.
    
## Tech Stack

**Client:** React, Material UI, Apollo Client

**Server:** Node, Apollo Server v2, JSON Web Tokens

**Database** MongoDB Atlas


![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
## Screenshots

Home:
[![Screenshot-2022-07-11-00-26-44-1920x1080.png](https://i.postimg.cc/CLZyZkp4/Screenshot-2022-07-11-00-26-44-1920x1080.png)](https://postimg.cc/gnPtQwJw)
Post:
[![Screenshot-2022-07-11-00-46-16-1920x1080.png](https://i.postimg.cc/G36RxqQf/Screenshot-2022-07-11-00-46-16-1920x1080.png)](https://postimg.cc/w35n65n5)
