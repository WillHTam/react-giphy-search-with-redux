## Giphy with Redux
### Adding redux to https://github.com/WillHTam/react-giphy-search

```
App <--(state.term)-- SearchBar.js
    --(gifs)--> GifList.js --(gifs)--> GifItem.js
    --(selectedGif & modalIsOpen) --> GifModal.js
```

- The previous project was done entirely with the structure above to send state back and forth with props
- Now add Redux to store the entire state of the application in a store, so all components will get their state directly from the store. They also inform the store of any changes to make instead of doing it themselves.
- A single source of truth instead of constructors in App & SearchBar
- Instead of using setState to write to state tree directly, dispatch an action
object. Requires a type.
- Reducers make the changes. Take two arguments: previous state and an action,
and return the next state as a new object. Similar to using 'Save As', never
mutates the state directly but instead copies, modifies, and then returns it.
-
