import moment from 'moment';

const filters = {
    sortBy: 'date',
    startdate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startdate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };