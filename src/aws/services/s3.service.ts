import { Injectable } from "@nestjs/common";
import * as AWS from 'aws-sdk'

@Injectable()
export class S3Service {
    private s3Client: AWS.S3
    constructor() {
        this.s3Client = new AWS.S3({
            accessKeyId: process.env.AWS_ACCES_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCEES_KEY,
            region: 'eu-central-1',
            signatureVersion: 'V4'
        })
    }
    upload() {
        const param = {
            Bucket: 'jukebox-bucket-general',
            Key: key
            
        }
    }

}