import { BaseEntity } from "src/base/base.entity";
import { Column, Entity } from "typeorm";

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


}
