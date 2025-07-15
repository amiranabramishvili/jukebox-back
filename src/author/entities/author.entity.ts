import { Album } from "src/album/entities/album.entity";
import { CreateMusicDto } from "src/music/dto/create-music.dto";
import { Music } from "src/music/entities/music.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255 })
    firstName: string

    @Column({ type: 'varchar', length: 255})
    lastName: string

    @Column({ type: 'text' })
    biography: string

    @OneToMany(() => Music,(music) => music.author)
    music: Music[]

    @OneToMany(() => Album,(album) => album.author)
    album: Album[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deleteAt: Date

}
