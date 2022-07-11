const initState = {
    filter: 'all',
    filters: ['all', 'active', 'completed'],
};

const GroupFilters = (state = initState, action) => {
    switch (action.type) {
        case 'SwitchFilter':
            return {
                ...state,
                filter: action.filter,
            };
        default:
            return state;
    }
};
export default GroupFilters;
