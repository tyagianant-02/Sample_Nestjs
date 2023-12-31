import { Body, Controller, Post, Put, Param, Delete, NotFoundException } from "@nestjs/common";
import { courseService } from "./course.service";
import { Get } from "@nestjs/common";
import { CourseUpdateDto } from "src/course/course.dto/courseUpdate.dto";
import { CourseCreateDto } from "./course.dto/courseCreate.dto";


@Controller('course')
export class courseController {

    constructor(private courses: courseService) { }


    // Get to get all courses.
    @Get('/all')
    getCourses() {
        try{
            return this.courses.getCourses()
        }
        catch{
            throw new NotFoundException;
        }
    }



    // Get to get course by Id
    @Get(':id')
    getCourseById(@Param('id') id: string) {
        return this.courses.getCourseById(id);
    }

    
    
    // Post to create new entry.
    @Post()
    createCourse(@Body() courseDto: CourseCreateDto) {
        return this.courses.createCourse(courseDto);
    }


    // Put to update an entry.
    @Put(':id')
    updateCourse(
        @Param('id') id: string, @Body() updateData: CourseUpdateDto) {
        return this.courses.updateCourse(id, updateData);
    }


    // Delete to delete an entry.
    @Delete(':id')
    deleteCourse(@Param('id') id: string) {
        return this.courses.deleteCourse(id);
    }

}