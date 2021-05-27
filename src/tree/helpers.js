export const findNodes = (options = [], targetID, parents = []) => (
  options.map(({ id, name, children }) => {
    if (targetID === id) {
      return [...parents, { id, name, children }]
    }
    return findNodes(children, targetID, [...parents, { id, name, children }])
  })).flat()

const findSimilarNodes = (options = [], value) => (options.map(({ id, name, children }) => {
  if ((name.toLowerCase()).includes(value.toLowerCase())) {
    return id
  }
  return findSimilarNodes(children, value)
})).flat()

export const searchedOptions = (options, search) => (
  findSimilarNodes(options, search).map((id) => findNodes(options, id))
)
