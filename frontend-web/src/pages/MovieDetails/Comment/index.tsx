import {ReactComponent as StarIcon} from '../../../core/assets/images/star.svg'
import './styles.scss';

const Comment = () => {

    return (
        <div className="comment-container">
            <div className="comment-header">
                <div className="comment-icon-container">
                    <StarIcon/>
                </div>
                <div className="comment-author-container">
                    <h1 className="comment-author-name">Maria Silva</h1>
                </div>
            </div>
            <div className="comment-content-container">
                <p className="comment-content">Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
            </div>
        </div>
    );
};

export default Comment;