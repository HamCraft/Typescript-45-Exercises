function make_album(artist: string, title: string, tracks?: number):
{ artist: string; title: string; tracks?: number }
{
    const album = {
        artist,
        title,
        tracks
    };

    if (tracks !== undefined)
    {
        album.tracks = tracks;
    }

    return album;
}

// Example function calls
const album1 = make_album('Ed Sheeran', 'Shape Of You');
const album2 = make_album('Artist 2', 'Album 2', 12);
const album3 = make_album('Artist 3', 'Album 3', 8);

console.log(album1);
console.log(album2);
console.log(album3);


console.log(`${album1.artist}, ${album1.title}, ${album1.tracks}` )
console.log(`${album2.artist}, ${album2.title}, ${album2.tracks}` )
console.log(`${album3.artist}, ${album3.title}, ${album3.tracks}` )