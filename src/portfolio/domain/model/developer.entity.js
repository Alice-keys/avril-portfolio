import { SocialLink } from './social-link.entity.js'

export class Developer {
    constructor({
                    name = '',
                    title = '',
                    bio = '',
                    photoUrl = '',
                    cvUrl = '',
                    email = '',
                    whatsapp = '',
                    linkedinUrl = '',
                    socialLinks = []
                }) {
        this.name = name
        this.title = title
        this.bio = bio
        this.photoUrl = photoUrl
        this.cvUrl = cvUrl
        this.email = email
        this.whatsapp = whatsapp
        this.linkedinUrl = linkedinUrl
        this.socialLinks = socialLinks.map(s => new SocialLink(s))
    }
}