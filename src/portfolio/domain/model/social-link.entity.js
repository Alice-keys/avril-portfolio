export class SocialLink {
    constructor({
                    platform = '',
                    url = '',
                    iconUrl = ''
                }) {
        this.platform = platform
        this.url = url
        this.iconUrl = iconUrl
    }
}