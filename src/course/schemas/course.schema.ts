import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CourseDocument = Course & Document

@Schema({timestamps:true})
export class Course {
    @Prop({required:true})
    name: string;


    @Prop({required:true})
    duration: string;


    @Prop()
    price: string;
} 


export const CourseSchema = SchemaFactory.createForClass(Course);