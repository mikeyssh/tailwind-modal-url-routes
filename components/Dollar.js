import styles from './styles.module.css';

const Post = ({ id, pathname }) => {
  return (
    <div className={styles.post}>
      I am the dollar {id}; my pathname is: {pathname}
    </div>
  );
};

export default Post;
