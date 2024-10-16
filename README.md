# Youtube Backend

- [Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share)

# Summary of this project

This is a complex backend project that is built with node.js, express.js, mongodb, mongoose, jwt, bcrypt, and many more. This project is a complete backend project that has all the features that a backend project should have.
We are building a complete video hosting website similar to youtube with all the features like login, signup, upload video, like, dislike, comment, reply, subscribe, unsubscribe, and many more.

Project uses all standard practices like JWT, bcrypt, access tokens, refresh Tokens and many more. We have spent a lot of time in building this project and we are sure that you will learn a lot from this project.

Start with npm init

**Clone the repository:**

```bash
git clone https://github.com/ritammaity55/youtube-backend.git
```

**Change the directory to the following folder:**

```bash
cd '.\Youtube Backend\'
```

**Install dependencies:**

```bash
npm i nodemon
npm i prettier
npm i mongoose
npm i express
npm i dotenv
npm i cookie-parser
npm i cors
npm i mongoose-aggregate-paginate-v2
npm i bcrypt
npm i jsonwebtoken
npm i cloudinary
npm i multer
```

**Store the keys in the '.env' file**

Create a .env file in the root directory of your project. Paste the respective values for your server port, CORS origin, MongoDB URI, token secrets and expiry times, and Cloudinary keys.

```bash
PORT=
CORS_ORIGIN=
MONGODB_URI=
ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

**Run the development server:**

```bash
 npm run dev
```
