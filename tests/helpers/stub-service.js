import Service from "@ember/service";
import {getContext} from '@ember/test-helpers';

let stubService = (name, hash = {}) => {
    let stubService = Service.extend(hash);

    let {owner} = getContext();
    owner.register(`service:${name}`, stubService);
}

export default stubService;