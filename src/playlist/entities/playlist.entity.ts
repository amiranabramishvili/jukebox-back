import { CreateMusicDto } from "src/music/dto/create-music.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Playlist {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    description: string;

    @Column()
    userId: number;

    
}
