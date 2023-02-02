import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import s from './ImageGallery.module.css';
const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={s.gallery}>
      <ImageGalleryItem images={images} onClick={onClick} />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
