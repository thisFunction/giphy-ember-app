import DS from 'ember-data';

export default DS.Model.extend({
    totalCount: DS.attr('string'),
    count: DS.attr('string'),
    offset: DS.attr('string')
});
