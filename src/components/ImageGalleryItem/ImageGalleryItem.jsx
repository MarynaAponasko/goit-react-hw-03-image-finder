import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => {
  return (
    <li
      className={s.galleryItem}
      onClick={() => onClick({ largeImageURL, tags })}
    >
      <img className={s.galleryImage} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
