import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory,
  updateAccountDetails,
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
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);

router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);

router.route("/c/:username").get(verifyJWT, getUserChannelProfile);
router.route("/history").get(verifyJWT, getWatchHistory);

export default router;

/*
That middleware will:

-Parse the incoming request body and extract any uploaded files.
-Validate that the uploaded files adhere to the specified limits and formats.
-Store the uploaded files in a designated location (e.g., on the server or in a cloud storage service).
-Provide information about the uploaded files to the subsequent middleware or route handler.
*/
