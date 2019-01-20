import DS from 'ember-data';

export default DS.Model.extend({
    userRating: DS.attr("number"),
    imageUrl: DS.attr("string"),
    giphyUrl: DS.attr("string"),
    giphyId: DS.attr("string")
});
