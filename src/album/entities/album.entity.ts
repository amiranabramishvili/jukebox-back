import { Author } from 'src/author/entities/author.entity';
import { CreateMusicDto } from 'src/music/dto/create-music.dto';
import { Music } from 'src/music/entities/music.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  releaseDate: string;

  @ManyToOne(() => Author,(author) => author.album )
  author: Author

  @OneToMany(() => Music, (music) => music.album)
  music: Music[];

  @Column()
  artistName: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
