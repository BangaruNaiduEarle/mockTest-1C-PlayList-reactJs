import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongItem = props => {
  const {each, updateList} = props
  const {id, imageUrl, name, genre, duration} = each

  const onClickDelete = () => {
    updateList(id)
  }

  return (
    <li className="list-item">
      <div className="allItems">
        <div className="imageNameContainer">
          <img src={imageUrl} alt="track" className="musicImage" />
          <div className="NameGenreContianer">
            <p className="musicName">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>

        <div className="durationDeleteContainer">
          <p className="duration">{duration}</p>
          <button
            type="button"
            data-testid="delete"
            className="button"
            onClick={onClickDelete}
          >
            <AiOutlineDelete className="deleteIcon" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default SongItem
