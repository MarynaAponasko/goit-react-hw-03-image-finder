import { Component } from 'react';

import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChangeState = ({ currentTarget }) => {
    const { name } = currentTarget;
    this.setState({
      [name]: currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { search } = this.state;
    this.props.onSubmit({ search });
  };

  resetSearch = () => {
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={search}
            onChange={this.handleChangeState}
            required
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
