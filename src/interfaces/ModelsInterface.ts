import { UserModel } from "../models/userModel";
import { PostModel } from "../models/PostModel";
import { CommentModel } from "../models/CommentModel";

export interface ModelsInterface {
  Comments: CommentModel;
  Post: PostModel;
  User: UserModel;
}