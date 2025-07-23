import { Injectable } from "@nestjs/common";
import * as AWS from 'aws-sdk'
import { MimeType } from "aws-sdk/clients/kendra";

import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })

@Injectable()
export class S3Service {
    private s3Client: AWS.S3

    constructor() {
        console.log('AWS config:',{ 
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY});
        
        
            
        this.s3Client = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY!,
            secretAccessKey: process.env.AWS_SECRET_ACCEES_KEY!,
            region: 'eu-central-1',
            signatureVersion: 'v4'
        })
    }
    async upload(fileName: string, file: Buffer, mimetype: MimeType) {
        const params = {
            Bucket: 'jukebox-bucket-general',
            Key: '/music/someFile.mp3',
            Body: file,
            contentType: mimetype,
            CreateBucketConfiguration: {
                LocationConstrait: 'eu-central-1'
            }
        }
        try {
            return await this.s3Client.upload(params).promise()
        } catch (e) {
            throw e

        }
    }

}