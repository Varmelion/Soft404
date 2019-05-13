import { connect } from "react-redux";
import PostsList from "./PostsList";
import { getPostsMiddleware } from "../actions/postActions";

const mapStateToProps = state => {
  return {
    posts: state.posts,
    userPhoto: state.user.Photo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPostsMiddleware())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
