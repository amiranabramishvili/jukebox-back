import { Album } from "src/album/entities/album.entity";
import { Author } from "src/author/entities/author.entity";
import { BaseEntity } from "src/base/base.entity";
import { Playlist } from "src/playlist/entities/playlist.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('music')
export class Music extends BaseEntity {
    @Column()
    name!: string;

    @Column()
    url!: string;

    @ManyToOne(() => Playlist,(playlist) => playlist.musics)
    playlists: Playlist

    @ManyToOne(() => Author,(author) => author.music)
    author: Author

    @ManyToOne(() => Album,(album) => album.music)
    album: Album
}