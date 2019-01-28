import DS from 'ember-data';

export default DS.Model.extend({
    totalCount: DS.attr('number'),
    count: DS.attr('number'),
    offset: DS.attr('number')
});
