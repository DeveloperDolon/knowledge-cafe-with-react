import PropTypes from "prop-types"

export default function BookMark({item}) {
  return (
    <div>
      <h1 className="px-3 py-5 bg-white rounded-md font-semibold">{item.title}</h1>
    </div>
  )
}

BookMark.propTypes = {
    item: PropTypes.object
}