import { DecisionTreeContainer } from './decision-tree-container'

export default DecisionTree = (JSONdata, resultsHeader) => {
  return (
    <DecisionTreeContainer
      data={JSONdata}
      resultsHeader={resultsHeader}
    />
  )
}
