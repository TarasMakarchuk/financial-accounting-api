import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Observable } from 'rxjs';
import { CategoryDto } from './dto/category.dto';
import { CategoryEntity } from './entity/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  create(@Body() dto: CategoryDto): Observable<CategoryEntity> {
    return this.categoryService.createCategory(dto);
  }
}
