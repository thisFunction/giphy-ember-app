import Service from "@ember/service";
import {getContext} from '@ember/test-helpers';

const stubService = (name, hash = {}) => {
    const stubService = Service.extend(hash);
    const {owner} = getContext();
    
    owner.register(`service:${name}`, stubService);
}

export default stubService;