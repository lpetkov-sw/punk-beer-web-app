export class Beer {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public image: string,
        public isFavourite: boolean = false
    ) { }

    static adapt(item: any): Beer {
        return new Beer(
            item.id,
            item.name,
            item.description,
            item.image_url,
            item.is_favourite,
        );
    }
}