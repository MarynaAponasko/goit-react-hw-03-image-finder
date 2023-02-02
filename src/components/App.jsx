import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { fetchImages } from 'services/fetch-api';

import s from '../components/App-module.css';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: [],
    loading: '',
    error: '',
    totalImages: '',
    infoForModal: '',
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { searchValue, page } = this.state;
    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.fetchGalleryImages();
    }
  };

  async fetchGalleryImages() {
    try {
      this.setState({ loading: true });
      const { searchValue, page } = this.state;
      const { data } = await fetchImages(searchValue, page);

      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
        totalImages: data.totalHits,
      }));
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  handlerSubmit = ({ search }) => {
    this.setState({
      searchValue: search,
      images: [],
      page: 1,
      totalImages: null,
    });
  };

  handlerLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = ({ largeImageURL, tags }) => {
    this.setState({
      infoForModal: { largeImageURL, tags },
    });
  };
  closeModal = () => {
    this.setState({
      infoForModal: '',
    });
  };

  render() {
    const { loading, infoForModal, images, totalImages } = this.state;
    const { handlerSubmit, closeModal, openModal, handlerLoadMore } = this;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={handlerSubmit} />
        {loading && <Loader />}
        {infoForModal && <Modal info={infoForModal} closeModal={closeModal} />}
        <ImageGallery images={images} onClick={openModal} />

        {images.length < totalImages && <Button onClick={handlerLoadMore} />}
        {/* {images.length  === totalImages && (
          <p>
            We don't have more images for showing. Please enter the other search
            word.
          </p>
        )} */}
      </div>
    );
  }
}

export default App;
