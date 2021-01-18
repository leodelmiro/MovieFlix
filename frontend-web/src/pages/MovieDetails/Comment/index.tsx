import {ReactComponent as StarIcon} from '../../../core/assets/images/star.svg'
import './styles.scss';

type Props = {
    author: String;
    comment: String;
}

const Comment = ({author, comment}: Props) => {

    return (
        <div className="comment-container">
            <div className="comment-header">
                <div className="comment-icon-container">
                    <StarIcon data-testid="star-icon"/>
                </div>
                <div className="comment-author-container">
                    <h1 className="comment-author-name">{author}</h1>
                </div>
            </div>
            <div className="comment-content-container">
                <p className="comment-content">{comment}</p>
            </div>
        </div>
    );
};

export default Comment;