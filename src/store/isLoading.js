export const isLoading = (state, {propsPath, is}) => {
  if (propsPath == '') {
    state.loading = is;
  } else {
    let mockState = state;
    let props = propsPath.split('.');
    let reducedMockState = props.reduce((a, b) => {
      mockState = mockState[b];
      return mockState;
    }, mockState)
    reducedMockState.loading = is;
  }
}