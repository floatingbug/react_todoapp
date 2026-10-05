export default function TodoItems({ items, onRemoveItem }) {
  function removeItem(itemId) {
    onRemoveItem(itemId)
  }

  return (
    <div className="todo-items">
      {
        items.map(item => {
          return (
            <div className="item" key={item.itemId}>
              {item.text}
              <button
                type="button"
                onClick={() => removeItem(item.itemId)}
              >
                remove
              </button>
            </div>
          )
        })
      }
    </div>
  )
}
