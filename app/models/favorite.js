import DS from 'ember-data';

export default DS.Model.extend({
    userRating: DS.attr("number"),
    title: DS.attr("string"),
    imageUrl: DS.attr("string"),
    giphyId: DS.attr("string")
});
