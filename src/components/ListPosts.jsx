import Posts from "./Posts";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { Modal } from "./Modal";
import { MdPostAdd } from "react-icons/md";

export const ListPosts = (props) => {
  return (
    <>
      <ul className={classes.posts}>
        {props.listposts && props.listposts.length > 0 ? (
          props.listposts.map((post) => (
            <li key={post.id}>
              {/* Open modal only if the modalIsVisible matches the post's ID */}
              {props.modalIsVisible === post.id && (
                <Modal onClose={props.onCloseModal}>
                  <NewPost
                    id={post.id}
                    onChangeNameHandler={props.onChangeNameHandler}
                    onChangeBodyHandler={props.onChangeBodyHandler}
                    onClose={props.onCloseModal}
                  />
                </Modal>
              )}

              <p>
                <button
                  className={classes.button}
                  onClick={() => props.onOpenModal(post.id)}
                >
                  <MdPostAdd size={18} />
                  New Post
                </button>
              </p>
              <Posts author={post.author} body={post.body} id={post.id} />
            </li>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </ul>
    </>
  );
};
