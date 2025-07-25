import { Injectable } from "@nestjs/common";
import * as AWS from 'aws-sdk'
import { MimeType } from "aws-sdk/clients/kendra";
import { log } from "console";

import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })

@Injectable()
export class S3Service {
    private s3Client: AWS.S3

    constructor() {
        console.log('AWS config:', {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });



        this.s3Client = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY!,
            secretAccessKey: process.env.AWS_SECRET_ACCEES_KEY!,
            region: 'eu-central-1',
            signatureVersion: 'v4'
        })
    }
    async upload(file: Express.Multer.File, key: string) {

        const buffer: Buffer = file.buffer
        const filekey = key
        const params = {
            Bucket: 'jukebox-bucket-general',
            Key: filekey,
            Body: buffer,
            contentType: file.mimetype,
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

    async getPresignedUrl (key: string) {
        const params = {
            Bucket: 'jukebox-bucket-general',
            Key: key
        }
        try {
            const url =await this.s3Client.getSignedUrlPromise('getObject',params)
            return url
        } catch (error){
            console.log(`failed for key ${key}`);
            
        };
        
    }

}