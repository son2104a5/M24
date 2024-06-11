class Song{
    readonly id: number;
    private name: string;
    private length: number;
    constructor(id: number, name: string, length: number){
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getSongInfo(){
        console.log(this.name, this.length);
    }
    changeSongInfo(){
        this.name = "Đi về nhà"
        this.length = 100;
    }
}

let song1 = new Song(1, "Lối nhỏ", 200)

song1.getSongInfo()

song1.changeSongInfo()