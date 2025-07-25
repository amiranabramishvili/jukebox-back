import { Playlist } from 'src/playlist/entities/playlist.entity';
import {
  Column,
  Entity,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from 'src/base/base.entity';

@Entity('user')
export class User extends BaseEntity {
  
  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ default: false })
  isAdmin!: boolean;

  @OneToMany(() => Playlist, (playlist) => playlist.user)
  playList: Playlist;

}
