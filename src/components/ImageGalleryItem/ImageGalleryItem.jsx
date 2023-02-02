import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ id, tags, webformatURL, largeImageURL }) => {
    return (
      <li
        className={s.galleryItem}
        key={id}
        onClick={() => onClick({ largeImageURL, tags })}
      >
        <img className={s.galleryImage} src={webformatURL} alt={tags} />
      </li>
    );
  });
};

export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
