// Actions
export const FETCH_RECENT = 'fetchRecentBills';
export const FETCH_SEARCH = 'fetchSearchBills';
export const FETCH_UPCOMING = 'fetchUpcomingBills';
export const FETCH_NEXT_PAGE = 'fetchNextPage';

export const FETCH_BY_SUBJECT = 'fetchBillsBySubject';
export const FETCH_RECENT_SUBJECTS = 'fetchRecentBillSubjects';
export const FETCH_SUBJECTS_BY_KEYWORD = 'fetchBillSubjectsByKeyword';
export const FETCH_POPULAR_SUBJECTS = 'fetchPopularBillSubjects';
export const FETCH_SUBJECTS_BY_LETTER = 'fetchBillsAlphabetically';

// Mutations
export const SET_RESULTS = 'setResults';
export const SET_OFFSET = 'setPaginationOffset';
export const SET_SEARCH_PARAMS = 'setPrevSearchParams';
export const IS_LOADING = 'isLoading';