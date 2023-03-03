import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Observable } from 'rxjs';
import { CategoryDto } from './dto/category.dto';
import { CategoryEntity } from './entity/category.entity';
import { SortOrderByEnum } from '../enum/sort-order-by.enum';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  create(@Body() dto: CategoryDto): Observable<CategoryEntity> {
    return this.categoryService.createCategory(dto);
  }

  @Get(':id')
  getCategory(@Param('id') id: number): Observable<CategoryEntity> {
    return this.categoryService.findCategoryById(id);
  }

  @Get()
  getCategories(
    @Query('take') take: number,
    @Query('skip') skip: number,
    @Query('sortedField') sortedField: string,
    @Query('orderBy') orderBy: SortOrderByEnum,
  ): Observable<CategoryEntity[]> {
    return this.categoryService.findCategories(take, skip, sortedField, orderBy);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CategoryDto): Observable<UpdateResult> {
    return this.categoryService.updateCategory(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<DeleteResult> {
    return this.categoryService.removeCategory(id);
  }
}
