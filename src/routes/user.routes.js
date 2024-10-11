import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    //This middleware is responsible for handling file uploads in your application. More details about this middleware is written below
    {
      name: "avatar",
      maxCount: 1, //Allows a maximum of 1 file to be uploaded for the avatar field.
    },
    {
      name: "coverImage",
      maxCount: 1, //Allows a maximum of 1 file to be uploaded for the coverImage field.
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

export default router;

/*
That middleware will:

-Parse the incoming request body and extract any uploaded files.
-Validate that the uploaded files adhere to the specified limits and formats.
-Store the uploaded files in a designated location (e.g., on the server or in a cloud storage service).
-Provide information about the uploaded files to the subsequent middleware or route handler.
*/
