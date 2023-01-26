
import FeedItem from './shared/FeedItem.jsx'

function EditableFeedItems(props) {
  let feedItems = props.feedItems

  return (
    <>
      { feedItems.map((feedItem) => {
          return <FeedItem
            feedItem={feedItem}
            key={feedItem.id}
            onDelete={ props.onDelete }
            onVisibilityChange={ props.onVisibilityChange }
          />
        })
      }
    </>
  );
}

export default EditableFeedItems
