import { Album } from "src/album/entities/album.entity";
import { Author } from "src/author/entities/author.entity";
import { BaseEntity } from "src/base/base.entity";
import { Music } from "src/music/entities/music.entity";
import { Playlist } from "src/playlist/entities/playlist.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity()
export class FileEntity extends BaseEntity {

    @Column()
    url: string;

    @Column()
    key: string;

    @Column()
    bucket: string;

    @Column()
    fileName: string;

    @OneToOne(() => Music,(music) => music.file)
    music: Music

    @OneToMany(() => Album,(album) => album.file)
    album: Album[]

    @ManyToOne(() => Playlist,(playlist) => playlist.file)
    playlist: Playlist

    @ManyToOne(() => Author,(author) => author.file)
    author: Author


}
