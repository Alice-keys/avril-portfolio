import { SocialLink } from '../domain/model/social-link.entity.js'

export class SocialLinkAssembler {
    static toEntityFromResource(resource) {
        return new SocialLink(resource)
    }

    static toEntitiesFromResource(resource) {
        return resource.map(item => this.toEntityFromResource(item))
    }
}