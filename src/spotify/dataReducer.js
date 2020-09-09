const reduceTracks = (data) => {
    const { href, next, items, limit, offset } = data.tracks;

    let lightItems = [];
    items.forEach((value) => {

        const { id, album, artists, external_urls, name, preview_url } = value;

        const lightTrack = {
            id,
            name,
            artists,
            external_urls,
            preview_url,
            album: {
                id: album.id,
                name: album.name,
                external_urls: album.external_urls,
                images: album.images
            }
        };

        lightItems.push(lightTrack)
    });

    const ligthData = {
        tracks: {
            items: lightItems,
            href,
            next,
            limit,
            offset
        }
    }

    return ligthData;
};

module.exports = {
    reduceTracks
}