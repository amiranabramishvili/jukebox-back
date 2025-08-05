import { Album } from "src/album/entities/album.entity";
import { CreateMusicDto } from "src/music/dto/create-music.dto";
import { Music } from "src/music/entities/music.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BaseEntity } from "src/base/base.entity";
import { FileEntity } from "src/files/entities/file.entity";

@Entity()
export class Author extends BaseEntity {

    @Column({ type: 'varchar', length: 256 })
    firstName: string

    @Column({ type: 'varchar', length: 256 })
    lastName: string

    @Column({ type: 'text' })
    biography: string

    @OneToMany(() => Music, (music) => music.author)
    music: Music[]

    @OneToMany(() => Album, (album) => album.author)
    album: Album[]

    @OneToMany(() => FileEntity,(fileEntity) => fileEntity.author)
    file: FileEntity
}
