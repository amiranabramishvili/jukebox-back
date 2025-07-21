import { CreateMusicDto } from "src/music/dto/create-music.dto";
import { Music } from "src/music/entities/music.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BaseEntity } from 'src/base/base.entity';


@Entity()
export class Playlist extends BaseEntity {
   

    @Column({ nullable: true })
    description: string;

    @ManyToOne(() => User,(user) => user.playList)
    user: User;

    @OneToMany(() => Music, (music) => music.playlists)
    musics: Music[]

   
}
