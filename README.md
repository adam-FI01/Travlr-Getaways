**Architecture:**

This application uses Express HTML with handlebars. It works by using server-side rendering to make sure that the content could be dynamic.
The reasoning behind this is because it can help render the static information shown to the user. 

The application also Angular which offers the features of building out single page applications. This can make applications traditionally go from slow and boring, to a fast and modern user experience. 
The reason why this happens is because SPA allows for the rendering of content within the client-side. This can make it where the state is more manageable compared to the traditional approach. 

The reason that the backend used a NoSQL MongoDB database is because of how it handles the schema behind it. Since the projects reads data as JSON, having it setup this way instead of having dedicated columns and rows offers for better flexibility.


**Functionality**

The difference between JSON and JavaScript is that JSON is just a texted-based format that will allow for the storage, exchange, and deletion of data. JavaScript is a programming language. JSON ties into the backend as the backend will CRUD a given dataset and return the modification that is formatted into JSON from the database. The backend will take this and give it to the frontend that will read the data and make modifications from there. The frontend could also have the option of changing the data via a RESTful API from the backend that will ultimately lead to the same result.  

One of the places where the code had to be refactored was with the trip card and trip listing components. Instead of having the both components combined, I eventually set it up to where they were both as reusable as possible to ensure best practices of OOP. This made it where the components could be scaled and maintained better than before. 


**Testing**

To test the endpoints, I used Postman to call the routes. This made it where the UI didn't have to be connected to the backend in order to test the endpoint. With the added layer of security, I had to make sure that the JWT token that I used was current. If it wasn't, I ended up getting a 401 error due to lack of authorization. For the user themselves, they would get this JWT token when they log into the application with the correct username and password. The JWT token will then get stored into the session storage for the backend to read each time there is a call to an endpoint. 


**Reflection**

This course has helped me with fulfilling my professional goals because it was one of the first classes that really went into detail on how a website gets created. Although it might not be the most safe or usable as of now, it really showed me all the components needed for a production ready application. I feel as if I mastered the art of describing the elements needed in building a website. The three main things needed are a frontend, backend, and somewhere to store this data. There is a lot more that goes into web development, but the three of those make up the pillars for the creation of this. Having this knowledge will help give both myself a meaningful career, and employers a valuable employee. 
