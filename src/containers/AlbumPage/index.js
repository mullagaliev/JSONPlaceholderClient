import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumPage from '../../components/AlbumPage';
import { connect } from 'react-redux';
import { getPhotosByAlbumId } from '../../actions';

class ContainerAlbumPage extends Component {
  componentDidMount() {
    const { albumId } = this.props;
    this.props.dispatch(getPhotosByAlbumId(albumId));
  }

  render() {
    const { photos, albumId } = this.props;
    return (<AlbumPage items={photos} albumId={albumId}/>);
  }
}

ContainerAlbumPage.propTypes = {};
ContainerAlbumPage.defaultProps = {};

function mapStateToProps(state) {
  return {
    photos: state.album.photos
  };
}

export default connect(mapStateToProps)(ContainerAlbumPage);
